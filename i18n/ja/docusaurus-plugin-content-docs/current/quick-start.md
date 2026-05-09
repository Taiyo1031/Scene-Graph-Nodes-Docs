---
title: クイックスタート
---

## オブジェクトの Location をコピーする

1. Scene Graph Nodes tree を作成します。
2. **Object Input** を 2 つ追加します。
3. 1 つ目に source object、2 つ目に target object を設定します。
4. **Get Location** と **Set Location** を追加します。
5. `source Object -> Get Location -> Set Location Location` を接続します。
6. `target Object -> Set Location Object` を接続します。
7. Scene Graph サイドバーの **Evaluate** を実行します。

## Offset を追加する

**Get Location** と **Set Location** の間に **Vector Value** と **Vector Math** を入れます。Vector Math を `ADD` にして、Vector Value を offset として使います。

## 値を確認する

任意の出力を **Watch Value** に接続して評価します。最後に評価された値がノードに表示されます。
