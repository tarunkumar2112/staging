/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('../src/assets/BG.png')",
        'card-bg': "url('../src/assets/Card.png')",
        'top-Left-bg': "url('../src/assets/BG-left-top.png')",
        'top-right-bg': "url('../src/assets/BG-right.png')",
        'full-BG': "url('../src/assets/full-bg.png')",
        'marquee-BG': "url('../src/assets/bg-text.png')",
        'HR-bg': "url('../src/assets/HR.png')",
        'last-sec-bg': "url('../src/assets/bg-image.png')",
        
      },
      colors: {
        'transparent': 'transparent',
        'link-color' : '#7C7C7C',
        'Primary': '#674BB6',
        'Paragraph': '#B5ABCB',
        'price-bg': 'rgba(255, 255, 255, 0.03)',
        'border-color':'rgba(57,51,74,0.5)',
      },
    },
  },
  plugins: [],
}

