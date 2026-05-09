---
title: Get Matrix World
node_id: SGNGetMatrixWorldNode
node_class: SGNGetMatrixWorldNode
category: Transform
added: 0.1.0
---

Reads an object world matrix.

<div className="sgn-badges">
  <span className="sgn-badge">SGNGetMatrixWorldNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Transform</span>
</div>

## Inputs

- `Object`

## Outputs

- `Matrix`

## Properties

- None

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Outputs a copy of object.matrix_world.
