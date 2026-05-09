---
title: Math
node_id: SGNMathNode
node_class: SGNMathNode
category: 数値計算
added: 0.1.0
---

float の数値演算を実行します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNMathNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">数値計算</span>
</div>

## Inputs

- `A`
- `B`

## Outputs

- `Result`

## Properties

- `operation`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。

操作: Add、Subtract、Multiply、Divide、Sine、Cosine、Minimum、Maximum、Absolute。

## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Division by zero reports an evaluation error.
