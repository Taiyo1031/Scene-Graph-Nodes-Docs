---
title: Decompose Matrix
node_id: SGNDecomposeMatrixNode
node_class: SGNDecomposeMatrixNode
category: 行列
added: 0.1.0
---

行列を Location、Euler Rotation、Scale に分解します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNDecomposeMatrixNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">行列</span>
</div>

## Inputs

- `Matrix`

## Outputs

- `Location`
- `Rotation`
- `Scale`

## Properties

- なし

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Rotation is converted to Euler.
