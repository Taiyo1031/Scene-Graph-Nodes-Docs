---
title: Scene Graph Group
node_id: SGNGroupNode
node_class: SGNGroupNode
category: Layout
role: ORGANIZATION
added: 0.1.0
---

別の graph 内で再利用可能な Scene Graph node tree を評価します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNGroupNode</span>
  <span className="sgn-badge">ORGANIZATION</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Layout</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/scene-graph-group.svg" alt="Scene Graph Group node diagram" />
  <figcaption>Scene Graph Group の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

別の graph 内で再利用可能な Scene Graph node tree を評価します。

## 役割

`ORGANIZATION` - グループ化や型付きの通過配線で、グラフを整理するためのノードです。

## 入力

- group tree interface から生成

## 出力

- group tree interface から生成

## プロパティ

- Group tree
- Edit action
- Ungroup action

## 評価の挙動

input socket value を nested Scene Graph tree に渡し、group output value を parent graph へ戻します。

## よく使う例

- 繰り返し使う transform chain をまとめる。
- selected nodes から再利用可能な graph tool を作る。

## 制限

- 有効な Scene Graph node tree が必要です。
- interface は nested group の input/output に従います。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
