---
title: Decompose Matrix
node_id: SGNDecomposeMatrixNode
node_class: SGNDecomposeMatrixNode
category: Matrix
role: COMPUTE
added: 0.1.0
---

matrix を location、Euler rotation、scale に分解します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNDecomposeMatrixNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Matrix</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/decompose-matrix.svg" alt="Decompose Matrix node diagram" />
  <figcaption>Decompose Matrix の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

matrix を location、Euler rotation、scale に分解します。

## 役割

`COMPUTE` - 入力から派生値を計算し、結果を output socket に出します。

## 入力

- Matrix

## 出力

- Location
- Rotation
- Scale

## プロパティ

- なし

## 評価の挙動

matrix を分解し、rotation を Euler に変換して TRS output を出力します。

## よく使う例

- world matrix を読みやすい TRS 値として確認する。
- transform の scale 部分だけを再利用する。

## 制限

- matrix decomposition は Blender mathutils の挙動に従います。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
