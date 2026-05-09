---
title: Object Input
node_id: SGNObjectInputNode
node_class: SGNObjectInputNode
category: Input
added: 0.1.0
---

References one Blender object and outputs it for transform or attribute chains.

<div className="sgn-badges">
  <span className="sgn-badge">SGNObjectInputNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
</div>

## Inputs

- None

## Outputs

- `Object`

## Properties

- `Object reference`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Missing object reports an evaluation error.
