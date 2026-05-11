---
title: Vector Value
node_id: SGNVectorValueNode
node_class: SGNVectorValueNode
category: 入力
role: READ
added: 0.1.0
---

固定の 3D vector を出力します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNVectorValueNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/vector-value.svg" alt="Vector Value node diagram" />
  <figcaption>Vector Value の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

固定の 3D vector を出力します。

## 役割

`READ` - Blender データ、またはノード上に保存された値を読みます。評価中にシーンへ書き戻すことはありません。

## 入力

- なし

## 出力

- Vector

## プロパティ

- Vector X/Y/Z

## 評価の挙動

保存された XYZ 値を Vector に変換して出力します。

## よく使う例

- コピーした location に offset を追加する。
- default scale や direction value を渡す。

## 制限

- 保持できる XYZ vector は 1 つだけです。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
