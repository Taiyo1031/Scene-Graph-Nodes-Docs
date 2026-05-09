---
title: Compose Matrix
node_id: SGNComposeMatrixNode
node_class: SGNComposeMatrixNode
category: Matrix
added: 0.1.0
---

Builds a matrix from location, Euler rotation, and scale.

<div className="sgn-badges">
  <span className="sgn-badge">SGNComposeMatrixNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Matrix</span>
</div>

## Inputs

- `Location`
- `Rotation`
- `Scale`

## Outputs

- `Matrix`

## Properties

- None

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Rotation uses Euler values and scale defaults to (1, 1, 1).
