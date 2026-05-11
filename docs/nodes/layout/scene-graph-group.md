---
title: Scene Graph Group
node_id: SGNGroupNode
node_class: SGNGroupNode
category: Layout
role: ORGANIZATION
added: 0.1.0
---

Evaluates a reusable Scene Graph node tree inside another graph.

<div className="sgn-badges">
  <span className="sgn-badge">SGNGroupNode</span>
  <span className="sgn-badge">ORGANIZATION</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Layout</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/scene-graph-group.svg" alt="Scene Graph Group node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Scene Graph Group.</figcaption>
</figure>

## Purpose

Evaluates a reusable Scene Graph node tree inside another graph.

## Role

`ORGANIZATION` - Helps organize the graph through grouping or typed pass-through wiring.

## Inputs

- Generated from the group tree interface

## Outputs

- Generated from the group tree interface

## Properties

- Group tree
- Edit action
- Ungroup action

## Evaluation Behavior

It passes input socket values into the nested Scene Graph tree and forwards group output values back to the parent graph.

## Common Examples

- Package a repeated transform chain.
- Create reusable graph tools from selected nodes.

## Limitations

- Requires a valid Scene Graph node tree.
- The interface follows the nested group inputs and outputs.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
