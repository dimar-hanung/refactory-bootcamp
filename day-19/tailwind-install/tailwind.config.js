const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {},
  },
  purge: {
    enabled: true,
    content: ['./index-grid.html'],
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }){
      const buttons = {
        '.btn-red': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          }
        }
      }
      
      addComponents(buttons)
    })
  ],
}