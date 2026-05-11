---
title: Matrix Math
node_id: SGNMatrixMathNode
node_class: SGNMatrixMathNode
category: Matrix
role: COMPUTE
added: 0.1.0
---

matrix multiplication、inversion、identity output を実行します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNMatrixMathNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Matrix</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/matrix-math.svg" alt="Matrix Math node diagram" />
  <figcaption>Matrix Math の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

matrix multiplication、inversion、identity output を実行します。

## 役割

`COMPUTE` - 入力から派生値を計算し、結果を output socket に出します。

## 入力

- A
- B

## 出力

- Matrix

## プロパティ

- Operation: Multiply, Inverse A, Identity

## 評価の挙動

operation に応じて `A @ B`、`A.inverted()`、または 4x4 identity matrix を返します。

## よく使う例

- 2 つの transform を合成する。
- 下流へ渡す前に matrix を反転する。

## 制限

- 無効な inverse operation は evaluation error になります。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
