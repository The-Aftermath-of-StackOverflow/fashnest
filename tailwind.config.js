// @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
// @import url('https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0B2447',
        secondary: '#19376D',
        tertiary: '#576CBC',
        'orange-dark': '#E8630A',
        'yellow-bright': '#FCD900',
        light: '#A5D7E8',
        'pale-blue': '#16BAC5',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Prism: ['Tilt Prism'],
      },
      maxHeight: {
        77: '77vh',
      },
      animation: {
        loader: 'loader 0.6s infinite alternate',
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
