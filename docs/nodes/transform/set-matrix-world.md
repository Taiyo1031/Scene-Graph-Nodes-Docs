---
title: Set Matrix World
node_id: SGNSetMatrixWorldNode
node_class: SGNSetMatrixWorldNode
category: Transform
added: 0.1.0
---

Writes a matrix to an object world transform.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetMatrixWorldNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Transform</span>
</div>

## Inputs

- `Object`
- `Matrix`

## Outputs

- None

## Properties

- None

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node writes to Blender data during evaluation.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

This is side-effecting and writes object.matrix_world.
