---
title: Get Location
node_id: SGNGetLocationNode
node_class: SGNGetLocationNode
category: Transform
added: 0.1.0
---

Reads an object location.

<div className="sgn-badges">
  <span className="sgn-badge">SGNGetLocationNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Transform</span>
</div>

## Inputs

- `Object`

## Outputs

- `Location`

## Properties

- None

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Requires a valid Blender object.
