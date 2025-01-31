/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'h1': '48px', 
        'h2': '36px',
        'h3': '24px',
        'p' : '16px',
        'nav' : '12px'
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(192, 183, 232, 0.8))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(192, 183, 232, 0.8))' },
          '100%': { filter: 'drop-shadow(0 0 10px rgba(192, 183, 232, 0.8))' },
        },
        thunder: {
          '0%': { 
            maskSize: '0% 0%',
            WebkitMaskSize: '0% 0%',
          },
          '50%': { 
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%',
          },
          '100%': { 
            maskSize: '200% 200%',
            WebkitMaskSize: '200% 200%',
          },
        },
        lightTravel: {
          '0%': { 
            transform: 'translate(-50%, -50%) rotate(0deg)',
          },
          '25%': { 
            transform: 'translate(50%, -50%) rotate(90deg)',
          },
          '50%': { 
            transform: 'translate(50%, 50%) rotate(180deg)',
          },
          '75%': { 
            transform: 'translate(-50%, 50%) rotate(270deg)',
          },
          '100%': { 
            transform: 'translate(-50%, -50%) rotate(360deg)',
          },
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        thunder: 'thunder 3s ease-out infinite',
        lightTravel: 'lightTravel 4s linear infinite',
      },
    },
  },
  plugins: [],
};