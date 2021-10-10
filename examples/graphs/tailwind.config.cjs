const colors = require('tailwindcss/colors')
const config = {
	mode: 'aot',
	purge: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@jerrythomas/svelte-charts/src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		fontFamily: {
			cursive: ['Kalam', 'cursive'],
			sans: ['Montserrat Alternates', 'ui-serif', 'sans-serif'],
			body: ['Montserrat Alternates', 'ui-serif', 'sans-serif'],
		},

		extend: {
			fontSize: {
				xxl: '10rem',
			},
			colors: {
				pass: colors.emerald,
				fail: colors.rose,
				warn: colors.yellow,
				info: colors.sky,
				// accent: colors.orange,
				primary: colors.blueGray,
				accent: {
					DEFAULT: '#DD845D',
					50: '#FDF7F5',
					100: '#F9EAE4',
					200: '#F2D1C2',
					300: '#EBB7A0',
					400: '#E49E7F',
					500: '#DD845D',
					600: '#D76E3F',
					700: '#C95A2A',
					800: '#AB4D24',
					900: '#8E401E',
				},
				slate: {
					DEFAULT: '#A7A7A7',
					50: '#FFFFFF',
					100: '#FAFAFB',
					200: '#F4F4F6',
					300: '#EBB7A0',
					400: '#E49E7F',
					500: '#A7A7A7',
					600: '#D76E3F',
					700: '#C95A2A',
					800: '#AB4D24',
					900: '#8E401E',
				},
			},
			backgroundImage: (theme) => ({
				texture: "url('/subtle-grey.png')",
			}),
		},
	},
	plugins: [],
}

module.exports = config
