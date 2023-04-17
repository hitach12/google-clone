/** @type {import('tailwindcss').Config} */
module.exports = {
  mode :'jit', 
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  purge: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
    },
  },
  
  plugins: [require('@tailwindcss/line-clamp')],
}
