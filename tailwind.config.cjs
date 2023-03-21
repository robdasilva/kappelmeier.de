const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Kappelmeier',
					'Gill Sans',
					'Gill Sans MT',
					'Calibri',
					...defaultTheme.fontFamily.sans
				]
			}
		}
	},
	plugins: []
};
