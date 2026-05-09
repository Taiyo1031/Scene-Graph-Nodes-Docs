---
title: Installation
---

## Development Install

Install the add-on through Blender's add-on install flow and choose the repository folder or a zip that contains `scene_graph_nodes/` at the root.

1. Open Blender Preferences.
2. Go to Add-ons.
3. Install the repository folder or zip.
4. Enable **Scene Graph Nodes**.
5. Open the Node Editor and create a **Scene Graph Nodes** node tree.

## Smoke Test

Run the Blender MVP test script from the add-on repository:

```bash
/Applications/Blender.app/Contents/MacOS/Blender --background --factory-startup --python tests/run_blender_mvp_tests.py
```

Windows paths should use the installed Blender executable and `tests\run_blender_mvp_tests.py`.
