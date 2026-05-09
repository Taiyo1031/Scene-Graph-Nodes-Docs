---
title: Vector Value
node_id: SGNVectorValueNode
node_class: SGNVectorValueNode
category: Input
added: 0.1.0
---

Outputs a constant 3D vector.

<div className="sgn-badges">
  <span className="sgn-badge">SGNVectorValueNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
</div>

## Inputs

- None

## Outputs

- `Vector`

## Properties

- `value`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Outputs a mathutils Vector.
