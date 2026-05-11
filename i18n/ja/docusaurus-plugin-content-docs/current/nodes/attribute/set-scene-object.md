---
title: Set Scene Object
node_id: SGNSetSceneObjectNode
node_class: SGNSetSceneObjectNode
category: 属性
role: APPLY
added: 0.1.0
---

生成された input socket を通じて、動的 object attribute を Blender object へ書き戻します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetSceneObjectNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">属性</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-scene-object.svg" alt="Set Scene Object node diagram" />
  <figcaption>Set Scene Object の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

生成された input socket を通じて、動的 object attribute を Blender object へ書き戻します。

## 役割

`APPLY` - 評価済みの値を Blender データへ書き戻します。グラフ内では副作用を持つ終端として扱います。

## 入力

- Object
- カテゴリ別に整理された動的 writable object attribute input

## 出力

- なし

## プロパティ

- Object 参照
- writable category の section toggle
- Use Selected
- Reload action

## 評価の挙動

まず linked Object input を解決し、なければ Object property を使います。必要に応じて socket を更新し、linked/default input value を writable object attribute へ書き込みます。

## よく使う例

- object visibility や custom property を graph から駆動する。
- 読み取り用の Scene Object と、書き戻し用の Set Scene Object を組み合わせる。

## 制限

- manifest で検出された writable attribute だけが公開されます。
- custom property の追加や target object の変更後は Reload してください。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
