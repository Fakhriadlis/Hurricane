/** Hurricane XCS — token desain landing page */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        midnight: '#070B14',   // latar utama (biru-hitam pekat)
        navy: { DEFAULT: '#0D1630', 2: '#121D3D' }, // permukaan kartu
        steel: '#93A5C1',      // teks sekunder
        ice: '#EAF1FF',        // teks utama
        canta: { DEFAULT: '#FFA45C', 600: '#FF8F3A', ink: '#1B0E02' }, // aksen CTA (cantaloupe orange)
        volt: '#3DA9FF',       // aksen kedua: garis voltase / highlight teknis (electric blue)
        warn: '#FF6B57',       // harga naik / voltase tidak stabil
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { page: '76rem' },
      boxShadow: {
        cta: '0 10px 30px -10px rgba(255,164,92,.65)',
        glass: 'inset 0 1px 0 rgba(255,255,255,.08), 0 20px 50px -24px rgba(0,0,0,.7)',
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 60s linear infinite' },
    },
  },
  plugins: [],
};
