---
title: Matrix Math
node_id: SGNMatrixMathNode
node_class: SGNMatrixMathNode
category: Matrix
role: COMPUTE
added: 0.1.0
---

Runs matrix multiplication, inversion, or identity output.

<div className="sgn-badges">
  <span className="sgn-badge">SGNMatrixMathNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Matrix</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/matrix-math.svg" alt="Matrix Math node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Matrix Math.</figcaption>
</figure>

## Purpose

Runs matrix multiplication, inversion, or identity output.

## Role

`COMPUTE` - Computes a derived value from inputs and publishes the result to output sockets.

## Inputs

- A
- B

## Outputs

- Matrix

## Properties

- Operation: Multiply, Inverse A, Identity

## Evaluation Behavior

It returns `A @ B`, `A.inverted()`, or a 4x4 identity matrix depending on the operation.

## Common Examples

- Combine two transforms.
- Invert a matrix before applying it downstream.

## Limitations

- Invalid inverse operations raise an evaluation error.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
