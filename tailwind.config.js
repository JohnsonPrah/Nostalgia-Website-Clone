/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        lina:"Poppins"
      },
      colors :{
        colprm :"#CD7428",
        colsec :"#905421",
        emerald :"#03793E",
        ruby :"#991B26",
        gray : "#8A8A8A",
        dep : "#361f0c"
      },
      gridTemplateColumns:{
        mygrid:"1fr 1fr 1fr 2fr",
        mygrids:"2fr 1fr",
        megrid:"1fr 2fr"
      },
      backgroundImage: {
        'cto' :"url('../src/assets/images/ctobg.jpg')",
        'home' :"url('../src/assets/images/homebg.jpg')",
        'nostalgia-bg' :"url('../src/assets/images/nostalgia-bg.jpg')",
        'subscribe' :"url('../src/assets/images/subscribebg.jpg')",
        'review' :"url('../src/assets/images/reviewbg.jpg')",
        'about' :"url('../src/assets/images/aboutbg.jpg')",
        'aboutruby' :"url('../src/assets/images/aboutrubybg.jpg')",
        'aboutemerald' :"url('../src/assets/images/aboutemeraldbg.jpg')",
        'aboutnos' :"url('../src/assets/images/aboutbgs.jpg')" , 
        'nos-bg' :"url('../src/assets/images/nos-bg.jpg')"  
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}