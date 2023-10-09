/** Example file/folder data. */
export const files = [
  {
    name: 'Users',
    type: 'folder',
    children: [
      {
        name: 'User',
        type: 'folder',
        children: [
          {
            name: 'Docs',
            type: 'folder',
            children: [
              { name: 'Doc a.pdf', type: 'file' },
              { name: 'Doc b.pdf', type: 'file' },
              { name: 'Doc c.pdf', type: 'file' },
            ]
          },
        ]
      }
    ]
  },
  {
    name: 'Folder',
    type: 'folder',
    children: [
      { name: 'file', type: 'file' },
    ]
  }
];
