---
title: Set Scene Mesh
node_id: SGNSetSceneMeshNode
node_class: SGNSetSceneMeshNode
category: 属性
role: APPLY
added: 0.1.0
---

生成された input socket を通じて、動的 mesh attribute を Blender mesh へ書き戻します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetSceneMeshNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">属性</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-scene-mesh.svg" alt="Set Scene Mesh node diagram" />
  <figcaption>Set Scene Mesh の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

生成された input socket を通じて、動的 mesh attribute を Blender mesh へ書き戻します。

## 役割

`APPLY` - 評価済みの値を Blender データへ書き戻します。グラフ内では副作用を持つ終端として扱います。

## 入力

- Mesh
- カテゴリ別に整理された動的 writable mesh attribute input

## 出力

- なし

## プロパティ

- Mesh 参照
- writable category の section toggle
- Use Selected Mesh
- Reload action

## 評価の挙動

まず linked Mesh input を解決し、なければ Mesh property を使います。必要に応じて socket を更新し、linked/default input value を writable mesh attribute へ書き込みます。

## よく使う例

- computed value から mesh custom property を書き込む。
- Scene Mesh で利用可能な data を確認し、Set Scene Mesh で writable field を駆動する。

## 制限

- manifest で検出された writable mesh attribute だけが公開されます。
- read-only の mesh RNA 値は writable input として表示されません。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
