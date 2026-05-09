---
title: Sockets
---

Scene Graph ソケットは Float、Vector、Matrix、Object、Mesh、Material、Collection、Any など Blender 向けの値を運びます。

## 実用メモ

- グラフは循環しないようにします。
- 定数には明示的な value node を使います。
- 評価順や型変換を確認するときは Watch Value を使います。
- 副作用ノードは依存関係が読みやすい場所に置きます。
