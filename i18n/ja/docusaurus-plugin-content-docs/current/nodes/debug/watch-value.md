---
title: Watch Value
node_id: SGNWatchValueNode
node_class: SGNWatchValueNode
category: デバッグ
added: 0.1.0
---

評価された値をノード UI に表示します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNWatchValueNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">デバッグ</span>
</div>

## Inputs

- `Value`

## Outputs

- なし

## Properties

- `display_value`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Displays up to six lines in the node UI.
