/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          50:  '#e9eff5',
          100: '#c8d4e3',
          200: '#a4b6ce',
          300: '#8098b8',
          400: '#5d7aa2',
          500: '#3a5b8c',
          600: '#1a3e73',
          700: '#0f2f58',
          800: '#0a2344',
          900: '#06182e',
        },
        brandGold: {
          50:  '#fff9e8',
          100: '#ffefc2',
          200: '#ffe39a',
          300: '#ffd771',
          400: '#ffcb49',
          500: '#f4b728',
          600: '#d9981b',
          700: '#b57915',
          800: '#8e5e10',
          900: '#6b460b',
        },
        brandGray: {
          50:  '#fafafa',
          100: '#f4f4f4',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        cement: '#f5f2eb',
        dark:   '#0f0f0f',

        accentRed:   '#b23a29',
        accentGreen: '#147a52',
        accentTeal:  '#2aa8a0',

        // preserve existing utility names used in components by aliasing
        // `amber` -> brandGold so existing `bg-amber-500` classes map to brandGold
        amber: {
          50:  '#fff9e8',
          100: '#ffefc2',
          200: '#ffe39a',
          300: '#ffd771',
          400: '#ffcb49',
          500: '#f4b728',
          600: '#d9981b',
          700: '#b57915',
          800: '#8e5e10',
          900: '#6b460b',
        },
        // also provide a `theme` color alias if any CSS expects `theme` color via Tailwind
        theme: {
          DEFAULT: '#1a3e73',
          light: '#e9eff5',
          dark: '#06182e',
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
