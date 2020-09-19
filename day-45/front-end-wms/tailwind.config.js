const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {},
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        default: "var(--color-text-default)",
        "default-soft": "var(--color-text-default-soft)",
        inverse: "var(--color-text-inverse)",
        "inverse-soft": "var(--color-text-inverse-soft)",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        default: "var(--color-bg-default)",
        inverse: "var(--color-bg-inverse)",
        green: {
          ...colors.green,
          300: "var(--color-bg-green-300)",
          200: "var(--color-bg-green-200)",
        },
      },
      borderColor:{
        green:{
          ...colors.green,
          500:"var(--border-500)"
        }
      }
    },
  },
  variants: {},
  plugins: [],
};
