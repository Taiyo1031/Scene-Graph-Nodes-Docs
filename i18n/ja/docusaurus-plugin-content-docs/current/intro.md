---
id: intro
title: Scene Graph Nodes
slug: /
---

Scene Graph Nodes は、Blender の標準 Node Editor 上でシーンレベルのノードグラフを作るためのアドオンです。オブジェクト、Transform、Matrix、Attribute、Group、Debug 値を接続して評価できます。

<div className="sgn-badges">
  <span className="sgn-badge">アドオン version 0.1.0</span>
  <span className="sgn-badge">Build 0.1.0 group-ui-tools</span>
  <span className="sgn-badge">英語 + 日本語</span>
  <span className="sgn-badge">ノード別ページ構成</span>
</div>

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/node-role-map.svg" alt="Scene Graph Nodes role map" />
  <figcaption>現在の build では、read、compute、apply、layout、debug の役割が分かるようにノードを整理しています。</figcaption>
</figure>

## このドキュメントの内容

- 開発用インストール方法。
- Scene Graph node tree の評価の流れ。
- Object / Mesh の動的属性ソケット。
- 実装済みノードの個別リファレンス。
- リリースごとのドキュメント更新手順。

## 現在のノード一覧

この表は build `0.1.0 group-ui-tools` に対応しています。

| ジャンル | ノード名 | 役割 |
|---|---|---|
| Input | Scene Object | READ |
| Input | Scene Mesh | READ |
| Input | Object Input | READ |
| Input | Float Value | READ |
| Input | Vector Value | READ |
| Transform | Get Location | READ |
| Transform | Set Location | APPLY |
| Transform | Get Matrix World | READ |
| Transform | Set Matrix World | APPLY |
| Math | Math | COMPUTE |
| Math | Vector Math | COMPUTE |
| Matrix | Matrix Math | COMPUTE |
| Matrix | Compose Matrix | COMPUTE |
| Matrix | Decompose Matrix | COMPUTE |
| Attribute | Set Scene Object | APPLY |
| Attribute | Set Scene Mesh | APPLY |
| Attribute | Set Attribute | APPLY |
| Layout | Scene Graph Reroute | ORGANIZATION |
| Layout | Scene Graph Group | ORGANIZATION |
| Debug | Watch Value | DEBUG |

## 役割の意味

- `READ`: Blender data または node value から読みます。
- `COMPUTE`: 入力から値を計算します。
- `APPLY`: 評価済みの値を Blender へ書き込みます。
- `ORGANIZATION`: graph を再利用しやすく、配線しやすく整理します。
- `DEBUG`: 値を表示または検査します。

まずは [Installation](./installation.md) と [Quick Start](./quick-start.md) から始めてください。
