---
title: Set Scene Object
node_id: SGNSetSceneObjectNode
node_class: SGNSetSceneObjectNode
category: Attribute
role: APPLY
added: 0.1.0
---

Writes dynamic object attributes back to a Blender object through generated input sockets.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetSceneObjectNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Attribute</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-scene-object.svg" alt="Set Scene Object node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Set Scene Object.</figcaption>
</figure>

## Purpose

Writes dynamic object attributes back to a Blender object through generated input sockets.

## Role

`APPLY` - Writes evaluated values back into Blender data. Treat it as a side-effecting endpoint in the graph.

## Inputs

- Object
- Dynamic writable object attribute inputs, grouped by category

## Outputs

- None

## Properties

- Object reference
- Section toggles for writable categories
- Use Selected
- Reload action

## Evaluation Behavior

It resolves the linked Object input first, falls back to the Object property, refreshes sockets when needed, then writes linked or default input values to writable object attributes.

## Common Examples

- Drive object visibility or custom properties from a graph.
- Pair Scene Object for reading with Set Scene Object for controlled write-back.

## Limitations

- Only writable attributes discovered by the manifest are exposed.
- Reload after adding custom properties or changing the target object.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
