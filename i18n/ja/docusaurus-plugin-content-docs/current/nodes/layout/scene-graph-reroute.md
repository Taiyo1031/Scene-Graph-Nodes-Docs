---
title: Scene Graph Reroute
node_id: SGNRerouteNode
node_class: SGNRerouteNode
category: Layout
role: ORGANIZATION
added: 0.1.0
---

型付き reroute socket として値を通過させます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNRerouteNode</span>
  <span className="sgn-badge">ORGANIZATION</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Layout</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/scene-graph-reroute.svg" alt="Scene Graph Reroute node diagram" />
  <figcaption>Scene Graph Reroute の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

型付き reroute socket として値を通過させます。

## 役割

`ORGANIZATION` - グループ化や型付きの通過配線で、グラフを整理するためのノードです。

## 入力

- Input

## 出力

- Output

## プロパティ

- Type。可能な場合は接続された socket から自動同期されます。

## 評価の挙動

値を変更せずに Input を Output へ渡します。

## よく使う例

- 長い wire を読みやすく整理する。
- reroute を通して Scene Graph socket color を保つ。

## 制限

- 整理用ノードであり、計算ノードではありません。
- type 変更時に socket が再構築され、link がつなぎ直されることがあります。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
