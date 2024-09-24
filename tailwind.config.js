/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(91.2deg, rgba(136,80,226,1) 4%, rgba(16,13,91,1) 96.5%)',
      }
    },
  },
  plugins: [],
}

