---
title: Vector Value
node_id: SGNVectorValueNode
node_class: SGNVectorValueNode
category: Input
role: READ
added: 0.1.0
---

Outputs a constant 3D vector.

<div className="sgn-badges">
  <span className="sgn-badge">SGNVectorValueNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/vector-value.svg" alt="Vector Value node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Vector Value.</figcaption>
</figure>

## Purpose

Outputs a constant 3D vector.

## Role

`READ` - Reads from Blender data or from a value stored on the node. It should not write back to the scene during evaluation.

## Inputs

- None

## Outputs

- Vector

## Properties

- Vector X/Y/Z

## Evaluation Behavior

It converts the stored XYZ value to a Vector and publishes it.

## Common Examples

- Add an offset to a copied location.
- Provide default scale or direction values.

## Limitations

- Stores one XYZ vector only.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
