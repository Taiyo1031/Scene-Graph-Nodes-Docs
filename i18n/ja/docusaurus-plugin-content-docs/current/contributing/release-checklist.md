---
title: リリースチェックリスト
---

`bl_info["version"]` が変わるたびにこの checklist を使います。

- `data/project.json` を新しい add-on version に更新します。
- build channel や feature label が変わった場合は `buildLabel` を更新します。
- node metadata、役割、input、output、図解が変わった場合は `npm run generate-node-docs` を実行します。
- `docs/` の英語ドキュメントを更新します。
- `i18n/ja/docusaurus-plugin-content-docs/current/` の日本語ドキュメントも同じ内容に更新します。
- 新規ノードがある場合は両言語で node page を追加します。
- ノードの追加、削除、rename、役割、画像 path がある場合は `data/nodes.json` を更新します。
- すべての node page に `static/img/nodes/` の SVG 図解があることを確認します。
- `npm run check-docs` を実行します。
- `npm run build` を実行します。
- `npm run docusaurus docs:version <version>` で docs version を snapshot します。
- docs source、versioned docs、sidebars、`versions.json` をまとめて commit します。

現在の document build: `0.1.0 group-ui-tools`。
