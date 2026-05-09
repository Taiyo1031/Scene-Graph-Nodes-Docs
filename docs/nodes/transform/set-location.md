---
title: Set Location
node_id: SGNSetLocationNode
node_class: SGNSetLocationNode
category: Transform
added: 0.1.0
---

Writes a vector to an object location.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetLocationNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Transform</span>
</div>

## Inputs

- `Object`
- `Location`

## Outputs

- None

## Properties

- None

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node writes to Blender data during evaluation.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

This is side-effecting and writes to the Blender object.
