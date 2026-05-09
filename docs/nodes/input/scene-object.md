---
title: Scene Object
node_id: SGNSceneObjectNode
node_class: SGNSceneObjectNode
category: Input
added: 0.1.0
---

Exposes a Blender object as dynamic RNA and custom property sockets.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSceneObjectNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
</div>

## Inputs

- `Linked writable attribute inputs`
- `Read-only alignment handles`

## Outputs

- `Dynamic object attributes`

## Properties

- `object_ref`
- `attribute visibility toggles`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node writes to Blender data during evaluation.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

Attributes are discovered on reload; newly added custom properties need Reload.
