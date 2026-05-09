---
title: Scene Graph Tree
---

Scene Graph tree は、シーンレベルの関係を扱う独自 Blender `NodeTree` です。ノード、リンク、評価フラグ、最後の評価状態を保存します。

## 実用メモ

- グラフは循環しないようにします。
- 定数には明示的な value node を使います。
- 評価順や型変換を確認するときは Watch Value を使います。
- 副作用ノードは依存関係が読みやすい場所に置きます。
