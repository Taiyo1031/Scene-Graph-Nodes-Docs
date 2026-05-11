---
title: Vector Math
node_id: SGNVectorMathNode
node_class: SGNVectorMathNode
category: Math
role: COMPUTE
added: 0.1.0
---

Runs vector math and scalar vector measurements.

<div className="sgn-badges">
  <span className="sgn-badge">SGNVectorMathNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Math</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/vector-math.svg" alt="Vector Math node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Vector Math.</figcaption>
</figure>

## Purpose

Runs vector math and scalar vector measurements.

## Role

`COMPUTE` - Computes a derived value from inputs and publishes the result to output sockets.

## Inputs

- A
- B
- Scale

## Outputs

- Vector
- Value

## Properties

- Operation: Add, Subtract, Multiply, Scale, Dot Product, Cross Product, Length, Distance, Normalize

## Evaluation Behavior

It computes vector and scalar outputs. Operations that only produce a scalar leave Vector at zero.

## Common Examples

- Offset a copied location.
- Measure distance between two vectors.

## Limitations

- The active operation determines which output is meaningful.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
