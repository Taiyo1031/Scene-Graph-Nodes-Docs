---
title: Get Location
node_id: SGNGetLocationNode
node_class: SGNGetLocationNode
category: トランスフォーム
added: 0.1.0
---

オブジェクトの location を読み取ります。

<div className="sgn-badges">
  <span className="sgn-badge">SGNGetLocationNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">トランスフォーム</span>
</div>

## Inputs

- `Object`

## Outputs

- `Location`

## Properties

- なし

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Requires a valid Blender object.
