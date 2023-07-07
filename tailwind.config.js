/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '568px',
      // => @media (min-width: 568px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1624px',
      // => @media (min-width: 1624px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
