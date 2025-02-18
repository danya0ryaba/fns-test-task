import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgrPlugin({
    include: '**/*.svg',
    svgrOptions: {
      exportType: 'default',
    },
  })],
  base: '/fns-test-task/',
})
