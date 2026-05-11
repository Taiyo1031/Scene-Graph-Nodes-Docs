---
title: Object Input
node_id: SGNObjectInputNode
node_class: SGNObjectInputNode
category: Input
role: READ
added: 0.1.0
---

References one Blender object and outputs it for transform or attribute chains.

<div className="sgn-badges">
  <span className="sgn-badge">SGNObjectInputNode</span>
  <span className="sgn-badge">READ</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Input</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/object-input.svg" alt="Object Input node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Object Input.</figcaption>
</figure>

## Purpose

References one Blender object and outputs it for transform or attribute chains.

## Role

`READ` - Reads from Blender data or from a value stored on the node. It should not write back to the scene during evaluation.

## Inputs

- None

## Outputs

- Object

## Properties

- Object reference
- Use Selected action

## Evaluation Behavior

It outputs the referenced object. Evaluation fails if no object is assigned.

## Common Examples

- Feed Get Location or Set Location with a stable object reference.
- Use quick presets to create object-driven transform chains.

## Limitations

- Only outputs a single object reference.
- It does not expose dynamic object attributes. Use Scene Object for that.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
