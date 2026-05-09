---
title: Float Value
node_id: SGNFloatValueNode
node_class: SGNFloatValueNode
category: 入力
added: 0.1.0
---

固定の float 値を出力します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNFloatValueNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
</div>

## Inputs

- なし

## Outputs

- `Value`

## Properties

- `value`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Outputs a Python float.
