// 默认
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入自动路由插件
import Pages from 'vite-plugin-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      // 这里可以配置插件选项，例如路由的目录等,这里我指定了遍历的文件夹是src/view目录
      dirs: [{ dir: 'src/views', baseRoute: '' }],
    }), // 插件挂载
  ],
})
