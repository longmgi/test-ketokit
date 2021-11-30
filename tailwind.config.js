	module.exports = {
  mode: 'jit',

   // These paths are just examples, customize them to match your project structure

   purge: [

     './*.html',

     './*.{js,jsx,ts,tsx,vue}',

   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
	  	screens: {
            sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px', //2xl needs quotes because it starts with a number
        },
	  	colors: {
			// Primary
			primary: {
				5:'#F2F4F6',
				10:'#E4E9EC',
				20:'#CBD5DC',
				40:'#98ACB9',
				60:'#668397',
				80:'#335A75',
				DEFAULT:'#013253',
			},
			// Primary CTA
			primarycta: {
				5:'#FFFAF5',
				10:'#FEF4EA',
				20:'#FDEBD7',
				40:'#FCD8B0',
				60:'#668397',
				80:'#335A75',
				DEFAULT:'#F99F3D',
			},
			// Neutrals
			neutrals: {
				bg:'#FFFFFF',
				bgai:'#F4F4F4',
				line:'#D3D6D7',
				plh:'#A9AEB1',
				'neutrals':'#7E868A',
				'b-alt':'#545E64',
				'b-primary':'#2A363E',
			},
			// Secondary - Navigation
			nav: {
				5:'#F2F9FB',
				10:'#E5F4F6',
				20:'#CCE9EE',
				40:'#99D3DC',
				60:'#66BDCB',
				80:'#33A7B9',
				DEFAULT:'#0091A8',
			},
			// Secondary - Accents
			accents:{
				5:'#FFF7F4',
				10:'#FFEFE9',
				20:'#FFE0D5',
				40:'#FEC1AB',
				60:'#FDA281',
				80:'#FC8357',
				DEFAULT:'#F99F3D',
			},
			//Alerts
			success:{
				5:'#F4FDF9',
				10:'#EAFBF3',
				20:'#D6F6E7',
				40:'#ADEDCF',
				60:'#84E3B7',
				80:'#5BDA9F',
				DEFAULT:'#33D188',
			},
			//Warning
			warning:{
				5:'#F9F7F2',
				10:'#F3EEE6',
				20:'#E8DECF',
				40:'#D2BE9F',
				60:'#BB9D6F',
				80:'#A47D3F',
				DEFAULT:'#8E5D0F',
			},
			// Error
			error:{
				5:'#FDF5F5',
				10:'#F9EAEA',
				20:'#F4D6D6',
				40:'#EAAEAE',
				60:'#DF8787',
				80:'#D55F5F',
				DEFAULT:'#CB3838',
			},
		},
    
  },
  extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
