---
title: Groups
---

Scene Graph Group は別の Scene Graph node tree を generated input / output 付きで評価します。再帰参照は拒否されます。

## 実用メモ

- グラフは循環しないようにします。
- 定数には明示的な value node を使います。
- 評価順や型変換を確認するときは Watch Value を使います。
- 副作用ノードは依存関係が読みやすい場所に置きます。
