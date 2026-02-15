/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // くすみピンク（主張控えめ）
        'misa-pink': {
          DEFAULT: '#c9a9a6',
          light: '#e8d5d3',
          dark: '#a67f7c',
        },
      },
      fontFamily: {
        sans: ['"Hiragino Sans"', '"Hiragino Kaku Gothic ProN"', 'Meiryo', 'sans-serif'],
      },
      borderRadius: {
        'misa': '1rem',
        'misa-lg': '1.5rem',
      },
      boxShadow: {
        'misa': '0 2px 12px rgba(0,0,0,0.06)',
        'misa-md': '0 4px 20px rgba(0,0,0,0.08)',
        'misa-sm': '0 1px 8px rgba(0,0,0,0.04)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
