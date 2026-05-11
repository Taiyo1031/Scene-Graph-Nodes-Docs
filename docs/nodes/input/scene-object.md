---
title: Scene Object
node_id: SGNSceneObjectNode
node_class: SGNSceneObjectNode
category: Input
role: READ
added: 0.1.0
---

Exposes a Blender object as dynamic RNA and custom property output sockets.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSceneObjectNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/scene-object.svg" alt="Scene Object node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Scene Object.</figcaption>
</figure>

## Purpose

Exposes a Blender object as dynamic RNA and custom property output sockets.

## Role

`READ` - Reads from Blender data or from a value stored on the node. It should not write back to the scene during evaluation.

## Inputs

- None

## Outputs

- Dynamic object attribute outputs, grouped by category
- Object identity and data outputs when discovered

## Properties

- Object reference
- Section toggles such as Core, Transform, Geometry, Visibility, Render, Data, Custom, and All
- Reload action

## Evaluation Behavior

During evaluation it reads the selected object and stores discovered attribute values on the matching output sockets.

## Common Examples

- Read an object location-related attribute before feeding a transform chain.
- Expose custom properties and inspect them with Watch Value.

## Limitations

- Reload after adding new custom properties or changing the object type.
- Read-only outputs cannot be used to write back to Blender.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
