/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F7C5F',
        accent: '#FF9E40',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
