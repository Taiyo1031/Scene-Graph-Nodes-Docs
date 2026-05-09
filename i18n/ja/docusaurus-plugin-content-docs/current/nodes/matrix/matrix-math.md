---
title: Matrix Math
node_id: SGNMatrixMathNode
node_class: SGNMatrixMathNode
category: 行列
added: 0.1.0
---

行列の乗算、逆行列、Identity 出力を実行します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNMatrixMathNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">行列</span>
</div>

## Inputs

- `A`
- `B`

## Outputs

- `Matrix`

## Properties

- `operation`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。

操作: Multiply、Inverse A、Identity。

## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Inverse reports an error when the matrix cannot be inverted.
