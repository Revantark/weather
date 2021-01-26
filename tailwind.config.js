module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      backgroundColor: theme => ({
        'primary': '#3490dc',
        'primaryDark':'#1E40AF',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
