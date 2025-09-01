// Configuración de TailwindCSS
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-oscuro': 'linear-gradient(135deg, #0f172a 0%, #111827 50%, #0b1220 100%)'
      }
    },
  },
  plugins: [],
}