---
title: Set Scene Mesh
node_id: SGNSetSceneMeshNode
node_class: SGNSetSceneMeshNode
category: Attribute
role: APPLY
added: 0.1.0
---

Writes dynamic mesh attributes back to a Blender mesh through generated input sockets.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSetSceneMeshNode</span>
  <span className="sgn-badge">APPLY</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Attribute</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/set-scene-mesh.svg" alt="Set Scene Mesh node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Set Scene Mesh.</figcaption>
</figure>

## Purpose

Writes dynamic mesh attributes back to a Blender mesh through generated input sockets.

## Role

`APPLY` - Writes evaluated values back into Blender data. Treat it as a side-effecting endpoint in the graph.

## Inputs

- Mesh
- Dynamic writable mesh attribute inputs, grouped by category

## Outputs

- None

## Properties

- Mesh reference
- Section toggles for writable categories
- Use Selected Mesh
- Reload action

## Evaluation Behavior

It resolves the linked Mesh input first, falls back to the Mesh property, refreshes sockets when needed, then writes linked or default input values to writable mesh attributes.

## Common Examples

- Write mesh custom properties from computed values.
- Use Scene Mesh to inspect available data, then Set Scene Mesh to drive writable fields.

## Limitations

- Only writable mesh attributes discovered by the manifest are exposed.
- Some mesh RNA values are read-only and will not appear as writable inputs.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
