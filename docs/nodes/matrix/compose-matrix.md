---
title: Compose Matrix
node_id: SGNComposeMatrixNode
node_class: SGNComposeMatrixNode
category: Matrix
role: COMPUTE
added: 0.1.0
---

Builds a matrix from location, Euler rotation, and scale.

<div className="sgn-badges">
  <span className="sgn-badge">SGNComposeMatrixNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Matrix</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/compose-matrix.svg" alt="Compose Matrix node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Compose Matrix.</figcaption>
</figure>

## Purpose

Builds a matrix from location, Euler rotation, and scale.

## Role

`COMPUTE` - Computes a derived value from inputs and publishes the result to output sockets.

## Inputs

- Location
- Rotation
- Scale

## Outputs

- Matrix

## Properties

- None

## Evaluation Behavior

It creates translation, rotation, and scale matrices, then multiplies them in TRS order.

## Common Examples

- Build a matrix for Set Matrix World.
- Combine a read location with a procedural scale.

## Limitations

- Rotation input expects an Euler value.
- Default scale is one on all axes.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
