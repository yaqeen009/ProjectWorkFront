/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EBF5F4',
          200: '#F5F8FA',
        },
        secondary: {
          100: '#D3EDEA',
          200: '#028476',
          300: '#303D4D',
          400: '#028476',
          500: '#D9D9D9',
          600: '#C4E3E0',
          
        },
        chatBubble: {
          100: '#028476',
          200: '#EBF5F4',
        },
      }
    },
  },
  plugins: []
  
}