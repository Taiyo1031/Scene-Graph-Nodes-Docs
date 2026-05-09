---
title: Scene Graph Tree
---

A Scene Graph tree is a custom Blender `NodeTree` dedicated to scene-level relationships. It stores nodes, links, evaluation flags, and the last evaluation status.

## Practical notes

- Keep graphs acyclic.
- Prefer explicit value nodes for constants.
- Use Watch Value nodes when debugging evaluation order or data conversion.
- Side-effecting nodes should be placed where their dependencies are clear.
