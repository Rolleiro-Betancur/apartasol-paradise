/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PP Neue Montreal"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['monospace'],
      },
      colors: {
        sonder: {
          cream: '#FAF8F5',
          darkgreen: '#193B33',
          yellow: '#E0B042',
          lightgreen: '#E7EBE3',
          lightyellow: '#FCEFCF',
          darkyellow: '#E7B420'
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
