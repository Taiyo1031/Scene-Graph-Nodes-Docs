---
title: Scene Graph Reroute
node_id: SGNRerouteNode
node_class: SGNRerouteNode
category: レイアウト
added: 0.1.0
---

型付きの reroute ソケットとして値を通します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNRerouteNode</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">レイアウト</span>
</div>

## Inputs

- `Input`

## Outputs

- `Output`

## Properties

- `socket_type`

## Evaluation

Evaluator はまずリンクされた input を読み、対応している場合は socket default に fallback し、output を evaluation context に保存します。このノードは Blender データを直接書き換えません。



## Example

小さなグラフ内でこのノードを使い、副作用ノードへ接続する前に **Watch Value** で評価結果を確認します。

## Limitations

The socket type can be adopted from connected Scene Graph sockets.
