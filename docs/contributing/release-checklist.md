---
title: Release Checklist
---

Use this checklist every time `bl_info["version"]` changes.

- Update `data/project.json` to the new add-on version.
- Update `buildLabel` when the build channel or feature label changes.
- Run `npm run generate-node-docs` after node metadata, roles, inputs, outputs, or diagrams change.
- Update changed English docs in `docs/`.
- Update matching Japanese docs in `i18n/ja/docusaurus-plugin-content-docs/current/`.
- Add node pages for new nodes in both locales.
- Update `data/nodes.json` for node additions, removals, renames, roles, and image paths.
- Confirm every node page has an SVG diagram in `static/img/nodes/`.
- Run `npm run check-docs`.
- Run `npm run build`.
- Snapshot the docs version with `npm run docusaurus docs:version <version>`.
- Commit docs source, versioned docs, sidebars, and `versions.json` together.

Current documented build: `0.1.0 group-ui-tools`.
