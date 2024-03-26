/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#212529',
        secondary: '#343a40',
        textPrimary: '#dee2e6', 
        textSecondary: '#888c8f',

        accent1: '#495057',
        accent2: '#495057',
        
        sfont1: '#ffd238',
        sfont2: '#e35e01',

        commonColor: '#94b1b3',
        uncommonColor: '#02b859',
        rareColor: '#2298fe',
      },
    },
  },
}