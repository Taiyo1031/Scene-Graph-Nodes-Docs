---
title: Set Attribute
node_id: SGNSetAttributeNode
node_class: SGNSetAttributeNode
category: Attribute
role: APPLY
added: 0.1.0
---

Writes a limited set of object attributes or custom properties by attribute path.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetAttributeNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Attribute</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-attribute.svg" alt="Set Attribute node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Set Attribute.</figcaption>
</figure>

## Purpose

Writes a limited set of object attributes or custom properties by attribute path.

## Role

`APPLY` - Writes evaluated values back into Blender data. Treat it as a side-effecting endpoint in the graph.

## Inputs

- Target
- Value

## Outputs

- None

## Properties

- Attribute Path

## Evaluation Behavior

It writes Value to `hide_viewport`, `hide_render`, or a custom property path such as `["my_prop"]`.

## Common Examples

- Toggle viewport visibility.
- Write a simple custom property.

## Limitations

- Only `hide_viewport`, `hide_render`, and custom property paths are accepted.
- Use Set Scene Object for generated writable object sockets.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
