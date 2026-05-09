---
title: Scene Mesh
node_id: SGNSceneMeshNode
node_class: SGNSceneMeshNode
category: 入力
added: 0.1.0
---

Mesh データと mesh レベルの動的属性を公開します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSceneMeshNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
</div>

## Inputs

- `Mesh`

## Outputs

- `Dynamic mesh attributes`

## Properties

- `mesh_ref`
- `attribute visibility toggles`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

The Mesh input can override the stored mesh reference when linked.
