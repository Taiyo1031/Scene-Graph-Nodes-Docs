---
title: Groups
---

Scene Graph Group nodes evaluate another Scene Graph node tree with generated group inputs and outputs. Recursive references are rejected.

## Practical notes

- Keep graphs acyclic.
- Prefer explicit value nodes for constants.
- Use Watch Value nodes when debugging evaluation order or data conversion.
- Side-effecting nodes should be placed where their dependencies are clear.
