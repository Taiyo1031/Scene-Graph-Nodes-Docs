---
title: Object Input
node_id: SGNObjectInputNode
node_class: SGNObjectInputNode
category: 入力
role: READ
added: 0.1.0
---

1 つの Blender object を参照し、Transform や Attribute chain に渡す object を出力します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNObjectInputNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/object-input.svg" alt="Object Input node diagram" />
  <figcaption>Object Input の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

1 つの Blender object を参照し、Transform や Attribute chain に渡す object を出力します。

## 役割

`READ` - Blender データ、またはノード上に保存された値を読みます。評価中にシーンへ書き戻すことはありません。

## 入力

- なし

## 出力

- Object

## プロパティ

- Object 参照
- Use Selected action

## 評価の挙動

参照中の object を出力します。object が未設定の場合、評価は失敗します。

## よく使う例

- 安定した object 参照を Get Location や Set Location へ渡す。
- quick preset で object 駆動の transform chain を作る。

## 制限

- 単一の object 参照だけを出力します。
- 動的 object attribute は公開しません。その用途には Scene Object を使ってください。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
