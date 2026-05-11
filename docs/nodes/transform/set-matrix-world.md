---
title: Set Matrix World
node_id: SGNSetMatrixWorldNode
node_class: SGNSetMatrixWorldNode
category: Transform
role: APPLY
added: 0.1.0
---

Writes a matrix to an object world transform.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetMatrixWorldNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Transform</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-matrix-world.svg" alt="Set Matrix World node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Set Matrix World.</figcaption>
</figure>

## Purpose

Writes a matrix to an object world transform.

## Role

`APPLY` - Writes evaluated values back into Blender data. Treat it as a side-effecting endpoint in the graph.

## Inputs

- Object
- Matrix

## Outputs

- None

## Properties

- None

## Evaluation Behavior

It resolves the object and matrix inputs, then assigns `object.matrix_world`.

## Common Examples

- Copy Matrix World chain endpoint.
- Apply a matrix composed from location, rotation, and scale.

## Limitations

- Writes directly to the scene during evaluation.
- Invalid matrix values can produce unexpected transforms.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
