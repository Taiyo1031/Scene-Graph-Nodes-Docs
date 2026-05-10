const sidebars = {
  docs: [
    'intro',
    'installation',
    'quick-start',
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: ['concepts/scene-graph-tree', 'concepts/evaluation', 'concepts/sockets', 'concepts/attributes', 'concepts/groups'],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: ['guides/copy-location', 'guides/offset-location', 'guides/copy-matrix-world', 'guides/selection-sync'],
    },
    {
      type: 'category',
      label: 'Nodes',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Input',
          items: ['nodes/input/object-input', 'nodes/input/scene-object', 'nodes/input/scene-mesh', 'nodes/input/float-value', 'nodes/input/vector-value'],
        },
        {
          type: 'category',
          label: 'Transform',
          items: ['nodes/transform/get-location', 'nodes/transform/set-location', 'nodes/transform/get-matrix-world', 'nodes/transform/set-matrix-world'],
        },
        {
          type: 'category',
          label: 'Math',
          items: ['nodes/math/math', 'nodes/math/vector-math'],
        },
        {
          type: 'category',
          label: 'Matrix',
          items: ['nodes/matrix/matrix-math', 'nodes/matrix/compose-matrix', 'nodes/matrix/decompose-matrix'],
        },
        {
          type: 'category',
          label: 'Attribute',
          items: ['nodes/attribute/set-attribute'],
        },
        {
          type: 'category',
          label: 'Layout',
          items: ['nodes/layout/scene-graph-group', 'nodes/layout/scene-graph-reroute'],
        },
        {
          type: 'category',
          label: 'Debug',
          items: ['nodes/debug/watch-value'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: ['reference/sockets', 'reference/operators', 'reference/preferences', 'reference/evaluation-errors'],
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      items: ['contributing/writing-docs', 'contributing/release-checklist'],
    },
  ],
};

module.exports = sidebars;
