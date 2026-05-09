---
title: Scene Graph Reroute
node_id: SGNRerouteNode
node_class: SGNRerouteNode
category: Layout
added: 0.1.0
---

Passes values through a typed reroute socket.

<div className="sgn-badges">
  <span className="sgn-badge">SGNRerouteNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Layout</span>
</div>

## Inputs

- `Input`

## Outputs

- `Output`

## Properties

- `socket_type`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

The socket type can be adopted from connected Scene Graph sockets.
