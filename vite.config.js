import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
    plugins: [react()],
    // Quan trọng: Đường dẫn tương đối để chạy được trên ESP32
    base: './',
    build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 1000, // Tắt cảnh báo file lớn
    }
})