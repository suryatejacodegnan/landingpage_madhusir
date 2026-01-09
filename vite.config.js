import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const VITE_PORT = parseInt(env.VITE_PORT || '5173');

  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: true,
      port: VITE_PORT,
      strictPort: true,
      cors: {
        origin: true,
        credentials: true,
      },
      allowedHosts: [
        'flight-generic-andreas-alternatives.trycloudflare.com', // Explicitly allow current tunnel
        '.trycloudflare.com',
        'localhost',
        '127.0.0.1',
        /^.*\.trycloudflare\.com$/,
      ],
      hmr: {
        overlay: false,
      },
      watch: {
        usePolling: true,
        interval: 1000,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.cache/**',
          '**/.vite/**',
        ],
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        treeshake: false,
      },
    },
  }
})
