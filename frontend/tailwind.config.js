/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'forestgreen' : '#08392b',
      'tealgreen' : '#578e87',
      'cream' :  '#f7e2c7',
      'green' : '#29660c',
      'white' : '#FFFFFF'
    }
  },
  plugins: [],
}

