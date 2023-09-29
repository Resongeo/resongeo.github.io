/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          100: '#39C693',
          200: '#39A995',
          300: '#1B9E67',
        }
      }
    },
  },
  plugins: [],
}

