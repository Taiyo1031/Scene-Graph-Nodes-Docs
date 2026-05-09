---
title: Scene Object
node_id: SGNSceneObjectNode
node_class: SGNSceneObjectNode
category: 入力
added: 0.1.0
---

Blender オブジェクトの RNA とカスタムプロパティを動的ソケットとして公開します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNSceneObjectNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">入力</span>
</div>

## Inputs

- `Linked writable attribute inputs`
- `Read-only alignment handles`

## Outputs

- `Dynamic object attributes`

## Properties

- `object_ref`
- `attribute visibility toggles`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは評価中に Blender データを書き換えます。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

Attributes are discovered on reload; newly added custom properties need Reload.
