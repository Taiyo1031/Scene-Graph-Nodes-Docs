# Scene Graph Nodes Docs

Documentation source for the Scene Graph Nodes Blender add-on.

- Production site: <https://taiyo1031.github.io/Scene-Graph-Nodes-Docs/>
- English docs live in `docs/`.
- Japanese docs live in `i18n/ja/docusaurus-plugin-content-docs/current/`.
- Current add-on docs version: `0.1.0`.

## Local Development

```bash
npm install
npm run check-docs
npm run build
npm run start
```

The docs are configured so the documentation is the first screen. English is served from `/`, and Japanese is served from `/ja/`.

## Release Workflow

When the add-on version changes, update `data/project.json`, update both locales, run `npm run check-docs`, run `npm run build`, then snapshot a docs version:

```bash
npm run docusaurus docs:version <version>
```

Commit the generated `versioned_docs/`, `versioned_sidebars/`, and `versions.json` changes with the release docs update.
