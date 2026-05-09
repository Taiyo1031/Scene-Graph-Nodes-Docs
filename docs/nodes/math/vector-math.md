---
title: Vector Math
node_id: SGNVectorMathNode
node_class: SGNVectorMathNode
category: Math
added: 0.1.0
---

Runs vector math and scalar vector measurements.

<div className="sgn-badges">
  <span className="sgn-badge">SGNVectorMathNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Math</span>
</div>

## Inputs

- `A`
- `B`
- `Scale`

## Outputs

- `Vector`
- `Value`

## Properties

- `operation`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.

Operations: Add, Subtract, Multiply, Scale, Dot Product, Cross Product, Length, Distance, Normalize.

## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Some operations output Vector, some output Value; unused output remains its default value.
