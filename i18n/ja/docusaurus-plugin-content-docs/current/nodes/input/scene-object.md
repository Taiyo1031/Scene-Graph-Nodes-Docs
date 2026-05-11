---
title: Scene Object
node_id: SGNSceneObjectNode
node_class: SGNSceneObjectNode
category: 入力
role: READ
added: 0.1.0
---

Blender オブジェクトを動的な RNA / custom property の output socket として公開します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSceneObjectNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/scene-object.svg" alt="Scene Object node diagram" />
  <figcaption>Scene Object の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

Blender オブジェクトを動的な RNA / custom property の output socket として公開します。

## 役割

`READ` - Blender データ、またはノード上に保存された値を読みます。評価中にシーンへ書き戻すことはありません。

## 入力

- なし

## 出力

- カテゴリ別に整理された動的 object attribute output
- 検出された場合の Object identity / data output

## プロパティ

- Object 参照
- Core / Transform / Geometry / Visibility / Render / Data / Custom / All などの section toggle
- Reload action

## 評価の挙動

評価時に選択された object を読み、検出済み attribute の値を対応する output socket に保存します。

## よく使う例

- Transform chain に渡す前に object の location 関連 attribute を読む。
- custom property を公開し、Watch Value で確認する。

## 制限

- 新しい custom property を追加したり object type が変わった場合は Reload してください。
- read-only output から Blender へ書き戻すことはできません。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
