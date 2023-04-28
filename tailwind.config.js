/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      background: '#282a36',
      'current-line': '#44475a',
      'foreground': '#f8f8f2',
      'comment': '#6272a4',
      cyan: '#80FFEA',
      green: '#8AFF80',
      orange: '#FFCA80',
      pink: '#FF80BF',
      purple: '#9580FF',
      red: '#FF9580',
      yellow: '#FFFF80',
      white: '#F8F8F2'
    },
  },
  plugins: [],
}

