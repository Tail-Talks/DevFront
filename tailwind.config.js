/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
		screens: {
      'xs': '375px',
      // => @media (min-width: 375px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
			'3xl': '2560px',
			'4xl': '3200px'
    },
    fontFamily: {
      sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
    },
    extend: {
			backgroundImage: {
        'step-1':
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/pictures/main/step1pic.jpg')",
				'step-2':
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/pictures/main/step2pic.jpg')",
				'step-3':
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/pictures/main/step3pic.jpg')",
				'step-4':
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/pictures/main/step4pic.jpg')",
				'step-5':
					"linear-gradient(to bottom, rgba(25, 25, 25, 0), rgba(25, 25, 25, 0), rgba(25, 25, 25, 1)), url('assets/pictures/main/step5pic.jpg')",
				'bread':
					"linear-gradient(to bottom left, rgba(255, 174, 78, 1), rgba(255, 76, 140, 1))",
				'counterDog':
					"url('assets/counterDog.png')",
				'roadmap-stars':
					"url('assets/png/backgrounds/roadmap-background-stars.png')"
      },
      colors: {
        black: {
          50: "#191919",
					80: "#000000CC"
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2.5rem",
          xl: "6.5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: "linear-gradient(to top right, #FF4C8C, #FFAE4E)",
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          display: 'inline-block',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  darkMode: "class",
};
