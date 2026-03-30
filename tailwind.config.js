/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50:  '#fdf4f0',
          100: '#fbe8df',
          200: '#f5c9b5',
          300: '#eca688',
          400: '#e07f56',
          500: '#C2714F',
          600: '#a85a3a',
          700: '#8a4530',
          800: '#6e3527',
          900: '#5a2b20',
        },
        ochre: {
          400: '#e3b030',
          500: '#D4A853',
          600: '#b8881c',
        },
        cream: '#FAF6F1',
        bark: {
          900: '#2C1A0E',
          800: '#3d2614',
          700: '#5a3a1e',
        },
        olive: {
          500: '#7A8C5E',
          600: '#637348',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

