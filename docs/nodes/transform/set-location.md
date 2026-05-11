---
title: Set Location
node_id: SGNSetLocationNode
node_class: SGNSetLocationNode
category: Transform
role: APPLY
added: 0.1.0
---

Writes a vector to an object location.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetLocationNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Transform</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-location.svg" alt="Set Location node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Set Location.</figcaption>
</figure>

## Purpose

Writes a vector to an object location.

## Role

`APPLY` - Writes evaluated values back into Blender data. Treat it as a side-effecting endpoint in the graph.

## Inputs

- Object
- Location

## Outputs

- None

## Properties

- None

## Evaluation Behavior

It resolves the object and vector inputs, then assigns `object.location`.

## Common Examples

- Copy Location chain endpoint.
- Apply a Vector Math offset to a target object.

## Limitations

- Writes directly to the scene during evaluation.
- Requires both Object and Location inputs.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
