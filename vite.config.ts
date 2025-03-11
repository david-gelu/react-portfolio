import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import dotenv from 'dotenv';
import autoprefixer from 'autoprefixer';

dotenv.config(); // Load environment variables

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: "David Gelu - Web dev",
        name: "David Gelu - Web developer Portfolio",
        start_url: ".",
        orientation: "portrait-primary",
        display: "standalone",
        theme_color: "#2a2a2a",
        icons: [
          { src: '/logo192.png', sizes: '192x192', type: 'image/png' },
          { src: '/logo512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
  },
  server: {
    open: true,
    port: 3000,
    host: true,
  },
});