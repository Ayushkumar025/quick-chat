import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
  
// })

export default {
  base: '/your-base-path/',
  plugins: [react()],
}

