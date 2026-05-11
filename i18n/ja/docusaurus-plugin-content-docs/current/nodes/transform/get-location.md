---
title: Get Location
node_id: SGNGetLocationNode
node_class: SGNGetLocationNode
category: Transform
role: READ
added: 0.1.0
---

object の location を読みます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNGetLocationNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Transform</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/get-location.svg" alt="Get Location node diagram" />
  <figcaption>Get Location の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

object の location を読みます。

## 役割

`READ` - Blender データ、またはノード上に保存された値を読みます。評価中にシーンへ書き戻すことはありません。

## 入力

- Object

## 出力

- Location

## プロパティ

- なし

## 評価の挙動

`object.location` を読み、copy を Vector として出力します。

## よく使う例

- source object の location を Vector Math へ渡す。
- object location を Watch Value で確認する。

## 制限

- 有効な object input が必要です。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
