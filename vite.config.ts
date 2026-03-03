import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/class-manager-web/',
  plugins: [react()],
}))
