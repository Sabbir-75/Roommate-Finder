// ✅ Make sure daisyUI properly set
module.exports = {
  darkMode: 'class', // Optional
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'], // ✅ You can add custom themes here
  },
};

