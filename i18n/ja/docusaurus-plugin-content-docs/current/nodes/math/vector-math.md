---
title: Vector Math
node_id: SGNVectorMathNode
node_class: SGNVectorMathNode
category: 数値計算
added: 0.1.0
---

ベクトル演算と距離・長さなどのスカラー計測を実行します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNVectorMathNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">数値計算</span>
</div>

## Inputs

- `A`
- `B`
- `Scale`

## Outputs

- `Vector`
- `Value`

## Properties

- `operation`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。

操作: Add、Subtract、Multiply、Scale、Dot Product、Cross Product、Length、Distance、Normalize。

## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Some operations output Vector, some output Value; unused output remains its default value.
