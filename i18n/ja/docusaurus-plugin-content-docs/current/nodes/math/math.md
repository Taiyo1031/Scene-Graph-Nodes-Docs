---
title: Math
node_id: SGNMathNode
node_class: SGNMathNode
category: Math
role: COMPUTE
added: 0.1.0
---

float の math operation を実行します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNMathNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Math</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/math.svg" alt="Math node diagram" />
  <figcaption>Math の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

float の math operation を実行します。

## 役割

`COMPUTE` - 入力から派生値を計算し、結果を output socket に出します。

## 入力

- A
- B

## 出力

- Result

## プロパティ

- Operation: Add, Subtract, Multiply, Divide, Sine, Cosine, Minimum, Maximum, Absolute

## 評価の挙動

選択された operation を評価し、float result を出力します。

## よく使う例

- 数値 driver value を scale する。
- Minimum / Maximum で値を比較または制限する。

## 制限

- 0 除算は evaluation error になります。
- 単項 operation でも B socket は表示されたままです。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
