import type { Config } from 'tailwindcss'

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
        'sans': ['Product Sans', 'sans-serif'], // Using Product Sans as default sans-serif font
        'din-condensed': ['DIN Condensed', 'sans-serif'],
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
        "standy-light-pink": "#FCA1C7",
        "standy-dark-pink": "#AD104A",
        "standy-black": "#121212",
        "standy-white": "#F2F0EA",
      }
    },
  },
  plugins: [],
}

module.exports = Config
