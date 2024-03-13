import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'elkjop': ['elkjop', 'sans-serif']
      }
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            'primary': '#00007B',
            'secondary': '#94C020'
          }
        },
        dark: {
          colors: {
            'primary': '#00007B',
            'secondary': '#94C020'
          }
        }
      }
    })
  ],
}