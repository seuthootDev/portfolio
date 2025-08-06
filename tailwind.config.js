/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          900: '#2d1b4e',
          800: '#1a0b2e',
        }
      },
      spacing: {
        '15': '3.75rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 