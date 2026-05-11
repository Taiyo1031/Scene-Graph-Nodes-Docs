---
title: Decompose Matrix
node_id: SGNDecomposeMatrixNode
node_class: SGNDecomposeMatrixNode
category: Matrix
role: COMPUTE
added: 0.1.0
---

Splits a matrix into location, Euler rotation, and scale.

<div className="sgn-badges">
  <span className="sgn-badge">SGNDecomposeMatrixNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Matrix</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/decompose-matrix.svg" alt="Decompose Matrix node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Decompose Matrix.</figcaption>
</figure>

## Purpose

Splits a matrix into location, Euler rotation, and scale.

## Role

`COMPUTE` - Computes a derived value from inputs and publishes the result to output sockets.

## Inputs

- Matrix

## Outputs

- Location
- Rotation
- Scale

## Properties

- None

## Evaluation Behavior

It decomposes the matrix, converts rotation to Euler, and publishes TRS outputs.

## Common Examples

- Inspect a world matrix as readable TRS values.
- Reuse only the scale part of a transform.

## Limitations

- Matrix decomposition follows Blender mathutils behavior.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
