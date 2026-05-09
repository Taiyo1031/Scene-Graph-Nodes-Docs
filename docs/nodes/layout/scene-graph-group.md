---
title: Scene Graph Group
node_id: SGNGroupNode
node_class: SGNGroupNode
category: Layout
added: 0.1.0
---

Evaluates a reusable Scene Graph node tree inside another graph.

<div className="sgn-badges">
  <span className="sgn-badge">SGNGroupNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Layout</span>
</div>

## Inputs

- `Generated from group interface`

## Outputs

- `Generated from group interface`

## Properties

- `group_tree`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Recursive group references are blocked.
