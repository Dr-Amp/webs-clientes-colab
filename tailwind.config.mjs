/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        muted: '#6b7280',
        brand: '#2563eb',
      },
    },
  },
  plugins: [],
};
