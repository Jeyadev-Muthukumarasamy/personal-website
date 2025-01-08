import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://personalwebsite-backend-kwgay7xyj.vercel.app', // Your backend URL
        changeOrigin: true,  // For virtual hosted sites
        secure: false,       // For self-signed certificates
      },
    },
    {
     plugins: [react()],
  },
});
