// vite.config.ts
import { defineConfig } from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+vite@4.2.2_@types+node@18.15.11_sass@1.62.0/node_modules/vite/dist/node/index.js";
import Unocss from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+unocss@0.51.5_postcss@8.4.23_rollup@3.21.3_vite@4.2.2/node_modules/unocss/dist/vite.mjs";
import react from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react@3.1.0_vite@4.2.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-dts@2.3.0_@types+node@18.15.11_rollup@3.21.3_vite@4.2.2/node_modules/vite-plugin-dts/dist/index.mjs";

// scripts/build.config.ts
import peerDepsExternal from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+rollup-plugin-peer-deps-external@2.2.4_rollup@3.21.3/node_modules/rollup-plugin-peer-deps-external/dist/rollup-plugin-peer-deps-external.js";
import commonjs from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+@rollup+plugin-commonjs@24.1.0_rollup@3.21.3/node_modules/@rollup/plugin-commonjs/dist/es/index.js";
import resolve from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+@rollup+plugin-node-resolve@15.0.2_rollup@3.21.3/node_modules/@rollup/plugin-node-resolve/dist/es/index.js";
import json from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+@rollup+plugin-json@6.0.0_rollup@3.21.3/node_modules/@rollup/plugin-json/dist/es/index.js";
function BuildPlugins() {
  return [peerDepsExternal(), commonjs(), resolve(), json()];
}
function BuildLib() {
  return {
    entry: "packages/components/index.ts",
    formats: ["es", "umd", "iife"],
    name: "KylinUI",
    fileName: (format) => `index.${format}.js`
  };
}
function rollupOptions() {
  return {
    external: ["react", "react-dom"],
    output: {
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    }
  };
}

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [
    react(),
    Unocss({
      configFile: "./uno.config.ts"
    }),
    ...BuildPlugins(),
    dts({
      outputDir: "./dist/types",
      insertTypesEntry: false,
      // 插入TS 入口
      copyDtsFiles: true
      // 是否将源码里的 .d.ts 文件复制到 outputDir
    })
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: "esbuild",
    lib: {
      ...BuildLib()
    },
    rollupOptions: {
      ...rollupOptions()
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9idWlsZC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBMaWJyYXJ5T3B0aW9ucywgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcblxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5cbmltcG9ydCB7XG4gIEJ1aWxkTGliLFxuICBCdWlsZFBsdWdpbnMsXG4gIHJvbGx1cE9wdGlvbnMsXG59IGZyb20gJy4vc2NyaXB0cy9idWlsZC5jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIFVub2Nzcyh7XG4gICAgICBjb25maWdGaWxlOiAnLi91bm8uY29uZmlnLnRzJyxcbiAgICB9KSxcbiAgICAuLi5CdWlsZFBsdWdpbnMoKSxcbiAgICBkdHMoe1xuICAgICAgb3V0cHV0RGlyOiAnLi9kaXN0L3R5cGVzJyxcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IGZhbHNlLCAvLyBcdTYzRDJcdTUxNjVUUyBcdTUxNjVcdTUzRTNcbiAgICAgIGNvcHlEdHNGaWxlczogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1QzA2XHU2RTkwXHU3ODAxXHU5MUNDXHU3Njg0IC5kLnRzIFx1NjU4N1x1NEVGNlx1NTkwRFx1NTIzNlx1NTIzMCBvdXRwdXREaXJcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgbWluaWZ5OiAnZXNidWlsZCcsXG4gICAgbGliOiB7XG4gICAgICAuLi5CdWlsZExpYigpLFxuICAgIH0gYXMgTGlicmFyeU9wdGlvbnMsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLi4ucm9sbHVwT3B0aW9ucygpLFxuICAgIH0sXG4gIH0sXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3NjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvc2NyaXB0cy9idWlsZC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9zY3JpcHRzL2J1aWxkLmNvbmZpZy50c1wiO2ltcG9ydCBwZWVyRGVwc0V4dGVybmFsIGZyb20gJ3JvbGx1cC1wbHVnaW4tcGVlci1kZXBzLWV4dGVybmFsJ1xuaW1wb3J0IGNvbW1vbmpzIGZyb20gJ0Byb2xsdXAvcGx1Z2luLWNvbW1vbmpzJ1xuaW1wb3J0IHJlc29sdmUgZnJvbSAnQHJvbGx1cC9wbHVnaW4tbm9kZS1yZXNvbHZlJ1xuaW1wb3J0IGpzb24gZnJvbSAnQHJvbGx1cC9wbHVnaW4tanNvbidcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1aWxkUGx1Z2lucygpIHtcbiAgcmV0dXJuIFtwZWVyRGVwc0V4dGVybmFsKCksIGNvbW1vbmpzKCksIHJlc29sdmUoKSwganNvbigpXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnVpbGRMaWIoKSB7XG4gIHJldHVybiB7XG4gICAgZW50cnk6ICdwYWNrYWdlcy9jb21wb25lbnRzL2luZGV4LnRzJyxcbiAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCcsICdpaWZlJ10sXG4gICAgbmFtZTogJ0t5bGluVUknLFxuICAgIGZpbGVOYW1lOiBmb3JtYXQgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvbGx1cE9wdGlvbnMoKSB7XG4gIHJldHVybiB7XG4gICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgb3V0cHV0OiB7XG4gICAgICBnbG9iYWxzOiB7XG4gICAgICAgIHJlYWN0OiAnUmVhY3QnLFxuICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UixTQUF5QixvQkFBb0I7QUFFclUsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUVsQixPQUFPLFNBQVM7OztBQ0xrUyxPQUFPLHNCQUFzQjtBQUMvVSxPQUFPLGNBQWM7QUFDckIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sVUFBVTtBQUVWLFNBQVMsZUFBZTtBQUM3QixTQUFPLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDM0Q7QUFFTyxTQUFTLFdBQVc7QUFDekIsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsU0FBUyxDQUFDLE1BQU0sT0FBTyxNQUFNO0FBQUEsSUFDN0IsTUFBTTtBQUFBLElBQ04sVUFBVSxZQUFVLFNBQVM7QUFBQSxFQUMvQjtBQUNGO0FBRU8sU0FBUyxnQkFBZ0I7QUFDOUIsU0FBTztBQUFBLElBQ0wsVUFBVSxDQUFDLFNBQVMsV0FBVztBQUFBLElBQy9CLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FEZkEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLElBQ0QsR0FBRyxhQUFhO0FBQUEsSUFDaEIsSUFBSTtBQUFBLE1BQ0YsV0FBVztBQUFBLE1BQ1gsa0JBQWtCO0FBQUE7QUFBQSxNQUNsQixjQUFjO0FBQUE7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsR0FBRyxTQUFTO0FBQUEsSUFDZDtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsR0FBRyxjQUFjO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
