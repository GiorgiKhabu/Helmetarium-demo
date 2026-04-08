/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neonPink: '#f43bb7',
        deepPurple: '#461344',
        ink: '#07040a',
        night: '#0b0610',
      },
      boxShadow: {
        glowPink: '0 0 18px rgba(244, 59, 183, 0.35)',
        glowPinkStrong: '0 0 30px rgba(244, 59, 183, 0.5)',
        glowPurple: '0 0 24px rgba(70, 19, 68, 0.65)',
        card: '0 10px 30px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'radial-hero':
          'radial-gradient(1000px 500px at 20% 0%, rgba(244, 59, 183, 0.15), transparent 50%), radial-gradient(900px 500px at 80% 10%, rgba(70, 19, 68, 0.45), transparent 55%), radial-gradient(700px 400px at 50% 100%, rgba(244, 59, 183, 0.10), transparent 60%)',
      },
      borderColor: {
        glow: 'rgba(244, 59, 183, 0.35)',
      },
    },
  },
  plugins: [],
};

