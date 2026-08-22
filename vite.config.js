import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

// https://vitejs.dev
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true, // すべてのホストを許可してブロックを解除します
  }
})
