---
title: Get Matrix World
node_id: SGNGetMatrixWorldNode
node_class: SGNGetMatrixWorldNode
category: Transform
role: READ
added: 0.1.0
---

object の world matrix を読みます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNGetMatrixWorldNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Transform</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/get-matrix-world.svg" alt="Get Matrix World node diagram" />
  <figcaption>Get Matrix World の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

object の world matrix を読みます。

## 役割

`READ` - Blender データ、またはノード上に保存された値を読みます。評価中にシーンへ書き戻すことはありません。

## 入力

- Object

## 出力

- Matrix

## プロパティ

- なし

## 評価の挙動

`object.matrix_world` を読み、copy を Matrix として出力します。

## よく使う例

- world transform をコピーする。
- world matrix を TRS 値に分解する。

## 制限

- 有効な object input が必要です。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
