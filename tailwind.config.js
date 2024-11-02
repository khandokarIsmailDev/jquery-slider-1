/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        maxWidth: {
          'custom-container': '1140px',
        },
        perspective: {
          'none': 'none',
          'sm': '500px',
          'md': '1000px',
          'lg': '1500px',
          'xl': '2000px',
        },
      },
    },
    plugins: [],
  }