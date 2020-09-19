const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {},
      textColor: {
        inverse: "var(--color-text-inverse)",
        "inverse-soft": "var(--color-text-inverse-soft)",
      },
      backgroundColor: {
        inverse: "var(--color-bg-inverse)",
        green: {
          ...colors.green,
          300: "var(--color-bg-green-300)",
          200: "var(--color-bg-green-200)",
          100: "var(--color-bg-green-100)",
        },
      },
      borderColor:{
        green:{
          ...colors.green,
          300:"var(--color-bg-green-300)",
          500:"var(--border-500)"
        }
      }
    },
  },
  variants: {},
  plugins: [],
};
