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
      'buttongreengradient': '#176648',
      'buttongreenhighlight': '#97c797',
      'buttongreenshadow': '#06130e',
      'beige': '#e9d3bb',
      'pinkbeige': '#ecddd8',
      'whitehighlight': '#f9f1e8',
      'rederror': '#f14e4e',
      'codewhite': '#c5c5c5',
      'codeblue': '#506ec5',
      'codepurple': '#825471',
      'codegreen': '#4b7758',
      'codeorange': '#ca7430',
      'codered': '#76312a',
      'codebg': '#101010'
    },
    extend: {
      boxShadow: {
        'box': '5px 5px rgba(0, 0, 0, 1)',
        'box2': '3px 3px rgba(56, 56, 56, 1)',
      },
    },
  },
  plugins: [],
}
