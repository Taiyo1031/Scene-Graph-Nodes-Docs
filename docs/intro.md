---
id: intro
title: Scene Graph Nodes
slug: /
---

Scene Graph Nodes is a Blender add-on for building scene-level node graphs. It lets you connect objects, transforms, matrices, attributes, groups, and debug values in Blender's standard Node Editor.

<div className="sgn-badges">
  <span className="sgn-badge">Add-on version 0.1.0</span>
  <span className="sgn-badge">Build 0.1.0 group-ui-tools</span>
  <span className="sgn-badge">English + Japanese</span>
  <span className="sgn-badge">Node pages split by category</span>
</div>

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/node-role-map.svg" alt="Scene Graph Nodes role map" />
  <figcaption>The current build groups nodes by evaluation role so read, compute, apply, layout, and debug behavior stay clear.</figcaption>
</figure>

## What this documents

- How to install the add-on for development.
- How evaluation flows through a Scene Graph node tree.
- How dynamic object and mesh attributes are exposed.
- Every currently implemented node, with one page per node.
- How documentation should be updated for every add-on release.

## Current Node Inventory

This table reflects build `0.1.0 group-ui-tools`.

| Category | Node | Role |
|---|---|---|
| Input | Scene Object | READ |
| Input | Scene Mesh | READ |
| Input | Object Input | READ |
| Input | Float Value | READ |
| Input | Vector Value | READ |
| Transform | Get Location | READ |
| Transform | Set Location | APPLY |
| Transform | Get Matrix World | READ |
| Transform | Set Matrix World | APPLY |
| Math | Math | COMPUTE |
| Math | Vector Math | COMPUTE |
| Matrix | Matrix Math | COMPUTE |
| Matrix | Compose Matrix | COMPUTE |
| Matrix | Decompose Matrix | COMPUTE |
| Attribute | Set Scene Object | APPLY |
| Attribute | Set Scene Mesh | APPLY |
| Attribute | Set Attribute | APPLY |
| Layout | Scene Graph Reroute | ORGANIZATION |
| Layout | Scene Graph Group | ORGANIZATION |
| Debug | Watch Value | DEBUG |

## Role Meaning

- `READ`: reads from Blender data or node values.
- `COMPUTE`: calculates derived values.
- `APPLY`: writes evaluated values back to Blender.
- `ORGANIZATION`: keeps graphs reusable or easier to wire.
- `DEBUG`: displays or inspects values.

Start with [Installation](./installation.md), then try the [Quick Start](./quick-start.md).
