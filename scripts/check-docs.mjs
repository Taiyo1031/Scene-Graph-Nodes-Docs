import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = path.resolve(process.env.SCENE_GRAPH_NODES_SOURCE || '../Scene Graph Nodes');
const requireSource = process.env.REQUIRE_SCENE_GRAPH_NODES_SOURCE === '1';
const project = JSON.parse(fs.readFileSync(path.join(root, 'data/project.json'), 'utf8'));
const documentedNodes = JSON.parse(fs.readFileSync(path.join(root, 'data/nodes.json'), 'utf8'));
const validRoles = new Set(['READ', 'COMPUTE', 'APPLY', 'ORGANIZATION', 'DEBUG']);

function fail(message) {
  console.error(`docs check failed: ${message}`);
  process.exitCode = 1;
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

const initPath = path.join(sourceRoot, 'scene_graph_nodes', '__init__.py');
if (!fs.existsSync(initPath)) {
  if (requireSource) {
    fail(`source add-on not found at ${sourceRoot}`);
  } else {
    console.warn(`source add-on not found at ${sourceRoot}; running static docs coverage only`);
  }
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
} else if (requireSource) {
  fail(`node source directory not found: ${nodeDir}`);
}

const docsById = new Map(documentedNodes.map((node) => [node.nodeId, node]));
const nodesToCheck = sourceNodes.size
  ? [...sourceNodes].map(([nodeId, source]) => {
      const doc = docsById.get(nodeId);
      if (!doc) {
        fail(`missing data/nodes.json entry for ${nodeId}`);
        return null;
      }
      if (doc.nodeClass !== source.nodeClass) {
        fail(`${nodeId} class mismatch: docs=${doc.nodeClass}, source=${source.nodeClass}`);
      }
      return doc;
    }).filter(Boolean)
  : documentedNodes;

for (const doc of nodesToCheck) {
  if (!validRoles.has(doc.role)) {
    fail(`${doc.nodeId} has invalid or missing role: ${doc.role}`);
  }
  if (!doc.image) {
    fail(`${doc.nodeId} is missing image metadata`);
  } else {
    const imagePath = path.join(root, 'static', doc.image);
    if (!fs.existsSync(imagePath)) {
      fail(`${doc.nodeId} image is missing: ${imagePath}`);
    }
  }
  for (const locale of ['en', 'ja']) {
    const docPath = locale === 'en'
      ? path.join(root, 'docs', `${doc.path}.md`)
      : path.join(root, 'i18n/ja/docusaurus-plugin-content-docs/current', `${doc.path}.md`);
    if (!fs.existsSync(docPath)) {
      fail(`missing ${locale} doc page for ${doc.nodeId}: ${docPath}`);
      continue;
    }
    const docText = read(docPath);
    for (const required of [`node_id: ${doc.nodeId}`, `node_class: ${doc.nodeClass}`, `role: ${doc.role}`, `added: ${doc.added}`]) {
      if (!docText.includes(required)) {
        fail(`${locale} doc for ${doc.nodeId} is missing front matter: ${required}`);
      }
    }
    if (doc.image && !docText.includes(doc.image)) {
      fail(`${locale} doc for ${doc.nodeId} does not reference image ${doc.image}`);
    }
  }
}

if (sourceNodes.size) {
  for (const doc of documentedNodes) {
    if (!sourceNodes.has(doc.nodeId)) {
      fail(`data/nodes.json documents ${doc.nodeId}, but source node was not found`);
    }
  }
}

if (process.exitCode) {
  process.exit(process.exitCode);
}
console.log(`Docs coverage OK: ${documentedNodes.length} nodes, version ${project.docsVersion}.`);
