---
title: Float Value
node_id: SGNFloatValueNode
node_class: SGNFloatValueNode
category: 入力
role: READ
added: 0.1.0
---

固定の float 値を出力します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNFloatValueNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/float-value.svg" alt="Float Value node diagram" />
  <figcaption>Float Value の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

固定の float 値を出力します。

## 役割

`READ` - Blender データ、またはノード上に保存された値を読みます。評価中にシーンへ書き戻すことはありません。

## 入力

- なし

## 出力

- Value

## プロパティ

- Value

## 評価の挙動

保存された値を float に変換して出力します。

## よく使う例

- Math input を駆動する。
- Vector Math の scale factor として使う。

## 制限

- 保持できる scalar 値は 1 つだけです。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
