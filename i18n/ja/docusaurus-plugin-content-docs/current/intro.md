---
id: intro
title: Scene Graph Nodes
slug: /
---

Scene Graph Nodes は、Blender の標準 Node Editor 上でシーンレベルのノードグラフを作るためのアドオンです。オブジェクト、Transform、Matrix、Attribute、Group、Debug 値を接続して評価できます。

<div className="sgn-badges">
  <span className="sgn-badge">アドオン version 0.1.0</span>
  <span className="sgn-badge">英語 + 日本語</span>
  <span className="sgn-badge">ノード別ページ構成</span>
</div>

```mermaid
flowchart LR
  A[Object Input] --> B[Get Location]
  B --> C[Vector Math]
  C --> D[Set Location]
  E[Vector Value] --> C
```

## このドキュメントの内容

- 開発用インストール方法。
- Scene Graph node tree の評価の流れ。
- Object / Mesh の動的属性ソケット。
- 実装済みノードの個別リファレンス。
- リリースごとのドキュメント更新手順。

まずは [Installation](./installation.md) と [Quick Start](./quick-start.md) から始めてください。
