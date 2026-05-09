---
title: インストール
---

## 開発用インストール

Blender の Add-on インストール機能から、`scene_graph_nodes/` がルートにあるリポジトリフォルダまたは zip を選択します。

1. Blender Preferences を開きます。
2. Add-ons を開きます。
3. リポジトリフォルダまたは zip をインストールします。
4. **Scene Graph Nodes** を有効化します。
5. Node Editor で **Scene Graph Nodes** の node tree を作成します。

## スモークテスト

アドオンリポジトリから Blender MVP テストを実行します。

```bash
/Applications/Blender.app/Contents/MacOS/Blender --background --factory-startup --python tests/run_blender_mvp_tests.py
```

Windows ではインストール済み Blender の実行ファイルと `tests\run_blender_mvp_tests.py` を使ってください。
