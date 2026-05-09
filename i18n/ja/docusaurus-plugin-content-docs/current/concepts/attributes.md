---
title: Attributes
---

Scene Object と Scene Mesh は RNA とカスタムプロパティをスキャンし、動的ソケットとして公開します。リンクされた writable input は output 読み取り前に書き込まれます。

## 実用メモ

- グラフは循環しないようにします。
- 定数には明示的な value node を使います。
- 評価順や型変換を確認するときは Watch Value を使います。
- 副作用ノードは依存関係が読みやすい場所に置きます。
