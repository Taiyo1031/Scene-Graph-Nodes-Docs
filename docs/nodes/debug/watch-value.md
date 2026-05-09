---
title: Watch Value
node_id: SGNWatchValueNode
node_class: SGNWatchValueNode
category: Debug
added: 0.1.0
---

Displays an evaluated value in the node UI.

<div className="sgn-badges">
  <span className="sgn-badge">SGNWatchValueNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Debug</span>
</div>

## Inputs

- `Value`

## Outputs

- None

## Properties

- `display_value`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Displays up to six lines in the node UI.
