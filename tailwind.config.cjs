/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'bg-main': '#011627',
      'bg-secondary': '#011221',
      'border-main': '#1E2D3D',
      'text-main': '#607B96',
      'white': '#ffffff',
      'yellow': '#FEA55F',
      'hero-blue': '#4D5BCE',
      'teal': '#E99287',
      'cyan-green': '#43D9AD',
      'font-secondary': '#E5E9F0',
      'disabled': 'gray',
      'button-main': '#1C2B3A',
      'pink': '#C98BDF',
      'text-secondary': '#465E77',
      'denger': 'red',
      'transparent': '#ffffff00'

    },
  },
  plugins: [
  ],
}