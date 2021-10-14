module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        blue: '#6188FF ',
        red: '#EA3943 ',
        green: '#16C784',
        dark: '#17171A',
        light: '#F5F7FA',
        lightGrey: {
          100: '#A0A0A0',
          200: '#929292',
          300: '#606266',
        },
        darkBlue: '#171924',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
