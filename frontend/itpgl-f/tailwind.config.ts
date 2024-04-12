import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './components/**/*.{js,ts,jsx,tsx,mdx,html}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      
      fontSize: {
        'sm': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        'md': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        'lg': 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        'xl': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        '2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        '3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
        '4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
        '5xl': 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
        '6xl': 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'transparent-to-white': 'transparent',
      },
      animation: {  
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fly-in-left': 'flyInLeft 1s ease-out',
        'show-up': 'showUp 1s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out'
      },
      keyframes: {  
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        flyInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        flyInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(200%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        showUp: {
          '0%': {
            opacity: '0',
            transform: 'scale(0)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10%)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text', 
          'text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    },
    daisyui
  ],
}

export default config