/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'default-bg': '#181919',
        'primary': '#3DAB83',
        'secondary': '#191D1C',
        'title': '#D9D9D9',
        'default-text': '#BCBCBC',
      },
      boxShadow: {
        'glow': '0 0px 10px #000'
      }
    },
  },
  plugins: [],
}

