/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#00295E',
          200: '#0D3870'
        },
        secondary: {
          100: '#DDAD1EFF'
        },
        'vsg-yellow': {
          100: 'rgba(174, 131, 3, 1)',
          200: 'rgba(195, 147, 4, 1)',
          300: 'rgba(217, 164, 4, 1)',
          400: 'rgba(221, 173, 30, 1)'
        },
        'vsg-blue': {
          100: 'rgba(34, 82, 225, 1)',
          200: 'rgba(38, 91, 251, 1)',
          300: 'rgba(60, 108, 251, 1)',
          400: 'rgba(81, 124, 252, 1)'
        },
        'dark-blue': 'rgb(0%, 16.099548%, 37.599182%)', //
        'light-blue': 'rgb(5.018616%, 21.907043%, 44.587708%)', //
        'white-full-transparent': 'rgba(255, 255, 255, 0)',
        'white-light-transparent': 'rgba(255, 255, 255, 0.05)'
      }
    }
  },
  plugins: []
}
