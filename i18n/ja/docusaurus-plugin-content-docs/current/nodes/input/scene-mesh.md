---
title: Scene Mesh
node_id: SGNSceneMeshNode
node_class: SGNSceneMeshNode
category: 入力
role: READ
added: 0.1.0
---

Mesh data と mesh レベルの動的 attribute を output socket として公開します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSceneMeshNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/scene-mesh.svg" alt="Scene Mesh node diagram" />
  <figcaption>Scene Mesh の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

Mesh data と mesh レベルの動的 attribute を output socket として公開します。

## 役割

`READ` - Blender データ、またはノード上に保存された値を読みます。評価中にシーンへ書き戻すことはありません。

## 入力

- なし

## 出力

- 動的 mesh attribute output
- 利用可能な Geometry / Material / Custom / data-block 値

## プロパティ

- Mesh 参照
- Section toggle
- Use Selected Mesh
- Reload action

## 評価の挙動

参照中の mesh を読み、検出済み mesh 値を公開します。mesh data は変更しません。

## よく使う例

- mesh レベルの custom property を読む。
- どの writable socket を駆動するか決める前に mesh attribute を確認する。

## 制限

- Mesh data-block が必要です。
- socket として出したい topology / custom property 変更後は Reload してください。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
