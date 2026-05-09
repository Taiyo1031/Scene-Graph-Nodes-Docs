---
title: Sockets
---

Scene Graph sockets carry Blender-oriented values: floats, vectors, matrices, objects, meshes, materials, collections, and generic values.

## Practical notes

- Keep graphs acyclic.
- Prefer explicit value nodes for constants.
- Use Watch Value nodes when debugging evaluation order or data conversion.
- Side-effecting nodes should be placed where their dependencies are clear.
