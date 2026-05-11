---
title: Vector Math
node_id: SGNVectorMathNode
node_class: SGNVectorMathNode
category: Math
role: COMPUTE
added: 0.1.0
---

vector math と scalar vector measurement を実行します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNVectorMathNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Math</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/vector-math.svg" alt="Vector Math node diagram" />
  <figcaption>Vector Math の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

vector math と scalar vector measurement を実行します。

## 役割

`COMPUTE` - 入力から派生値を計算し、結果を output socket に出します。

## 入力

- A
- B
- Scale

## 出力

- Vector
- Value

## プロパティ

- Operation: Add, Subtract, Multiply, Scale, Dot Product, Cross Product, Length, Distance, Normalize

## 評価の挙動

vector output と scalar output を計算します。scalar のみを返す operation では Vector は zero のままです。

## よく使う例

- コピーした location に offset を加える。
- 2 つの vector 間の距離を測る。

## 制限

- どの output が意味を持つかは active operation によって変わります。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
