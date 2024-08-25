import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme');

// tailwind.config.js

const Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        condensed: ['"Barlow Condensed"', ...defaultTheme.fontFamily.sans]

      },
      fontWeight: {
        thin: 100,
        regular: 400,
        bold: 700,
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "standy-pink": "#E91E63",
        "standy-light-pink": "#FFE0E9",
        "standy-dark-pink": "#C2185B",
        "standy-black": "#1A1A1A",
        "standy-white": "#FAF9F9",
        "cherry-blossom-pink": "#FFB3C9",
        "dogwood-rose": "#D81B60",
        "rose-red": "#C2185B",
        "mimi-pink": "#FFE0E9",
        "cerise": "#E91E63",


      }
    },
  },
  plugins: [],
}

module.exports = Config
