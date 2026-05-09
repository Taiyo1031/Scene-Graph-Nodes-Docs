---
title: Scene Graph Group
node_id: SGNGroupNode
node_class: SGNGroupNode
category: レイアウト
added: 0.1.0
---

別の Scene Graph node tree を現在のグラフ内で再利用・評価します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNGroupNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">レイアウト</span>
</div>

## Inputs

- `Generated from group interface`

## Outputs

- `Generated from group interface`

## Properties

- `group_tree`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Recursive group references are blocked.
