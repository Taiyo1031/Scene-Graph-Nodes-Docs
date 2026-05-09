---
title: Set Location
node_id: SGNSetLocationNode
node_class: SGNSetLocationNode
category: トランスフォーム
added: 0.1.0
---

ベクトルをオブジェクトの location に書き込みます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetLocationNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">トランスフォーム</span>
</div>

## Inputs

- `Object`
- `Location`

## Outputs

- なし

## Properties

- なし

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは評価中に Blender データを書き換えます。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

This is side-effecting and writes to the Blender object.
