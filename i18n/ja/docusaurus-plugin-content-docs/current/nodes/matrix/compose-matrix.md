---
title: Compose Matrix
node_id: SGNComposeMatrixNode
node_class: SGNComposeMatrixNode
category: Matrix
role: COMPUTE
added: 0.1.0
---

location、Euler rotation、scale から matrix を組み立てます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNComposeMatrixNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Matrix</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/compose-matrix.svg" alt="Compose Matrix node diagram" />
  <figcaption>Compose Matrix の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

location、Euler rotation、scale から matrix を組み立てます。

## 役割

`COMPUTE` - 入力から派生値を計算し、結果を output socket に出します。

## 入力

- Location
- Rotation
- Scale

## 出力

- Matrix

## プロパティ

- なし

## 評価の挙動

translation、rotation、scale matrix を作成し、TRS order で乗算します。

## よく使う例

- Set Matrix World 用の matrix を作る。
- read location と procedural scale を合成する。

## 制限

- Rotation input は Euler 値を想定します。
- default scale は全軸 1 です。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
