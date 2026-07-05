import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Đảm bảo dùng plugin đúng phiên bản mới, không dùng loại lỗi cũ nữa

export default defineConfig({
  base: '/', // Giữ nguyên là '/' vì bạn đang dùng tên miền riêng (Custom Domain)
  plugins: [react()],
})
