---
title: Float Value
node_id: SGNFloatValueNode
node_class: SGNFloatValueNode
category: Input
role: READ
added: 0.1.0
---

Outputs a constant floating point value.

<div className="sgn-badges">
  <span className="sgn-badge">SGNFloatValueNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/float-value.svg" alt="Float Value node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Float Value.</figcaption>
</figure>

## Purpose

Outputs a constant floating point value.

## Role

`READ` - Reads from Blender data or from a value stored on the node. It should not write back to the scene during evaluation.

## Inputs

- None

## Outputs

- Value

## Properties

- Value

## Evaluation Behavior

It converts the stored value to a float and publishes it.

## Common Examples

- Drive Math inputs.
- Use as a scale factor for Vector Math.

## Limitations

- Stores one scalar value only.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
