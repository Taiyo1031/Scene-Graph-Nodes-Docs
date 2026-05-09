---
title: Evaluation
---

Evaluation builds a directed graph from links, detects cycles, topologically sorts nodes, and calls each node `evaluate()` method. Side-effecting nodes write back to Blender data.

## Practical notes

- Keep graphs acyclic.
- Prefer explicit value nodes for constants.
- Use Watch Value nodes when debugging evaluation order or data conversion.
- Side-effecting nodes should be placed where their dependencies are clear.
