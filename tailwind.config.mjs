import { addDynamicIconSelectors } from "@iconify/tailwind"

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'default-bg': '#191C1C',
				primary: '#3DAB8A',
				'primary-hover': '#359471',
				secondary: '#222525',
				'secondary-hover': '#303232',
				title: '#D9D9D9',
				'default-text': '#BCBCBC',
			},
			boxShadow: {
				glow: '0 0px 10px #000',
			},
		},
	},
	plugins: [
		addDynamicIconSelectors(),
	],
}
