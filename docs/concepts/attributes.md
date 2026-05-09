---
title: Attributes
---

Scene Object and Scene Mesh scan RNA and custom properties, then expose them as dynamic sockets. Writable linked inputs write values before outputs are read.

## Practical notes

- Keep graphs acyclic.
- Prefer explicit value nodes for constants.
- Use Watch Value nodes when debugging evaluation order or data conversion.
- Side-effecting nodes should be placed where their dependencies are clear.
