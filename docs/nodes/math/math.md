---
title: Math
node_id: SGNMathNode
node_class: SGNMathNode
category: Math
added: 0.1.0
---

Runs float math operations.

<div className="sgn-badges">
  <span className="sgn-badge">SGNMathNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Math</span>
</div>

## Inputs

- `A`
- `B`

## Outputs

- `Result`

## Properties

- `operation`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.

Operations: Add, Subtract, Multiply, Divide, Sine, Cosine, Minimum, Maximum, Absolute.

## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Division by zero reports an evaluation error.
