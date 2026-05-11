---
title: Watch Value
node_id: SGNWatchValueNode
node_class: SGNWatchValueNode
category: Debug
role: DEBUG
added: 0.1.0
---

Displays an evaluated value in the node UI.

<div className="sgn-badges">
  <span className="sgn-badge">SGNWatchValueNode</span>
  <span className="sgn-badge">DEBUG</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Debug</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/watch-value.svg" alt="Watch Value node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Watch Value.</figcaption>
</figure>

## Purpose

Displays an evaluated value in the node UI.

## Role

`DEBUG` - Shows or inspects values during evaluation without changing Blender data.

## Inputs

- Value

## Outputs

- None

## Properties

- Display Value, internal

## Evaluation Behavior

It converts the input value to a readable string and stores it for display.

## Common Examples

- Inspect a computed vector before applying it.
- Check which dynamic attribute value is flowing through the graph.

## Limitations

- Shows only the first several display lines in the node UI.
- Does not output the value onward.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
