import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://personalwebsite-backend-ju73fwig5.vercel.app', // Your backend URL
        changeOrigin: true,  // For virtual hosted sites
        secure: false,       // For self-signed certificates
      },
    },
  },
});
