/** Example file/folder data. */
export const files = [
  {
    name: 'Cartella utenti',
    type: 'folder',
    children: [
      {
        name: 'Giovanardi',
        type: 'folder',
        children: [
          {
            name: 'Documenti',
            type: 'folder',
            children: [
              { name: 'Documento telepass.pdf', type: 'file' },
              { name: 'Documento telepass.pdf', type: 'file' },
              { name: 'Documento telepass.pdf', type: 'file' },
              { name: 'Documento telepass.pdf', type: 'file' },
            ]
          },
        ]
      }
    ]
  },
  {
    name: 'Pluto',
    type: 'folder',
    children: [
      {
        name: 'Cartelle segrete amministrazione',
        type: 'folder',
        children: [
          { name: '.travis.yml', type: 'file' },
          { name: 'firebase.json', type: 'file' }
        ]
      },
      { name: 'package.json', type: 'file' }
    ]
  },
  {
    name: 'Viaggio ibiza 2022',
    type: 'folder',
    children: [
      { name: 'questanoneibiza.js', type: 'file' },
      { name: 'README.md', type: 'file' }
    ]
  }
];
