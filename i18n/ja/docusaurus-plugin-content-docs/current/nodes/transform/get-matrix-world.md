---
title: Get Matrix World
node_id: SGNGetMatrixWorldNode
node_class: SGNGetMatrixWorldNode
category: トランスフォーム
added: 0.1.0
---

オブジェクトの world matrix を読み取ります。

<div className="sgn-badges">
  <span className="sgn-badge">SGNGetMatrixWorldNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">トランスフォーム</span>
</div>

## Inputs

- `Object`

## Outputs

- `Matrix`

## Properties

- なし

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Outputs a copy of object.matrix_world.
