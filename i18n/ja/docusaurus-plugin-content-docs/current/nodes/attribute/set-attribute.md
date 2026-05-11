---
title: Set Attribute
node_id: SGNSetAttributeNode
node_class: SGNSetAttributeNode
category: 属性
role: APPLY
added: 0.1.0
---

attribute path を指定して、限定された object attribute または custom property へ値を書き込みます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetAttributeNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">属性</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-attribute.svg" alt="Set Attribute node diagram" />
  <figcaption>Set Attribute の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

attribute path を指定して、限定された object attribute または custom property へ値を書き込みます。

## 役割

`APPLY` - 評価済みの値を Blender データへ書き戻します。グラフ内では副作用を持つ終端として扱います。

## 入力

- Target
- Value

## 出力

- なし

## プロパティ

- Attribute Path

## 評価の挙動

`hide_viewport`、`hide_render`、または `["my_prop"]` のような custom property path へ Value を書き込みます。

## よく使う例

- viewport visibility を切り替える。
- simple custom property を書き込む。

## 制限

- `hide_viewport`、`hide_render`、custom property path のみ対応しています。
- 生成された writable object socket が必要な場合は Set Scene Object を使ってください。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
