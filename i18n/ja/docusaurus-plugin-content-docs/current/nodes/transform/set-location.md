---
title: Set Location
node_id: SGNSetLocationNode
node_class: SGNSetLocationNode
category: Transform
role: APPLY
added: 0.1.0
---

Vector を object location へ書き込みます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetLocationNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Transform</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-location.svg" alt="Set Location node diagram" />
  <figcaption>Set Location の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

Vector を object location へ書き込みます。

## 役割

`APPLY` - 評価済みの値を Blender データへ書き戻します。グラフ内では副作用を持つ終端として扱います。

## 入力

- Object
- Location

## 出力

- なし

## プロパティ

- なし

## 評価の挙動

object と vector input を解決し、`object.location` へ代入します。

## よく使う例

- Copy Location chain の終端に置く。
- Vector Math の offset 結果を target object に適用する。

## 制限

- 評価中に scene を直接変更します。
- Object と Location の両 input が必要です。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
