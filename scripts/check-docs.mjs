import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = path.resolve(process.env.SCENE_GRAPH_NODES_SOURCE || '../Scene Graph Nodes');
const project = JSON.parse(fs.readFileSync(path.join(root, 'data/project.json'), 'utf8'));
const documentedNodes = JSON.parse(fs.readFileSync(path.join(root, 'data/nodes.json'), 'utf8'));

function fail(message) {
  console.error(`docs check failed: ${message}`);
  process.exitCode = 1;
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

const initPath = path.join(sourceRoot, 'scene_graph_nodes', '__init__.py');
if (!fs.existsSync(initPath)) {
  fail(`source add-on not found at ${sourceRoot}`);
} else {
  const initText = read(initPath);
  const match = initText.match(/"version"\s*:\s*\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\)/);
  if (!match) {
    fail('could not parse bl_info version');
  } else {
    const addonVersion = `${match[1]}.${match[2]}.${match[3]}`;
    if (project.addonVersion !== addonVersion || project.docsVersion !== addonVersion) {
      fail(`documented version ${project.docsVersion}/${project.addonVersion} does not match add-on ${addonVersion}`);
    }
  }
}

const nodeDir = path.join(sourceRoot, 'scene_graph_nodes', 'nodes');
const sourceNodes = new Map();
if (fs.existsSync(nodeDir)) {
  for (const file of fs.readdirSync(nodeDir)) {
    if (!file.endsWith('.py')) continue;
    const text = read(path.join(nodeDir, file));
    const classRegex = /class\s+(SGN\w+Node)\([^)]*\):([\s\S]*?)(?=\nclass\s+SGN\w+Node\(|\nCLASSES\s*=|\n\Z)/g;
    for (const match of text.matchAll(classRegex)) {
      const body = match[2];
      const idMatch = body.match(/bl_idname\s*=\s*["']([^"']+)["']/);
      const labelMatch = body.match(/bl_label\s*=\s*["']([^"']+)["']/);
      if (idMatch) {
        sourceNodes.set(idMatch[1], {nodeClass: match[1], label: labelMatch?.[1] || idMatch[1], file});
      }
    }
  }
} else {
  fail(`node source directory not found: ${nodeDir}`);
}

const docsById = new Map(documentedNodes.map((node) => [node.nodeId, node]));
for (const [nodeId, source] of sourceNodes) {
  const doc = docsById.get(nodeId);
  if (!doc) {
    fail(`missing data/nodes.json entry for ${nodeId}`);
    continue;
  }
  if (doc.nodeClass !== source.nodeClass) {
    fail(`${nodeId} class mismatch: docs=${doc.nodeClass}, source=${source.nodeClass}`);
  }
  for (const locale of ['en', 'ja']) {
    const docPath = locale === 'en'
      ? path.join(root, 'docs', `${doc.path}.md`)
      : path.join(root, 'i18n/ja/docusaurus-plugin-content-docs/current', `${doc.path}.md`);
    if (!fs.existsSync(docPath)) {
      fail(`missing ${locale} doc page for ${nodeId}: ${docPath}`);
      continue;
    }
    const docText = read(docPath);
    for (const required of [`node_id: ${nodeId}`, `node_class: ${doc.nodeClass}`, `added: ${doc.added}`]) {
      if (!docText.includes(required)) {
        fail(`${locale} doc for ${nodeId} is missing front matter: ${required}`);
      }
    }
  }
}

for (const doc of documentedNodes) {
  if (!sourceNodes.has(doc.nodeId)) {
    fail(`data/nodes.json documents ${doc.nodeId}, but source node was not found`);
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}
console.log(`Docs coverage OK: ${documentedNodes.length} nodes, version ${project.docsVersion}.`);
