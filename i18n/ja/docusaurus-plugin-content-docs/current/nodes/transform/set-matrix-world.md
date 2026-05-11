---
title: Set Matrix World
node_id: SGNSetMatrixWorldNode
node_class: SGNSetMatrixWorldNode
category: Transform
role: APPLY
added: 0.1.0
---

Matrix を object の world transform へ書き込みます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetMatrixWorldNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Transform</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-matrix-world.svg" alt="Set Matrix World node diagram" />
  <figcaption>Set Matrix World の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

Matrix を object の world transform へ書き込みます。

## 役割

`APPLY` - 評価済みの値を Blender データへ書き戻します。グラフ内では副作用を持つ終端として扱います。

## 入力

- Object
- Matrix

## 出力

- なし

## プロパティ

- なし

## 評価の挙動

object と matrix input を解決し、`object.matrix_world` へ代入します。

## よく使う例

- Copy Matrix World chain の終端に置く。
- location / rotation / scale から組み立てた matrix を適用する。

## 制限

- 評価中に scene を直接変更します。
- 無効な matrix 値は予期しない transform を作ることがあります。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
