---
title: Watch Value
node_id: SGNWatchValueNode
node_class: SGNWatchValueNode
category: Debug
role: DEBUG
added: 0.1.0
---

評価された値を node UI に表示します。

<div className="sgn-badges">
  <span className="sgn-badge">SGNWatchValueNode</span>
  <span className="sgn-badge">DEBUG</span>
  <span className="sgn-badge">0.1.0 で追加</span>
  <span className="sgn-badge">Debug</span>
  <span className="sgn-badge">0.1.0 group-ui-tools</span>
</div>

## 図解

<figure className="sgn-node-figure">
  <img src="/Scene-Graph-Nodes-Docs/img/nodes/watch-value.svg" alt="Watch Value node diagram" />
  <figcaption>Watch Value の入力、出力、評価時の役割を示した図です。</figcaption>
</figure>

## 目的

評価された値を node UI に表示します。

## 役割

`DEBUG` - Blender データを書き換えずに、評価中の値を表示または検査します。

## 入力

- Value

## 出力

- なし

## プロパティ

- Display Value。内部用

## 評価の挙動

input value を読みやすい文字列へ変換し、表示用に保存します。

## よく使う例

- 適用前の computed vector を確認する。
- graph を流れている dynamic attribute value を確認する。

## 制限

- node UI には先頭数行だけ表示されます。
- 値を下流へ出力しません。

## バージョン情報

- 追加バージョン: `0.1.0`
- 現在の build: `0.1.0 group-ui-tools`
