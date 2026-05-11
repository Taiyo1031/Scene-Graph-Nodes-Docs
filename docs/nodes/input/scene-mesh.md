---
title: Scene Mesh
node_id: SGNSceneMeshNode
node_class: SGNSceneMeshNode
category: Input
role: READ
added: 0.1.0
---

Exposes mesh data and mesh-level dynamic attributes as output sockets.

<div className="sgn-badges">
  <span className="sgn-badge">SGNSceneMeshNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/scene-mesh.svg" alt="Scene Mesh node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Scene Mesh.</figcaption>
</figure>

## Purpose

Exposes mesh data and mesh-level dynamic attributes as output sockets.

## Role

`READ` - Reads from Blender data or from a value stored on the node. It should not write back to the scene during evaluation.

## Inputs

- None

## Outputs

- Dynamic mesh attribute outputs
- Geometry, material, custom, and data-block values when available

## Properties

- Mesh reference
- Section toggles
- Use Selected Mesh
- Reload action

## Evaluation Behavior

It reads the referenced mesh and publishes discovered mesh values. It does not modify mesh data.

## Common Examples

- Read mesh-level custom properties.
- Inspect mesh attributes before deciding which writable socket should be driven.

## Limitations

- Requires a mesh data-block.
- Reload after topology or custom property changes that should appear as sockets.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
