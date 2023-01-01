import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: "src",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        gate: resolve(__dirname, 'src/gate.html'),
        chat: resolve(__dirname, 'src/chat.html'),
      },
		},
    outDir: '../dist'
	}
})
