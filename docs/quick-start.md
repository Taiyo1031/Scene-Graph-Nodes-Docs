---
title: Quick Start
---

## Copy an Object Location

1. Create a Scene Graph Nodes tree.
2. Add two **Object Input** nodes.
3. Assign the source object to the first node and the target object to the second node.
4. Add **Get Location** and **Set Location**.
5. Connect `source Object -> Get Location -> Set Location Location`.
6. Connect `target Object -> Set Location Object`.
7. Run **Evaluate** from the Scene Graph sidebar.

## Add an Offset

Insert **Vector Value** and **Vector Math** between **Get Location** and **Set Location**. Set Vector Math to `ADD`, then use the Vector Value as the offset.

## Inspect a Value

Connect any output to **Watch Value** and evaluate the graph. The node displays the most recent evaluated value.
