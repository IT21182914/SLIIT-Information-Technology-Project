/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          //your theme name
          primary: '#FCBF49', //primary color
          'primary-focus': '#F77F00', //primary color (for focus)
          'primary-content': '#ffffff', //text color for primary color
          secondary: '#F77F00', //secondary color
          'secondary-focus': '#F77F00', //secondary color (for focus)
          'secondary-content': '#ffffff', //text color for secondary color
          accent: '#37cdbe', //accent color
          'accent-focus': '#2aa79b', //accent color (for focus)
          'accent-content': '#ffffff', //text color for accent color
          neutral: '#3d4451', //neutral color
          'neutral-focus': '#2a2e37', //neutral color (for focus)
          'neutral-content': '#ffffff', //text color for neutral color
          'base-100': '#ffffff', //background color for base
          'base-200': '#f9fafb', //background color for base
          'base-300': '#d1d5db', //background color for base
          'base-content': '#1f2937', //text color for base
          info: '#2094f3', //info color
          success: '#009485', //success color
          warning: '#ff9900', //warning color
          error: '#ff5724',
          'primary-hover': '#DA9D27',         
        },
      },
    ],
  },

  theme: {
    extend: {
      scale: {
        65: '0.65',
        60: '0.60',
        54: '0.54',
      },
      flexBasis: {
        '1/20': '5.0%',
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      spacing: {
        928: '58rem',
      
      },
      screens: {
        xmd: '928px',
        '3xl': '2000px',
      },
      colors: {
        backGrnd: '#FCBF49',
        'primary-color': '#FCBF49',
         'basicBlue' : '#003049', //basic text blue input feild
      },
      spacing: {
        xl: '54rem',
        lg: '128rem',
      },
    },
  },
  plugins: [require('daisyui')],
}
