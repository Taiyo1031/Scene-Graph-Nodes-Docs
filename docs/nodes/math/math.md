---
title: Math
node_id: SGNMathNode
node_class: SGNMathNode
category: Math
role: COMPUTE
added: 0.1.0
---

Runs float math operations.

<div className="sgn-badges">
  <span className="sgn-badge">SGNMathNode</span>
  <span className="sgn-badge">COMPUTE</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Math</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/math.svg" alt="Math node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Math.</figcaption>
</figure>

## Purpose

Runs float math operations.

## Role

`COMPUTE` - Computes a derived value from inputs and publishes the result to output sockets.

## Inputs

- A
- B

## Outputs

- Result

## Properties

- Operation: Add, Subtract, Multiply, Divide, Sine, Cosine, Minimum, Maximum, Absolute

## Evaluation Behavior

It evaluates the selected operation and publishes a float result.

## Common Examples

- Scale a numeric driver value.
- Clamp or compare values with Minimum and Maximum.

## Limitations

- Division by zero raises an evaluation error.
- Unary operations still keep the B socket visible.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
