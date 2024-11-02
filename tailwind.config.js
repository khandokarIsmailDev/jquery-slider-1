/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        maxWidth: {
          'custom-container': '1140px',
        },
      },
    },
    plugins: [],
  }