---
title: Get Location
node_id: SGNGetLocationNode
node_class: SGNGetLocationNode
category: Transform
role: READ
added: 0.1.0
---

Reads an object location.

<div className="sgn-badges">
  <span className="sgn-badge">SGNGetLocationNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Transform</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/get-location.svg" alt="Get Location node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Get Location.</figcaption>
</figure>

## Purpose

Reads an object location.

## Role

`READ` - Reads from Blender data or from a value stored on the node. It should not write back to the scene during evaluation.

## Inputs

- Object

## Outputs

- Location

## Properties

- None

## Evaluation Behavior

It reads `object.location` and outputs a copy as a Vector.

## Common Examples

- Copy a source object location into Vector Math.
- Inspect an object location with Watch Value.

## Limitations

- Requires a valid object input.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
