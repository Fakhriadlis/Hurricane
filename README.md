# Landing page Hurricane XCS (HTML + Tailwind CSS)

## Pasang
1. Salin `index.html` dan `assets/css/xcs.css` ke folder project (yang sudah berisi `assets/images` dan `assets/vidio`).
2. Gambar dan video memakai file yang sudah ada:
   - `assets/images/img_1_hurricane_xcs.webp`, `hero-xcs-unit.webp`, `img_3_hurricane_telah_disetujui.webp`
   - `assets/images/cover-fitra-eri.webp`, `cover-samuel.webp`, `cover-jejouw.webp`
   - `assets/images/img_9_tangkapan_layar_testimoni.webp` s/d `img_21_...`
   - `assets/vidio/HEMAT_BBM.webp`, `Ekspresi_Tenaga.webp`, `BATTERY_ANALIZER.webp`, `HONDA.mp4`, `wuling.mp4`
3. Deploy seperti biasa (Vercel). Tidak perlu build apa pun untuk tampil.

## Ubah tampilan
CSS sudah jadi di `assets/css/xcs.css`. Kalau Anda menambah atau mengganti class Tailwind di `index.html`, buat ulang CSS-nya:

```bash
npm install
npm run build:css      # sekali
npm run watch:css      # otomatis setiap file disimpan
```

Warna brand ada di `tailwind.config.js`:
- `midnight` #070B14 latar utama
- `navy` #0D1630 permukaan kartu
- `canta` #FFA45C tombol CTA (cantaloupe orange)
- `volt` #3DA9FF highlight teknis (electric blue)
- `warn` #FF6B57 harga naik
