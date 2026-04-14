import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF6100',
          50:  '#FFF8F3',
          100: '#FFD5B8',
          400: '#FF7625',
          500: '#FF6100',
          600: '#E55600',
          700: '#CC4100',
        },
        gray: {
          50:  '#F6F6F6',
          100: '#F3F3F4',
          200: '#E5E7E8',
          300: '#D1D5D8',
          400: '#9CA3A8',
          500: '#697380',
          600: '#4B5056',
          700: '#333333',
          800: '#1F1F1F',
          900: '#111111',
        },
        page: '#F8FAFB',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm:   '4px',
        md:   '8px',
        lg:   '12px',
        xl:   '16px',
        '2xl':'24px',
        full: '9999px',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '30': '120px',
      },
    },
  },
  plugins: [],
} satisfies Config
