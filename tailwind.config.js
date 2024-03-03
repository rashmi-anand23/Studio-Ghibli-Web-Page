/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        body: ['Just Another Hand'],
        poppins: ['Poppins']
        
      },
      keyframes: {
        move:{
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY': 'move 3s linear infinite'
      },
   
  },
  plugins: [],
}
}

