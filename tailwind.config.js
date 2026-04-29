/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cream': '#f2efdf', // 你網站的米色背景
        'brand-tan': '#d1a684',   // 你選用的棕褐色點綴
        'brand-dark': '#2d2d2d',  // 灰黑色文字
      },
    },
  },
  plugins: [],
}