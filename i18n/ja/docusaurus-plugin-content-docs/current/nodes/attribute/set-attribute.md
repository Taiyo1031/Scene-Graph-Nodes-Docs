---
title: Set Attribute
node_id: SGNSetAttributeNode
node_class: SGNSetAttributeNode
category: 属性
added: 0.1.0
---

限定されたオブジェクト属性またはカスタムプロパティへ値を書き込みます。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetAttributeNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">属性</span>
</div>

## Inputs

- `Target`
- `Value`

## Outputs

- なし

## Properties

- `attribute_path`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは評価中に Blender データを書き換えます。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Only hide_viewport, hide_render, and custom property paths are accepted.
