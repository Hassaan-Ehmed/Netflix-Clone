/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

   
    extend: {
      backgroundImage:{
        'custom-gradient' : 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)' 
      },
      screens: {

        // Mobile Devices
        'SM320' : '320px',
        'MM375' : '375px',
        'LM425' : '425px',
  
        'tablet': '768px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
  
  
    },
  },
  plugins: [],
}

