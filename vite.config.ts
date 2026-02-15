import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: リポジトリ名で公開する場合は base を設定
// 例: https://username.github.io/misa-media-kit/ → base: '/misa-media-kit/'
// ルートで公開する場合は base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
