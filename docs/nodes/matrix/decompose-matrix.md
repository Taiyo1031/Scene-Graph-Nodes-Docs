---
title: Decompose Matrix
node_id: SGNDecomposeMatrixNode
node_class: SGNDecomposeMatrixNode
category: Matrix
added: 0.1.0
---

Splits a matrix into location, Euler rotation, and scale.

<div className="sgn-badges">
  <span className="sgn-badge">SGNDecomposeMatrixNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Matrix</span>
</div>

## Inputs

- `Matrix`

## Outputs

- `Location`
- `Rotation`
- `Scale`

## Properties

- None

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Rotation is converted to Euler.
