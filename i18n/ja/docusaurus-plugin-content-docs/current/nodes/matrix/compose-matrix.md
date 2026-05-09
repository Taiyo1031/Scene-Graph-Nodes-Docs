---
title: Compose Matrix
node_id: SGNComposeMatrixNode
node_class: SGNComposeMatrixNode
category: 行列
added: 0.1.0
---

Location、Euler Rotation、Scale から行列を作ります。

<div className="sgn-badges">
  <span className="sgn-badge">SGNComposeMatrixNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">行列</span>
</div>

## Inputs

- `Location`
- `Rotation`
- `Scale`

## Outputs

- `Matrix`

## Properties

- なし

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Rotation uses Euler values and scale defaults to (1, 1, 1).
