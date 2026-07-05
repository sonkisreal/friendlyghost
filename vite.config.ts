import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // hoặc @vitejs/plugin-react tùy dự án của bạn

export default defineConfig({
  plugins: [react()],
  base: '/friendlyghost/', // <-- BẮT BUỘC PHẢI CÓ DÒNG NÀY (Có 2 dấu gạch chéo)
})
