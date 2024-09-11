/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      'blackshadow': '#0b0f02',
      'greydef': '#383838',
      'buttongreen': '#0b5036',
      'buttongreenlight': '#15a16d',
      'buttongreengradient': '#176648',
      'buttongreenhighlight': '#97c797',
      'buttongreenshadow': '#06130e',
      'navbarsection': '#023718',
      'beige': '#e9d3bb',
      'pinkbeige': '#ecddd8',
      'popout': '#d39e72',
      'whitehighlight': '#f9f1e8',
      'progressred': '#f14e4e',
      'debugred': '#ff0000',
      'debuggreen': '#00ff00',
      'debugblue': '#0000ff',
      'debugyellow': '#ffff00',
      'codewhite': '#c5c5c5',
      'codeblue': '#506ec5',
      'codepurple': '#825471',
      'codegreen': '#4b7758',
      'codeorange': '#ca7430',
      'codered': '#76312a',
      'codebg': '#101010',
      'triangle1': '#C96868',
      'triangle2': '#709357',
      'triangle3': '#FADFA1',
      'triangle4': '#7EACB5',
    },
    extend: {
      boxShadow: {
        'box': '5px 5px rgba(0, 0, 0, 1)',
        'box2': '3px 3px rgba(56, 56, 56, 1)',
        'boxl': '3px 3px rgba(233, 211, 187, 1)',
        'circle': '1px 1px 1px 0 rgba(56, 56, 56, 1)'
      },
      width: {
        'center': '92%',
        'sides': '4%'
      },
      minWidth: {
        'sides': '60px'
      },
      rotate: {
        '270': '270deg'
      }
    },
  },
  plugins: [],
}
