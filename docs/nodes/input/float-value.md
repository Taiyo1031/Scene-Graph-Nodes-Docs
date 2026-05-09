---
title: Float Value
node_id: SGNFloatValueNode
node_class: SGNFloatValueNode
category: Input
added: 0.1.0
---

Outputs a constant floating point value.

<div className="sgn-badges">
  <span className="sgn-badge">SGNFloatValueNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
</div>

## Inputs

- None

## Outputs

- `Value`

## Properties

- `value`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Outputs a Python float.
