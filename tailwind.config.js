/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        'sidebar-content': 'calc(100vh - 86px)',
      },
    },
  },
  plugins: [],
};
