---
title: Scene Mesh
node_id: SGNSceneMeshNode
node_class: SGNSceneMeshNode
category: Input
added: 0.1.0
---

Exposes mesh data and mesh-level dynamic attributes.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSceneMeshNode</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
</div>

## Inputs

- `Mesh`

## Outputs

- `Dynamic mesh attributes`

## Properties

- `mesh_ref`
- `attribute visibility toggles`

## Evaluation

The evaluator reads linked inputs first, falls back to socket defaults where supported, then stores outputs in the evaluation context. This node does not write Blender data directly.



## Example

Use this node inside a small graph and connect a **Watch Value** node to inspect the evaluated output before wiring it into a side-effecting node.

## Limitations

The Mesh input can override the stored mesh reference when linked.
