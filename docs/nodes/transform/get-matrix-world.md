---
title: Get Matrix World
node_id: SGNGetMatrixWorldNode
node_class: SGNGetMatrixWorldNode
category: Transform
role: READ
added: 0.1.0
---

Reads an object world matrix.

<div className="sgn-badges">
  <span className="sgn-badge">SGNGetMatrixWorldNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Transform</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/get-matrix-world.svg" alt="Get Matrix World node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Get Matrix World.</figcaption>
</figure>

## Purpose

Reads an object world matrix.

## Role

`READ` - Reads from Blender data or from a value stored on the node. It should not write back to the scene during evaluation.

## Inputs

- Object

## Outputs

- Matrix

## Properties

- None

## Evaluation Behavior

It reads `object.matrix_world` and outputs a copy as a Matrix.

## Common Examples

- Copy world transforms.
- Decompose a world matrix into TRS values.

## Limitations

- Requires a valid object input.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
