---
title: リリースチェックリスト
---

`bl_info["version"]` が変わるたびにこの checklist を使います。

- `data/project.json` を新しい add-on version に更新します。
- `docs/` の英語ドキュメントを更新します。
- `i18n/ja/docusaurus-plugin-content-docs/current/` の日本語ドキュメントも同じ内容に更新します。
- 新規ノードがある場合は両言語で node page を追加します。
- ノードの追加、削除、rename がある場合は `data/nodes.json` を更新します。
- `npm run check-docs` を実行します。
- `npm run build` を実行します。
- `npm run docusaurus docs:version <version>` で docs version を snapshot します。
- docs source、versioned docs、sidebars、`versions.json` をまとめて commit します。

現在の document add-on version: `0.1.0`。
