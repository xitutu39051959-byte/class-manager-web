import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/class-manager-web/',   // ← 必须和仓库名完全一致
  plugins: [react()],
})
