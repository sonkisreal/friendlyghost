import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // hoặc vue, tùy framework bạn dùng

export default defineConfig({
  plugins: [react()],
  base: '/friendlyghost/', // <-- THÊM DÒNG NÀY (Nhớ có 2 dấu gạch chéo)
})
