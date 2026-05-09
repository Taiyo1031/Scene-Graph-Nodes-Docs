---
title: Object Input
node_id: SGNObjectInputNode
node_class: SGNObjectInputNode
category: 入力
added: 0.1.0
---

Blender オブジェクトを参照し、Transform や Attribute チェーンへ渡します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNObjectInputNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
</div>

## Inputs

- なし

## Outputs

- `Object`

## Properties

- `Object reference`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Missing object reports an evaluation error.
