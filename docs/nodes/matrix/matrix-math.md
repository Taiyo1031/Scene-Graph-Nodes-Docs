---
title: Matrix Math
node_id: SGNMatrixMathNode
node_class: SGNMatrixMathNode
category: Matrix
added: 0.1.0
---

Runs matrix multiplication, inversion, or identity output.

<div className="sgn-badges">
  <span className="sgn-badge">SGNMatrixMathNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Matrix</span>
</div>

## Inputs

- `A`
- `B`

## Outputs

- `Matrix`

## Properties

- `operation`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.

Operations: Multiply, Inverse A, Identity.

## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Inverse reports an error when the matrix cannot be inverted.
