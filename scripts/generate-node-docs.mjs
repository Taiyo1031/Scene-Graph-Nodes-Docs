import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const buildLabel = '0.1.0 group-ui-tools';
const addonVersion = '0.1.0';

const roleDescriptions = {
  READ: {
    en: 'Reads from Blender data or from a value stored on the node. It should not write back to the scene during evaluation.',
    ja: 'Blender データ、またはノード上に保存された値を読みます。評価中にシーンへ書き戻すことはありません。',
  },
  COMPUTE: {
    en: 'Computes a derived value from inputs and publishes the result to output sockets.',
    ja: '入力から派生値を計算し、結果を output socket に出します。',
  },
  APPLY: {
    en: 'Writes evaluated values back into Blender data. Treat it as a side-effecting endpoint in the graph.',
    ja: '評価済みの値を Blender データへ書き戻します。グラフ内では副作用を持つ終端として扱います。',
  },
  ORGANIZATION: {
    en: 'Helps organize the graph through grouping or typed pass-through wiring.',
    ja: 'グループ化や型付きの通過配線で、グラフを整理するためのノードです。',
  },
  DEBUG: {
    en: 'Shows or inspects values during evaluation without changing Blender data.',
    ja: 'Blender データを書き換えずに、評価中の値を表示または検査します。',
  },
};

const nodes = [
  {
    slug: 'scene-object',
    group: 'input',
    category: {en: 'Input', ja: '入力'},
    title: 'Scene Object',
    nodeId: 'SGNSceneObjectNode',
    nodeClass: 'SGNSceneObjectNode',
    role: 'READ',
    purpose: {
      en: 'Exposes a Blender object as dynamic RNA and custom property output sockets.',
      ja: 'Blender オブジェクトを動的な RNA / custom property の output socket として公開します。',
    },
    inputs: {en: ['None'], ja: ['なし']},
    outputs: {
      en: ['Dynamic object attribute outputs, grouped by category', 'Object identity and data outputs when discovered'],
      ja: ['カテゴリ別に整理された動的 object attribute output', '検出された場合の Object identity / data output'],
    },
    properties: {
      en: ['Object reference', 'Section toggles such as Core, Transform, Geometry, Visibility, Render, Data, Custom, and All', 'Reload action'],
      ja: ['Object 参照', 'Core / Transform / Geometry / Visibility / Render / Data / Custom / All などの section toggle', 'Reload action'],
    },
    evaluation: {
      en: 'During evaluation it reads the selected object and stores discovered attribute values on the matching output sockets.',
      ja: '評価時に選択された object を読み、検出済み attribute の値を対応する output socket に保存します。',
    },
    examples: {
      en: ['Read an object location-related attribute before feeding a transform chain.', 'Expose custom properties and inspect them with Watch Value.'],
      ja: ['Transform chain に渡す前に object の location 関連 attribute を読む。', 'custom property を公開し、Watch Value で確認する。'],
    },
    limitations: {
      en: ['Reload after adding new custom properties or changing the object type.', 'Read-only outputs cannot be used to write back to Blender.'],
      ja: ['新しい custom property を追加したり object type が変わった場合は Reload してください。', 'read-only output から Blender へ書き戻すことはできません。'],
    },
    visual: {
      input: ['Object ref'],
      output: ['Dynamic attributes', 'Object data'],
      effect: 'No scene write',
    },
  },
  {
    slug: 'scene-mesh',
    group: 'input',
    category: {en: 'Input', ja: '入力'},
    title: 'Scene Mesh',
    nodeId: 'SGNSceneMeshNode',
    nodeClass: 'SGNSceneMeshNode',
    role: 'READ',
    purpose: {
      en: 'Exposes mesh data and mesh-level dynamic attributes as output sockets.',
      ja: 'Mesh data と mesh レベルの動的 attribute を output socket として公開します。',
    },
    inputs: {en: ['None'], ja: ['なし']},
    outputs: {
      en: ['Dynamic mesh attribute outputs', 'Geometry, material, custom, and data-block values when available'],
      ja: ['動的 mesh attribute output', '利用可能な Geometry / Material / Custom / data-block 値'],
    },
    properties: {
      en: ['Mesh reference', 'Section toggles', 'Use Selected Mesh', 'Reload action'],
      ja: ['Mesh 参照', 'Section toggle', 'Use Selected Mesh', 'Reload action'],
    },
    evaluation: {
      en: 'It reads the referenced mesh and publishes discovered mesh values. It does not modify mesh data.',
      ja: '参照中の mesh を読み、検出済み mesh 値を公開します。mesh data は変更しません。',
    },
    examples: {
      en: ['Read mesh-level custom properties.', 'Inspect mesh attributes before deciding which writable socket should be driven.'],
      ja: ['mesh レベルの custom property を読む。', 'どの writable socket を駆動するか決める前に mesh attribute を確認する。'],
    },
    limitations: {
      en: ['Requires a mesh data-block.', 'Reload after topology or custom property changes that should appear as sockets.'],
      ja: ['Mesh data-block が必要です。', 'socket として出したい topology / custom property 変更後は Reload してください。'],
    },
    visual: {
      input: ['Mesh ref'],
      output: ['Dynamic attributes', 'Mesh data'],
      effect: 'No scene write',
    },
  },
  {
    slug: 'object-input',
    group: 'input',
    category: {en: 'Input', ja: '入力'},
    title: 'Object Input',
    nodeId: 'SGNObjectInputNode',
    nodeClass: 'SGNObjectInputNode',
    role: 'READ',
    purpose: {
      en: 'References one Blender object and outputs it for transform or attribute chains.',
      ja: '1 つの Blender object を参照し、Transform や Attribute chain に渡す object を出力します。',
    },
    inputs: {en: ['None'], ja: ['なし']},
    outputs: {en: ['Object'], ja: ['Object']},
    properties: {en: ['Object reference', 'Use Selected action'], ja: ['Object 参照', 'Use Selected action']},
    evaluation: {
      en: 'It outputs the referenced object. Evaluation fails if no object is assigned.',
      ja: '参照中の object を出力します。object が未設定の場合、評価は失敗します。',
    },
    examples: {
      en: ['Feed Get Location or Set Location with a stable object reference.', 'Use quick presets to create object-driven transform chains.'],
      ja: ['安定した object 参照を Get Location や Set Location へ渡す。', 'quick preset で object 駆動の transform chain を作る。'],
    },
    limitations: {
      en: ['Only outputs a single object reference.', 'It does not expose dynamic object attributes. Use Scene Object for that.'],
      ja: ['単一の object 参照だけを出力します。', '動的 object attribute は公開しません。その用途には Scene Object を使ってください。'],
    },
    visual: {
      input: ['Object ref'],
      output: ['Object'],
      effect: 'Reference source',
    },
  },
  {
    slug: 'float-value',
    group: 'input',
    category: {en: 'Input', ja: '入力'},
    title: 'Float Value',
    nodeId: 'SGNFloatValueNode',
    nodeClass: 'SGNFloatValueNode',
    role: 'READ',
    purpose: {en: 'Outputs a constant floating point value.', ja: '固定の float 値を出力します。'},
    inputs: {en: ['None'], ja: ['なし']},
    outputs: {en: ['Value'], ja: ['Value']},
    properties: {en: ['Value'], ja: ['Value']},
    evaluation: {en: 'It converts the stored value to a float and publishes it.', ja: '保存された値を float に変換して出力します。'},
    examples: {
      en: ['Drive Math inputs.', 'Use as a scale factor for Vector Math.'],
      ja: ['Math input を駆動する。', 'Vector Math の scale factor として使う。'],
    },
    limitations: {en: ['Stores one scalar value only.'], ja: ['保持できる scalar 値は 1 つだけです。']},
    visual: {input: ['Value property'], output: ['Float'], effect: 'Constant'},
  },
  {
    slug: 'vector-value',
    group: 'input',
    category: {en: 'Input', ja: '入力'},
    title: 'Vector Value',
    nodeId: 'SGNVectorValueNode',
    nodeClass: 'SGNVectorValueNode',
    role: 'READ',
    purpose: {en: 'Outputs a constant 3D vector.', ja: '固定の 3D vector を出力します。'},
    inputs: {en: ['None'], ja: ['なし']},
    outputs: {en: ['Vector'], ja: ['Vector']},
    properties: {en: ['Vector X/Y/Z'], ja: ['Vector X/Y/Z']},
    evaluation: {en: 'It converts the stored XYZ value to a Vector and publishes it.', ja: '保存された XYZ 値を Vector に変換して出力します。'},
    examples: {
      en: ['Add an offset to a copied location.', 'Provide default scale or direction values.'],
      ja: ['コピーした location に offset を追加する。', 'default scale や direction value を渡す。'],
    },
    limitations: {en: ['Stores one XYZ vector only.'], ja: ['保持できる XYZ vector は 1 つだけです。']},
    visual: {input: ['XYZ property'], output: ['Vector'], effect: 'Constant'},
  },
  {
    slug: 'get-location',
    group: 'transform',
    category: {en: 'Transform', ja: 'Transform'},
    title: 'Get Location',
    nodeId: 'SGNGetLocationNode',
    nodeClass: 'SGNGetLocationNode',
    role: 'READ',
    purpose: {en: 'Reads an object location.', ja: 'object の location を読みます。'},
    inputs: {en: ['Object'], ja: ['Object']},
    outputs: {en: ['Location'], ja: ['Location']},
    properties: {en: ['None'], ja: ['なし']},
    evaluation: {en: 'It reads `object.location` and outputs a copy as a Vector.', ja: '`object.location` を読み、copy を Vector として出力します。'},
    examples: {
      en: ['Copy a source object location into Vector Math.', 'Inspect an object location with Watch Value.'],
      ja: ['source object の location を Vector Math へ渡す。', 'object location を Watch Value で確認する。'],
    },
    limitations: {en: ['Requires a valid object input.'], ja: ['有効な object input が必要です。']},
    visual: {input: ['Object'], output: ['Location vector'], effect: 'Read transform'},
  },
  {
    slug: 'set-location',
    group: 'transform',
    category: {en: 'Transform', ja: 'Transform'},
    title: 'Set Location',
    nodeId: 'SGNSetLocationNode',
    nodeClass: 'SGNSetLocationNode',
    role: 'APPLY',
    purpose: {en: 'Writes a vector to an object location.', ja: 'Vector を object location へ書き込みます。'},
    inputs: {en: ['Object', 'Location'], ja: ['Object', 'Location']},
    outputs: {en: ['None'], ja: ['なし']},
    properties: {en: ['None'], ja: ['なし']},
    evaluation: {en: 'It resolves the object and vector inputs, then assigns `object.location`.', ja: 'object と vector input を解決し、`object.location` へ代入します。'},
    examples: {
      en: ['Copy Location chain endpoint.', 'Apply a Vector Math offset to a target object.'],
      ja: ['Copy Location chain の終端に置く。', 'Vector Math の offset 結果を target object に適用する。'],
    },
    limitations: {en: ['Writes directly to the scene during evaluation.', 'Requires both Object and Location inputs.'], ja: ['評価中に scene を直接変更します。', 'Object と Location の両 input が必要です。']},
    visual: {input: ['Object', 'Location'], output: ['Blender object'], effect: 'Write location'},
  },
  {
    slug: 'get-matrix-world',
    group: 'transform',
    category: {en: 'Transform', ja: 'Transform'},
    title: 'Get Matrix World',
    nodeId: 'SGNGetMatrixWorldNode',
    nodeClass: 'SGNGetMatrixWorldNode',
    role: 'READ',
    purpose: {en: 'Reads an object world matrix.', ja: 'object の world matrix を読みます。'},
    inputs: {en: ['Object'], ja: ['Object']},
    outputs: {en: ['Matrix'], ja: ['Matrix']},
    properties: {en: ['None'], ja: ['なし']},
    evaluation: {en: 'It reads `object.matrix_world` and outputs a copy as a Matrix.', ja: '`object.matrix_world` を読み、copy を Matrix として出力します。'},
    examples: {en: ['Copy world transforms.', 'Decompose a world matrix into TRS values.'], ja: ['world transform をコピーする。', 'world matrix を TRS 値に分解する。']},
    limitations: {en: ['Requires a valid object input.'], ja: ['有効な object input が必要です。']},
    visual: {input: ['Object'], output: ['World matrix'], effect: 'Read matrix'},
  },
  {
    slug: 'set-matrix-world',
    group: 'transform',
    category: {en: 'Transform', ja: 'Transform'},
    title: 'Set Matrix World',
    nodeId: 'SGNSetMatrixWorldNode',
    nodeClass: 'SGNSetMatrixWorldNode',
    role: 'APPLY',
    purpose: {en: 'Writes a matrix to an object world transform.', ja: 'Matrix を object の world transform へ書き込みます。'},
    inputs: {en: ['Object', 'Matrix'], ja: ['Object', 'Matrix']},
    outputs: {en: ['None'], ja: ['なし']},
    properties: {en: ['None'], ja: ['なし']},
    evaluation: {en: 'It resolves the object and matrix inputs, then assigns `object.matrix_world`.', ja: 'object と matrix input を解決し、`object.matrix_world` へ代入します。'},
    examples: {en: ['Copy Matrix World chain endpoint.', 'Apply a matrix composed from location, rotation, and scale.'], ja: ['Copy Matrix World chain の終端に置く。', 'location / rotation / scale から組み立てた matrix を適用する。']},
    limitations: {en: ['Writes directly to the scene during evaluation.', 'Invalid matrix values can produce unexpected transforms.'], ja: ['評価中に scene を直接変更します。', '無効な matrix 値は予期しない transform を作ることがあります。']},
    visual: {input: ['Object', 'Matrix'], output: ['Blender object'], effect: 'Write matrix'},
  },
  {
    slug: 'math',
    group: 'math',
    category: {en: 'Math', ja: 'Math'},
    title: 'Math',
    nodeId: 'SGNMathNode',
    nodeClass: 'SGNMathNode',
    role: 'COMPUTE',
    purpose: {en: 'Runs float math operations.', ja: 'float の math operation を実行します。'},
    inputs: {en: ['A', 'B'], ja: ['A', 'B']},
    outputs: {en: ['Result'], ja: ['Result']},
    properties: {en: ['Operation: Add, Subtract, Multiply, Divide, Sine, Cosine, Minimum, Maximum, Absolute'], ja: ['Operation: Add, Subtract, Multiply, Divide, Sine, Cosine, Minimum, Maximum, Absolute']},
    evaluation: {en: 'It evaluates the selected operation and publishes a float result.', ja: '選択された operation を評価し、float result を出力します。'},
    examples: {en: ['Scale a numeric driver value.', 'Clamp or compare values with Minimum and Maximum.'], ja: ['数値 driver value を scale する。', 'Minimum / Maximum で値を比較または制限する。']},
    limitations: {en: ['Division by zero raises an evaluation error.', 'Unary operations still keep the B socket visible.'], ja: ['0 除算は evaluation error になります。', '単項 operation でも B socket は表示されたままです。']},
    visual: {input: ['A', 'B', 'Operation'], output: ['Result'], effect: 'Float compute'},
  },
  {
    slug: 'vector-math',
    group: 'math',
    category: {en: 'Math', ja: 'Math'},
    title: 'Vector Math',
    nodeId: 'SGNVectorMathNode',
    nodeClass: 'SGNVectorMathNode',
    role: 'COMPUTE',
    purpose: {en: 'Runs vector math and scalar vector measurements.', ja: 'vector math と scalar vector measurement を実行します。'},
    inputs: {en: ['A', 'B', 'Scale'], ja: ['A', 'B', 'Scale']},
    outputs: {en: ['Vector', 'Value'], ja: ['Vector', 'Value']},
    properties: {en: ['Operation: Add, Subtract, Multiply, Scale, Dot Product, Cross Product, Length, Distance, Normalize'], ja: ['Operation: Add, Subtract, Multiply, Scale, Dot Product, Cross Product, Length, Distance, Normalize']},
    evaluation: {en: 'It computes vector and scalar outputs. Operations that only produce a scalar leave Vector at zero.', ja: 'vector output と scalar output を計算します。scalar のみを返す operation では Vector は zero のままです。'},
    examples: {en: ['Offset a copied location.', 'Measure distance between two vectors.'], ja: ['コピーした location に offset を加える。', '2 つの vector 間の距離を測る。']},
    limitations: {en: ['The active operation determines which output is meaningful.'], ja: ['どの output が意味を持つかは active operation によって変わります。']},
    visual: {input: ['Vector A', 'Vector B', 'Scale'], output: ['Vector', 'Value'], effect: 'Vector compute'},
  },
  {
    slug: 'matrix-math',
    group: 'matrix',
    category: {en: 'Matrix', ja: 'Matrix'},
    title: 'Matrix Math',
    nodeId: 'SGNMatrixMathNode',
    nodeClass: 'SGNMatrixMathNode',
    role: 'COMPUTE',
    purpose: {en: 'Runs matrix multiplication, inversion, or identity output.', ja: 'matrix multiplication、inversion、identity output を実行します。'},
    inputs: {en: ['A', 'B'], ja: ['A', 'B']},
    outputs: {en: ['Matrix'], ja: ['Matrix']},
    properties: {en: ['Operation: Multiply, Inverse A, Identity'], ja: ['Operation: Multiply, Inverse A, Identity']},
    evaluation: {en: 'It returns `A @ B`, `A.inverted()`, or a 4x4 identity matrix depending on the operation.', ja: 'operation に応じて `A @ B`、`A.inverted()`、または 4x4 identity matrix を返します。'},
    examples: {en: ['Combine two transforms.', 'Invert a matrix before applying it downstream.'], ja: ['2 つの transform を合成する。', '下流へ渡す前に matrix を反転する。']},
    limitations: {en: ['Invalid inverse operations raise an evaluation error.'], ja: ['無効な inverse operation は evaluation error になります。']},
    visual: {input: ['Matrix A', 'Matrix B', 'Operation'], output: ['Matrix'], effect: 'Matrix compute'},
  },
  {
    slug: 'compose-matrix',
    group: 'matrix',
    category: {en: 'Matrix', ja: 'Matrix'},
    title: 'Compose Matrix',
    nodeId: 'SGNComposeMatrixNode',
    nodeClass: 'SGNComposeMatrixNode',
    role: 'COMPUTE',
    purpose: {en: 'Builds a matrix from location, Euler rotation, and scale.', ja: 'location、Euler rotation、scale から matrix を組み立てます。'},
    inputs: {en: ['Location', 'Rotation', 'Scale'], ja: ['Location', 'Rotation', 'Scale']},
    outputs: {en: ['Matrix'], ja: ['Matrix']},
    properties: {en: ['None'], ja: ['なし']},
    evaluation: {en: 'It creates translation, rotation, and scale matrices, then multiplies them in TRS order.', ja: 'translation、rotation、scale matrix を作成し、TRS order で乗算します。'},
    examples: {en: ['Build a matrix for Set Matrix World.', 'Combine a read location with a procedural scale.'], ja: ['Set Matrix World 用の matrix を作る。', 'read location と procedural scale を合成する。']},
    limitations: {en: ['Rotation input expects an Euler value.', 'Default scale is one on all axes.'], ja: ['Rotation input は Euler 値を想定します。', 'default scale は全軸 1 です。']},
    visual: {input: ['Location', 'Rotation', 'Scale'], output: ['Matrix'], effect: 'Compose TRS'},
  },
  {
    slug: 'decompose-matrix',
    group: 'matrix',
    category: {en: 'Matrix', ja: 'Matrix'},
    title: 'Decompose Matrix',
    nodeId: 'SGNDecomposeMatrixNode',
    nodeClass: 'SGNDecomposeMatrixNode',
    role: 'COMPUTE',
    purpose: {en: 'Splits a matrix into location, Euler rotation, and scale.', ja: 'matrix を location、Euler rotation、scale に分解します。'},
    inputs: {en: ['Matrix'], ja: ['Matrix']},
    outputs: {en: ['Location', 'Rotation', 'Scale'], ja: ['Location', 'Rotation', 'Scale']},
    properties: {en: ['None'], ja: ['なし']},
    evaluation: {en: 'It decomposes the matrix, converts rotation to Euler, and publishes TRS outputs.', ja: 'matrix を分解し、rotation を Euler に変換して TRS output を出力します。'},
    examples: {en: ['Inspect a world matrix as readable TRS values.', 'Reuse only the scale part of a transform.'], ja: ['world matrix を読みやすい TRS 値として確認する。', 'transform の scale 部分だけを再利用する。']},
    limitations: {en: ['Matrix decomposition follows Blender mathutils behavior.'], ja: ['matrix decomposition は Blender mathutils の挙動に従います。']},
    visual: {input: ['Matrix'], output: ['Location', 'Rotation', 'Scale'], effect: 'Decompose TRS'},
  },
  {
    slug: 'set-scene-object',
    group: 'attribute',
    category: {en: 'Attribute', ja: '属性'},
    title: 'Set Scene Object',
    nodeId: 'SGNSetSceneObjectNode',
    nodeClass: 'SGNSetSceneObjectNode',
    role: 'APPLY',
    purpose: {
      en: 'Writes dynamic object attributes back to a Blender object through generated input sockets.',
      ja: '生成された input socket を通じて、動的 object attribute を Blender object へ書き戻します。',
    },
    inputs: {
      en: ['Object', 'Dynamic writable object attribute inputs, grouped by category'],
      ja: ['Object', 'カテゴリ別に整理された動的 writable object attribute input'],
    },
    outputs: {en: ['None'], ja: ['なし']},
    properties: {
      en: ['Object reference', 'Section toggles for writable categories', 'Use Selected', 'Reload action'],
      ja: ['Object 参照', 'writable category の section toggle', 'Use Selected', 'Reload action'],
    },
    evaluation: {
      en: 'It resolves the linked Object input first, falls back to the Object property, refreshes sockets when needed, then writes linked or default input values to writable object attributes.',
      ja: 'まず linked Object input を解決し、なければ Object property を使います。必要に応じて socket を更新し、linked/default input value を writable object attribute へ書き込みます。',
    },
    examples: {
      en: ['Drive object visibility or custom properties from a graph.', 'Pair Scene Object for reading with Set Scene Object for controlled write-back.'],
      ja: ['object visibility や custom property を graph から駆動する。', '読み取り用の Scene Object と、書き戻し用の Set Scene Object を組み合わせる。'],
    },
    limitations: {
      en: ['Only writable attributes discovered by the manifest are exposed.', 'Reload after adding custom properties or changing the target object.'],
      ja: ['manifest で検出された writable attribute だけが公開されます。', 'custom property の追加や target object の変更後は Reload してください。'],
    },
    visual: {input: ['Object', 'Writable attributes'], output: ['Blender object'], effect: 'Write object data'},
  },
  {
    slug: 'set-scene-mesh',
    group: 'attribute',
    category: {en: 'Attribute', ja: '属性'},
    title: 'Set Scene Mesh',
    nodeId: 'SGNSetSceneMeshNode',
    nodeClass: 'SGNSetSceneMeshNode',
    role: 'APPLY',
    purpose: {
      en: 'Writes dynamic mesh attributes back to a Blender mesh through generated input sockets.',
      ja: '生成された input socket を通じて、動的 mesh attribute を Blender mesh へ書き戻します。',
    },
    inputs: {
      en: ['Mesh', 'Dynamic writable mesh attribute inputs, grouped by category'],
      ja: ['Mesh', 'カテゴリ別に整理された動的 writable mesh attribute input'],
    },
    outputs: {en: ['None'], ja: ['なし']},
    properties: {
      en: ['Mesh reference', 'Section toggles for writable categories', 'Use Selected Mesh', 'Reload action'],
      ja: ['Mesh 参照', 'writable category の section toggle', 'Use Selected Mesh', 'Reload action'],
    },
    evaluation: {
      en: 'It resolves the linked Mesh input first, falls back to the Mesh property, refreshes sockets when needed, then writes linked or default input values to writable mesh attributes.',
      ja: 'まず linked Mesh input を解決し、なければ Mesh property を使います。必要に応じて socket を更新し、linked/default input value を writable mesh attribute へ書き込みます。',
    },
    examples: {
      en: ['Write mesh custom properties from computed values.', 'Use Scene Mesh to inspect available data, then Set Scene Mesh to drive writable fields.'],
      ja: ['computed value から mesh custom property を書き込む。', 'Scene Mesh で利用可能な data を確認し、Set Scene Mesh で writable field を駆動する。'],
    },
    limitations: {
      en: ['Only writable mesh attributes discovered by the manifest are exposed.', 'Some mesh RNA values are read-only and will not appear as writable inputs.'],
      ja: ['manifest で検出された writable mesh attribute だけが公開されます。', 'read-only の mesh RNA 値は writable input として表示されません。'],
    },
    visual: {input: ['Mesh', 'Writable attributes'], output: ['Blender mesh'], effect: 'Write mesh data'},
  },
  {
    slug: 'set-attribute',
    group: 'attribute',
    category: {en: 'Attribute', ja: '属性'},
    title: 'Set Attribute',
    nodeId: 'SGNSetAttributeNode',
    nodeClass: 'SGNSetAttributeNode',
    role: 'APPLY',
    purpose: {en: 'Writes a limited set of object attributes or custom properties by attribute path.', ja: 'attribute path を指定して、限定された object attribute または custom property へ値を書き込みます。'},
    inputs: {en: ['Target', 'Value'], ja: ['Target', 'Value']},
    outputs: {en: ['None'], ja: ['なし']},
    properties: {en: ['Attribute Path'], ja: ['Attribute Path']},
    evaluation: {en: 'It writes Value to `hide_viewport`, `hide_render`, or a custom property path such as `[\"my_prop\"]`.', ja: '`hide_viewport`、`hide_render`、または `[\"my_prop\"]` のような custom property path へ Value を書き込みます。'},
    examples: {en: ['Toggle viewport visibility.', 'Write a simple custom property.'], ja: ['viewport visibility を切り替える。', 'simple custom property を書き込む。']},
    limitations: {en: ['Only `hide_viewport`, `hide_render`, and custom property paths are accepted.', 'Use Set Scene Object for generated writable object sockets.'], ja: ['`hide_viewport`、`hide_render`、custom property path のみ対応しています。', '生成された writable object socket が必要な場合は Set Scene Object を使ってください。']},
    visual: {input: ['Target', 'Value', 'Path'], output: ['Blender object'], effect: 'Write by path'},
  },
  {
    slug: 'scene-graph-reroute',
    group: 'layout',
    category: {en: 'Layout', ja: 'Layout'},
    title: 'Scene Graph Reroute',
    nodeId: 'SGNRerouteNode',
    nodeClass: 'SGNRerouteNode',
    role: 'ORGANIZATION',
    purpose: {en: 'Passes values through a typed reroute socket.', ja: '型付き reroute socket として値を通過させます。'},
    inputs: {en: ['Input'], ja: ['Input']},
    outputs: {en: ['Output'], ja: ['Output']},
    properties: {en: ['Type, auto-synced from linked sockets when possible'], ja: ['Type。可能な場合は接続された socket から自動同期されます。']},
    evaluation: {en: 'It copies Input to Output without changing the value.', ja: '値を変更せずに Input を Output へ渡します。'},
    examples: {en: ['Keep long wires readable.', 'Preserve Scene Graph socket colors through a reroute.'], ja: ['長い wire を読みやすく整理する。', 'reroute を通して Scene Graph socket color を保つ。']},
    limitations: {en: ['It is an organization node, not a compute node.', 'Changing type may rebuild sockets and reconnect links.'], ja: ['整理用ノードであり、計算ノードではありません。', 'type 変更時に socket が再構築され、link がつなぎ直されることがあります。']},
    visual: {input: ['Any typed value'], output: ['Same value'], effect: 'Pass through'},
  },
  {
    slug: 'scene-graph-group',
    group: 'layout',
    category: {en: 'Layout', ja: 'Layout'},
    title: 'Scene Graph Group',
    nodeId: 'SGNGroupNode',
    nodeClass: 'SGNGroupNode',
    role: 'ORGANIZATION',
    purpose: {en: 'Evaluates a reusable Scene Graph node tree inside another graph.', ja: '別の graph 内で再利用可能な Scene Graph node tree を評価します。'},
    inputs: {en: ['Generated from the group tree interface'], ja: ['group tree interface から生成']},
    outputs: {en: ['Generated from the group tree interface'], ja: ['group tree interface から生成']},
    properties: {en: ['Group tree', 'Edit action', 'Ungroup action'], ja: ['Group tree', 'Edit action', 'Ungroup action']},
    evaluation: {en: 'It passes input socket values into the nested Scene Graph tree and forwards group output values back to the parent graph.', ja: 'input socket value を nested Scene Graph tree に渡し、group output value を parent graph へ戻します。'},
    examples: {en: ['Package a repeated transform chain.', 'Create reusable graph tools from selected nodes.'], ja: ['繰り返し使う transform chain をまとめる。', 'selected nodes から再利用可能な graph tool を作る。']},
    limitations: {en: ['Requires a valid Scene Graph node tree.', 'The interface follows the nested group inputs and outputs.'], ja: ['有効な Scene Graph node tree が必要です。', 'interface は nested group の input/output に従います。']},
    visual: {input: ['Group inputs'], output: ['Group outputs'], effect: 'Nested graph'},
  },
  {
    slug: 'watch-value',
    group: 'debug',
    category: {en: 'Debug', ja: 'Debug'},
    title: 'Watch Value',
    nodeId: 'SGNWatchValueNode',
    nodeClass: 'SGNWatchValueNode',
    role: 'DEBUG',
    purpose: {en: 'Displays an evaluated value in the node UI.', ja: '評価された値を node UI に表示します。'},
    inputs: {en: ['Value'], ja: ['Value']},
    outputs: {en: ['None'], ja: ['なし']},
    properties: {en: ['Display Value, internal'], ja: ['Display Value。内部用']},
    evaluation: {en: 'It converts the input value to a readable string and stores it for display.', ja: 'input value を読みやすい文字列へ変換し、表示用に保存します。'},
    examples: {en: ['Inspect a computed vector before applying it.', 'Check which dynamic attribute value is flowing through the graph.'], ja: ['適用前の computed vector を確認する。', 'graph を流れている dynamic attribute value を確認する。']},
    limitations: {en: ['Shows only the first several display lines in the node UI.', 'Does not output the value onward.'], ja: ['node UI には先頭数行だけ表示されます。', '値を下流へ出力しません。']},
    visual: {input: ['Any value'], output: ['Node display'], effect: 'Inspect value'},
  },
];

const pageBySlug = new Map(nodes.map((node) => [node.slug, node]));

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), {recursive: true});
}

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function wrapText(text, max = 30) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3);
}

function svgList(items, x, y, side) {
  if (!items.length || items[0] === 'None') {
    return `<text x="${x}" y="${y}" class="muted" text-anchor="${side}">None</text>`;
  }
  return items.slice(0, 4).map((item, index) => {
    const yy = y + index * 30;
    const anchor = side;
    const socketX = side === 'end' ? x + 12 : x - 12;
    return `<circle cx="${socketX}" cy="${yy - 5}" r="5" class="socket"/><text x="${x}" y="${yy}" text-anchor="${anchor}">${escapeXml(item)}</text>`;
  }).join('\n');
}

function nodeSvg(node) {
  const roleClass = node.role.toLowerCase();
  const titleLines = wrapText(node.title, 24);
  const purposeLines = wrapText(node.purpose.en, 54);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="920" height="360" viewBox="0 0 920 360" role="img" aria-labelledby="title desc">
  <title id="title">${escapeXml(node.title)} node diagram</title>
  <desc id="desc">${escapeXml(node.purpose.en)}</desc>
  <style>
    :root { color-scheme: light dark; }
    .bg { fill: #f7faf9; }
    .panel { fill: #ffffff; stroke: #c9d8d5; stroke-width: 2; }
    .node { fill: #1f2a44; stroke: #53c6b8; stroke-width: 3; }
    .role { fill: #16685f; }
    .role.read { fill: #1976a3; }
    .role.compute { fill: #7c4d13; }
    .role.apply { fill: #a33b32; }
    .role.organization { fill: #5d6270; }
    .role.debug { fill: #5f3f9e; }
    .socket { fill: #53c6b8; stroke: #0f4942; stroke-width: 1.5; }
    .arrow { stroke: #3b5550; stroke-width: 3; fill: none; marker-end: url(#arrow); }
    text { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; fill: #17211f; font-size: 18px; }
    .small { font-size: 14px; }
    .muted { fill: #60716d; }
    .nodeText { fill: #ffffff; font-weight: 700; font-size: 24px; }
    .nodeSmall { fill: #d7fffa; font-size: 14px; }
    .roleText { fill: #ffffff; font-weight: 700; font-size: 14px; letter-spacing: 0; }
    @media (prefers-color-scheme: dark) {
      .bg { fill: #0d1413; }
      .panel { fill: #151f1d; stroke: #314541; }
      .node { fill: #192235; stroke: #53c6b8; }
      text { fill: #edf7f5; }
      .muted { fill: #9bb2ad; }
      .arrow { stroke: #8cbdb5; }
    }
  </style>
  <defs>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
      <path d="M2,2 L10,6 L2,10 Z" fill="#3b5550"/>
    </marker>
  </defs>
  <rect class="bg" x="0" y="0" width="920" height="360" rx="18"/>
  <rect class="panel" x="38" y="44" width="240" height="240" rx="8"/>
  <rect class="panel" x="642" y="44" width="240" height="240" rx="8"/>
  <text x="158" y="82" text-anchor="middle" font-weight="700">Inputs</text>
  <text x="762" y="82" text-anchor="middle" font-weight="700">${node.role === 'APPLY' ? 'Target' : 'Outputs'}</text>
  ${svgList(node.visual.input, 214, 126, 'end')}
  ${svgList(node.visual.output, 686, 126, 'start')}
  <path class="arrow" d="M286 164 C330 164 330 164 374 164"/>
  <path class="arrow" d="M546 164 C590 164 590 164 634 164"/>
  <rect class="node" x="374" y="84" width="172" height="160" rx="10"/>
  <rect class="role ${roleClass}" x="394" y="104" width="132" height="28" rx="6"/>
  <text class="roleText" x="460" y="124" text-anchor="middle">${escapeXml(node.role)}</text>
  ${titleLines.map((line, index) => `<text class="nodeText" x="460" y="${168 + index * 28}" text-anchor="middle">${escapeXml(line)}</text>`).join('\n')}
  <text class="nodeSmall" x="460" y="224" text-anchor="middle">${escapeXml(node.nodeId)}</text>
  <text x="460" y="286" text-anchor="middle" font-weight="700">${escapeXml(node.visual.effect)}</text>
  ${purposeLines.map((line, index) => `<text class="small muted" x="460" y="${315 + index * 20}" text-anchor="middle">${escapeXml(line)}</text>`).join('\n')}
</svg>
`;
}

function roleMapSvg() {
  const roles = [
    ['READ', 'Read Blender or stored values', '#1976a3'],
    ['COMPUTE', 'Calculate derived values', '#7c4d13'],
    ['APPLY', 'Write back to Blender', '#a33b32'],
    ['ORGANIZATION', 'Group and route graphs', '#5d6270'],
    ['DEBUG', 'Inspect evaluated values', '#5f3f9e'],
  ];
  const cards = roles.map(([role, text, color], index) => {
    const x = 38 + index * 176;
    return `<rect x="${x}" y="80" width="148" height="150" rx="8" fill="${color}"/>
  <text x="${x + 74}" y="124" text-anchor="middle" class="roleTitle">${role}</text>
  ${wrapText(text, 18).map((line, lineIndex) => `<text x="${x + 74}" y="${164 + lineIndex * 22}" text-anchor="middle" class="roleText">${escapeXml(line)}</text>`).join('\n')}`;
  }).join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="920" height="280" viewBox="0 0 920 280" role="img" aria-labelledby="title desc">
  <title id="title">Scene Graph Nodes role map</title>
  <desc id="desc">READ, COMPUTE, APPLY, ORGANIZATION, and DEBUG role definitions.</desc>
  <style>
    .bg { fill: #f7faf9; }
    .title { font: 700 26px Inter, system-ui, sans-serif; fill: #17211f; }
    .roleTitle { font: 700 17px Inter, system-ui, sans-serif; fill: #ffffff; }
    .roleText { font: 15px Inter, system-ui, sans-serif; fill: #f4fffd; }
    @media (prefers-color-scheme: dark) {
      .bg { fill: #0d1413; }
      .title { fill: #edf7f5; }
    }
  </style>
  <rect class="bg" width="920" height="280" rx="18"/>
  <text x="460" y="42" text-anchor="middle" class="title">Node roles in ${escapeXml(buildLabel)}</text>
  ${cards}
</svg>
`;
}

function bullets(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function page(node, locale) {
  const isJa = locale === 'ja';
  const l = isJa ? 'ja' : 'en';
  const caption = isJa
    ? `${node.title} の入力、出力、評価時の役割を示した図です。`
    : `Diagram showing the inputs, outputs, and evaluation role of ${node.title}.`;
  const headings = isJa ? {
    visual: '図解',
    purpose: '目的',
    role: '役割',
    inputs: '入力',
    outputs: '出力',
    properties: 'プロパティ',
    evaluation: '評価の挙動',
    examples: 'よく使う例',
    limitations: '制限',
    metadata: 'バージョン情報',
    versionAdded: '追加バージョン',
    build: '現在の build',
    none: 'なし',
    added: `${node.added || addonVersion} で追加`,
  } : {
    visual: 'Visual Guide',
    purpose: 'Purpose',
    role: 'Role',
    inputs: 'Inputs',
    outputs: 'Outputs',
    properties: 'Properties',
    evaluation: 'Evaluation Behavior',
    examples: 'Common Examples',
    limitations: 'Limitations',
    metadata: 'Version Metadata',
    versionAdded: 'Version added',
    build: 'Current build',
    none: 'None',
    added: 'Added in',
  };
  const imagePath = `/Scene-Graph-Nodes-Docs/img/nodes/${node.slug}.svg`;
  return `---
title: ${node.title}
node_id: ${node.nodeId}
node_class: ${node.nodeClass}
category: ${node.category[l]}
role: ${node.role}
added: ${node.added || addonVersion}
---

${node.purpose[l]}

<div className="sgn-badges">
  <span className="sgn-badge">${node.nodeId}</span>
  <span className="sgn-badge">${node.role}</span>
  <span className="sgn-badge">${isJa ? headings.added : `${headings.added} ${node.added || addonVersion}`}</span>
  <span className="sgn-badge">${node.category[l]}</span>
  <span className="sgn-badge">${buildLabel}</span>
</div>

## ${headings.visual}

<figure className="sgn-node-figure">
  <img src="${imagePath}" alt="${node.title} node diagram" />
  <figcaption>${caption}</figcaption>
</figure>

## ${headings.purpose}

${node.purpose[l]}

## ${headings.role}

\`${node.role}\` - ${roleDescriptions[node.role][l]}

## ${headings.inputs}

${bullets(node.inputs[l])}

## ${headings.outputs}

${bullets(node.outputs[l])}

## ${headings.properties}

${bullets(node.properties[l])}

## ${headings.evaluation}

${node.evaluation[l]}

## ${headings.examples}

${bullets(node.examples[l])}

## ${headings.limitations}

${bullets(node.limitations[l])}

## ${headings.metadata}

- ${headings.versionAdded}: \`${node.added || addonVersion}\`
- ${headings.build}: \`${buildLabel}\`
`;
}

function nodeJson(node) {
  return {
    slug: node.slug,
    group: node.group,
    title: node.title,
    nodeId: node.nodeId,
    nodeClass: node.nodeClass,
    role: node.role,
    path: `nodes/${node.group}/${node.slug}`,
    image: `img/nodes/${node.slug}.svg`,
    added: node.added || addonVersion,
    purpose: node.purpose.en,
  };
}

for (const node of nodes) {
  const enPath = path.join(root, 'docs', `nodes/${node.group}/${node.slug}.md`);
  const jaPath = path.join(root, 'i18n/ja/docusaurus-plugin-content-docs/current', `nodes/${node.group}/${node.slug}.md`);
  ensureDir(enPath);
  ensureDir(jaPath);
  fs.writeFileSync(enPath, page(node, 'en'));
  fs.writeFileSync(jaPath, page(node, 'ja'));

  const svgPath = path.join(root, 'static/img/nodes', `${node.slug}.svg`);
  ensureDir(svgPath);
  fs.writeFileSync(svgPath, nodeSvg(node));
}

fs.writeFileSync(path.join(root, 'static/img/node-role-map.svg'), roleMapSvg());
fs.writeFileSync(path.join(root, 'data/nodes.json'), `${JSON.stringify(nodes.map(nodeJson), null, 2)}\n`);

if (process.argv.includes('--list')) {
  for (const node of nodes) {
    console.log(`${node.category.en}\t${node.title}\t${node.role}`);
  }
}
