---
title: Scene Graph Reroute
node_id: SGNRerouteNode
node_class: SGNRerouteNode
category: Layout
role: ORGANIZATION
added: 0.1.0
---

Passes values through a typed reroute socket.

<div className="sgn-badges">
  <span className="sgn-badge">SGNRerouteNode</span>
  <span className="sgn-badge">ORGANIZATION</span>
  <span className="sgn-badge">Added in 0.1.0</span>
  <span className="sgn-badge">Layout</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## Visual Guide

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/scene-graph-reroute.svg" alt="Scene Graph Reroute node diagram" />
  <figcaption>Diagram showing the inputs, outputs, and evaluation role of Scene Graph Reroute.</figcaption>
</figure>

## Purpose

Passes values through a typed reroute socket.

## Role

`ORGANIZATION` - Helps organize the graph through grouping or typed pass-through wiring.

## Inputs

- Input

## Outputs

- Output

## Properties

- Type, auto-synced from linked sockets when possible

## Evaluation Behavior

It copies Input to Output without changing the value.

## Common Examples

- Keep long wires readable.
- Preserve Scene Graph socket colors through a reroute.

## Limitations

- It is an organization node, not a compute node.
- Changing type may rebuild sockets and reconnect links.

## Version Metadata

- Version added: `0.1.0`
- Current build: `0.1.0 group-ui-tools`
