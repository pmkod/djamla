/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        base: {
          0:  withOpacity("--color-base-0"),
          50:  withOpacity("--color-base-50"),
          100: withOpacity("--color-base-100"),
          200: withOpacity("--color-base-200"),
          300: withOpacity("--color-base-300"),
          400: withOpacity("--color-base-400"),
          500: withOpacity("--color-base-500"),
          600: withOpacity("--color-base-600"),
          700: withOpacity("--color-base-700"),
          800: withOpacity("--color-base-800"),
          900: withOpacity("--color-base-900"),
          950: withOpacity("--color-base-950"),
          1000: withOpacity("--color-base-1000"),
        },
        neutral: {
          50:  withOpacity("--color-neutral-50"),
          100: withOpacity("--color-neutral-100"),
          200: withOpacity("--color-neutral-200"),
          300: withOpacity("--color-neutral-300"),
          400: withOpacity("--color-neutral-400"),
          500: withOpacity("--color-neutral-500"),
          600: withOpacity("--color-neutral-600"),
          700: withOpacity("--color-neutral-700"),
          800: withOpacity("--color-neutral-800"),
          900: withOpacity("--color-neutral-900"),
          950: withOpacity("--color-neutral-950"),
        },
        primary: {
          50: withOpacity("--color-primary-50"),
          100: withOpacity("--color-primary-100"),
          200: withOpacity("--color-primary-200"),
          300: withOpacity("--color-primary-300"),
          400: withOpacity("--color-primary-400"),
          500: withOpacity("--color-primary-500"),
          600: withOpacity("--color-primary-600"),
          700: withOpacity("--color-primary-700"),
          800: withOpacity("--color-primary-800"),
          900: withOpacity("--color-primary-900"),
          950: withOpacity("--color-primary-950"),
        },
      },
    },
  },
  plugins: [],
}

