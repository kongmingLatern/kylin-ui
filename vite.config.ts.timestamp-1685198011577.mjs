var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// packages/preset/base/color.ts
var presetColors;
var init_color = __esm({
  "packages/preset/base/color.ts"() {
    "use strict";
    presetColors = [
      "green",
      "red",
      "purple",
      "yellow",
      "blue",
      "indigo",
      "pink",
      "gray",
      "black",
      "white"
    ];
  }
});

// packages/preset/helpers/index.ts
function generatePaddingOrMargin(target) {
  return Array.from({ length: 10 }, (_, i) => i + 1).map(
    (item) => `${target}-${item}`
  );
}
var init_helpers = __esm({
  "packages/preset/helpers/index.ts"() {
    "use strict";
  }
});

// packages/preset/common/color.ts
var init_color2 = __esm({
  "packages/preset/common/color.ts"() {
    "use strict";
  }
});

// packages/preset/common/padding.ts
var init_padding = __esm({
  "packages/preset/common/padding.ts"() {
    "use strict";
  }
});

// packages/preset/common/margin.ts
var init_margin = __esm({
  "packages/preset/common/margin.ts"() {
    "use strict";
  }
});

// packages/preset/common/pseudo.ts
var init_pseudo = __esm({
  "packages/preset/common/pseudo.ts"() {
    "use strict";
  }
});

// packages/preset/common/index.ts
var init_common = __esm({
  "packages/preset/common/index.ts"() {
    "use strict";
    init_color2();
    init_padding();
    init_margin();
    init_pseudo();
  }
});

// packages/preset/base/index.ts
var colorModule, paddingOrMarginModule, presetSafelist;
var init_base = __esm({
  "packages/preset/base/index.ts"() {
    "use strict";
    init_color();
    init_helpers();
    init_common();
    colorModule = [
      ...presetColors.map((c) => `text-${c}-500`),
      ...presetColors.map((c) => `bg-${c}-500`),
      ...presetColors.map((c) => `hover:bg-${c}-700`)
    ];
    paddingOrMarginModule = generatePaddingOrMargin("p").concat(generatePaddingOrMargin("pl")).concat(generatePaddingOrMargin("px")).concat(generatePaddingOrMargin("py")).concat(generatePaddingOrMargin("pr")).concat(generatePaddingOrMargin("m")).concat(generatePaddingOrMargin("ml")).concat(generatePaddingOrMargin("mr")).concat(generatePaddingOrMargin("mx")).concat(generatePaddingOrMargin("my"));
    presetSafelist = [
      ...colorModule,
      ...paddingOrMarginModule
    ];
  }
});

// packages/preset/dynamicSafelist.ts
var dynamicSafelist_exports = {};
__export(dynamicSafelist_exports, {
  default: () => dynamicSafelist
});
function dynamicSafelist(config) {
  const { preset } = config;
  if (preset === "base") {
    return presetSafelist;
  } else if (preset === "medium") {
    return [];
  }
  return [];
}
var init_dynamicSafelist = __esm({
  "packages/preset/dynamicSafelist.ts"() {
    "use strict";
    init_base();
  }
});

// vite.config.ts
import { defineConfig } from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+vite@4.2.2_@types+node@18.15.11_sass@1.62.0/node_modules/vite/dist/node/index.js";

// scripts/config/index.ts
import path from "path";
import fs from "fs";
async function loadKylinConfig() {
  const configPath = path.resolve(
    process.cwd(),
    "kylin.config.js"
  );
  if (fs.existsSync(configPath)) {
    const configModule = await import(configPath);
    return configModule.default || configModule;
  }
  return {};
}

// scripts/rollup/build.config.ts
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
import {
  presetUno,
  presetIcons,
  presetAttributify
} from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+unocss@0.51.5_postcss@8.4.23_rollup@3.21.3_vite@4.2.2/node_modules/unocss/dist/index.mjs";
import Unocss from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+unocss@0.51.5_postcss@8.4.23_rollup@3.21.3_vite@4.2.2/node_modules/unocss/dist/vite.mjs";
import react from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-react@3.1.0_vite@4.2.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path2 from "path";
import dts from "file:///mnt/e/Project/OpenSource/Kylin-ui/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-dts@2.3.0_@types+node@18.15.11_rollup@3.21.3_vite@4.2.2/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = async () => {
  const kylinConfig = await loadKylinConfig();
  console.log("kylinConfig", kylinConfig);
  const dynamicSafelist2 = await Promise.resolve().then(() => (init_dynamicSafelist(), dynamicSafelist_exports));
  const safelist = dynamicSafelist2.default(kylinConfig);
  console.log("safeList");
  return await defineConfig({
    plugins: [
      react(),
      Unocss({
        presets: [
          presetUno(),
          presetIcons(),
          presetAttributify()
        ],
        safelist: [
          // FLAG: 根据 开发者传入的 preset 进行 safelist 的配置
          ...safelist
        ]
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
    },
    define: {
      "process.env.KYLIN_CONFIG": JSON.stringify(kylinConfig)
    },
    resolve: {
      alias: {
        "@": path2.resolve(path2.resolve(), "/src"),
        "@packages": path2.resolve(
          path2.resolve(),
          "/packages"
        ),
        "@components": path2.resolve(
          path2.resolve(),
          "/packages/components/"
        ),
        "@shared": path2.resolve(
          path2.resolve(),
          "/packages/shared/"
        ),
        "@hooks": path2.resolve(
          path2.resolve(),
          "/packages/hooks/"
        ),
        "@preset": path2.resolve(
          path2.resolve(),
          "/packages/preset/"
        ),
        "@icon": path2.resolve(
          path2.resolve(),
          "/packages/icon/"
        )
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvcHJlc2V0L2Jhc2UvY29sb3IudHMiLCAicGFja2FnZXMvcHJlc2V0L2hlbHBlcnMvaW5kZXgudHMiLCAicGFja2FnZXMvcHJlc2V0L2NvbW1vbi9jb2xvci50cyIsICJwYWNrYWdlcy9wcmVzZXQvY29tbW9uL3BhZGRpbmcudHMiLCAicGFja2FnZXMvcHJlc2V0L2NvbW1vbi9tYXJnaW4udHMiLCAicGFja2FnZXMvcHJlc2V0L2NvbW1vbi9wc2V1ZG8udHMiLCAicGFja2FnZXMvcHJlc2V0L2NvbW1vbi9pbmRleC50cyIsICJwYWNrYWdlcy9wcmVzZXQvYmFzZS9pbmRleC50cyIsICJwYWNrYWdlcy9wcmVzZXQvZHluYW1pY1NhZmVsaXN0LnRzIiwgInZpdGUuY29uZmlnLnRzIiwgInNjcmlwdHMvY29uZmlnL2luZGV4LnRzIiwgInNjcmlwdHMvcm9sbHVwL2J1aWxkLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0L2Jhc2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0L2Jhc2UvY29sb3IudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9wYWNrYWdlcy9wcmVzZXQvYmFzZS9jb2xvci50c1wiO2V4cG9ydCBjb25zdCBwcmVzZXRDb2xvcnMgPSBbXG4gICdncmVlbicsXG4gICdyZWQnLFxuICAncHVycGxlJyxcbiAgJ3llbGxvdycsXG4gICdibHVlJyxcbiAgJ2luZGlnbycsXG4gICdwaW5rJyxcbiAgJ2dyYXknLFxuICAnYmxhY2snLFxuICAnd2hpdGUnLFxuXVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9oZWxwZXJzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9oZWxwZXJzL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0L2hlbHBlcnMvaW5kZXgudHNcIjtleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQYWRkaW5nT3JNYXJnaW4odGFyZ2V0KTogc3RyaW5nW10ge1xuICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKF8sIGkpID0+IGkgKyAxKS5tYXAoXG4gICAgaXRlbSA9PiBgJHt0YXJnZXR9LSR7aXRlbX1gXG4gIClcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9wYWNrYWdlcy9wcmVzZXQvY29tbW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9jb21tb24vY29sb3IudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9wYWNrYWdlcy9wcmVzZXQvY29tbW9uL2NvbG9yLnRzXCI7ZXhwb3J0IGNvbnN0IHByZXNldENvbG9yT3B0aW9uOiBhbnkgPSBbJ2NvbG9yJywgJ2JnJ11cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29sb3JNb2R1bGUoeyBjb2xvciwgYmcgfSkge1xuICByZXR1cm4ge1xuICAgIFtgdGV4dC0ke2NvbG9yfS01MDBgXTogY29sb3IsXG4gICAgW2BiZy0ke2JnfS01MDBgXTogYmcsXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9wYWNrYWdlcy9wcmVzZXQvY29tbW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9jb21tb24vcGFkZGluZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9jb21tb24vcGFkZGluZy50c1wiO2V4cG9ydCBjb25zdCBwcmVzZXRQYWRkaW5nT3B0aW9uOiBhbnkgPSBbXG4gICdwJyxcbiAgJ3BsJyxcbiAgJ3B5JyxcbiAgJ3ByJyxcbiAgJ3B4Jyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUGFkZGluZ01vZHVsZSh7IHAsIHBsLCBweSwgcHIsIHB4IH0pIHtcbiAgcmV0dXJuIHtcbiAgICBbYHAtJHtwfWBdOiBwLFxuICAgIFtgcGwtJHtwbH1gXTogcGwsXG4gICAgW2Bwci0ke3ByfWBdOiBwcixcbiAgICBbYHB4LSR7cHh9YF06IHB4LFxuICAgIFtgcHktJHtweX1gXTogcHksXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9wYWNrYWdlcy9wcmVzZXQvY29tbW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9jb21tb24vbWFyZ2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0L2NvbW1vbi9tYXJnaW4udHNcIjtleHBvcnQgY29uc3QgcHJlc2V0TWFyZ2luT3B0aW9uOiBhbnkgPSBbXG4gICdtJyxcbiAgJ21sJyxcbiAgJ215JyxcbiAgJ21yJyxcbiAgJ214Jyxcbl1cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3Rlck1hcmdpbk1vZHVsZSh7IG0sIG1sLCBteSwgbXIsIG14IH0pIHtcbiAgcmV0dXJuIHtcbiAgICBbYG0tJHttfWBdOiBtLFxuICAgIFtgbWwtJHttbH1gXTogbWwsXG4gICAgW2Btci0ke21yfWBdOiBtcixcbiAgICBbYG14LSR7bXh9YF06IG14LFxuICAgIFtgbXktJHtteX1gXTogbXksXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9wYWNrYWdlcy9wcmVzZXQvY29tbW9uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9jb21tb24vcHNldWRvLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0L2NvbW1vbi9wc2V1ZG8udHNcIjtleHBvcnQgY29uc3QgcHJlc2V0UHNldWRvT3B0aW9uOiBhbnkgPSBbJ2hvdmVyJ11cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyUHNldWRvTW9kdWxlKHsgaG92ZXIgfSkge1xuICByZXR1cm4ge1xuICAgIFtgaG92ZXI6YmctJHtob3Zlcn0tNzAwYF06IGhvdmVyLFxuICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0L2NvbW1vblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9wYWNrYWdlcy9wcmVzZXQvY29tbW9uL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0L2NvbW1vbi9pbmRleC50c1wiO2V4cG9ydCAqIGZyb20gJy4vY29sb3InXG5leHBvcnQgKiBmcm9tICcuL3BhZGRpbmcnXG5leHBvcnQgKiBmcm9tICcuL21hcmdpbidcbmV4cG9ydCAqIGZyb20gJy4vcHNldWRvJ1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9iYXNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9iYXNlL2luZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0L2Jhc2UvaW5kZXgudHNcIjsvLyBGTEFHOiBOZWV0IHRvIG1vdmUgdG8gcGFja2FnZXMvcHJlc2V0XG5pbXBvcnQgeyBwcmVzZXRDb2xvcnMgfSBmcm9tICcuL2NvbG9yJ1xuaW1wb3J0IHsgZ2VuZXJhdGVQYWRkaW5nT3JNYXJnaW4gfSBmcm9tICcuLi9oZWxwZXJzJ1xuXG5jb25zdCBjb2xvck1vZHVsZSA9IFtcbiAgLi4ucHJlc2V0Q29sb3JzLm1hcChjID0+IGB0ZXh0LSR7Y30tNTAwYCksXG4gIC4uLnByZXNldENvbG9ycy5tYXAoYyA9PiBgYmctJHtjfS01MDBgKSxcbiAgLi4ucHJlc2V0Q29sb3JzLm1hcChjID0+IGBob3ZlcjpiZy0ke2N9LTcwMGApLFxuXVxuXG5jb25zdCBwYWRkaW5nT3JNYXJnaW5Nb2R1bGUgPSBnZW5lcmF0ZVBhZGRpbmdPck1hcmdpbigncCcpXG4gIC5jb25jYXQoZ2VuZXJhdGVQYWRkaW5nT3JNYXJnaW4oJ3BsJykpXG4gIC5jb25jYXQoZ2VuZXJhdGVQYWRkaW5nT3JNYXJnaW4oJ3B4JykpXG4gIC5jb25jYXQoZ2VuZXJhdGVQYWRkaW5nT3JNYXJnaW4oJ3B5JykpXG4gIC5jb25jYXQoZ2VuZXJhdGVQYWRkaW5nT3JNYXJnaW4oJ3ByJykpXG4gIC5jb25jYXQoZ2VuZXJhdGVQYWRkaW5nT3JNYXJnaW4oJ20nKSlcbiAgLmNvbmNhdChnZW5lcmF0ZVBhZGRpbmdPck1hcmdpbignbWwnKSlcbiAgLmNvbmNhdChnZW5lcmF0ZVBhZGRpbmdPck1hcmdpbignbXInKSlcbiAgLmNvbmNhdChnZW5lcmF0ZVBhZGRpbmdPck1hcmdpbignbXgnKSlcbiAgLmNvbmNhdChnZW5lcmF0ZVBhZGRpbmdPck1hcmdpbignbXknKSlcblxuZXhwb3J0ICogZnJvbSAnLi4vY29tbW9uJ1xuXG5leHBvcnQgY29uc3QgcHJlc2V0U2FmZWxpc3QgPSBbXG4gIC4uLmNvbG9yTW9kdWxlLFxuICAuLi5wYWRkaW5nT3JNYXJnaW5Nb2R1bGUsXG5dXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvcGFja2FnZXMvcHJlc2V0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3BhY2thZ2VzL3ByZXNldC9keW5hbWljU2FmZWxpc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9wYWNrYWdlcy9wcmVzZXQvZHluYW1pY1NhZmVsaXN0LnRzXCI7aW1wb3J0IHsgcHJlc2V0U2FmZWxpc3QgfSBmcm9tICcuL2Jhc2UnXG5pbXBvcnQgeyBVc2VyQ29uZmlnIH0gZnJvbSAnQGt5bGluLXVpL3NoYXJlZCdcblxuLy8gVE9ETzogXHU2M0QwXHU0RjlCXHU0RTA5XHU3OUNEXHU5ODg0XHU4QkJFXHU3Njg0XHU1MkE4XHU2MDAxXHU3NjdEXHU1NDBEXHU1MzU1XG4vLyBcdTVGMDBcdTUzRDFcdTgwMDVcdTUzRUZcdTRFRTVcdTVCRkNcdTUxNjVcdTUxNzZcdTRFMkRcdTRFMDBcdTc5Q0RcdUZGMENcdTRFNUZcdTUzRUZcdTRFRTVcdTgxRUFcdTVCOUFcdTRFNDlcbi8vIGltcG9ydCAnQGt5bGluL3ByZXNldC1zYWZlbGlzdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWNTYWZlbGlzdChcbiAgY29uZmlnOiBVc2VyQ29uZmlnXG4pIHtcbiAgY29uc3QgeyBwcmVzZXQgfSA9IGNvbmZpZyBhcyBVc2VyQ29uZmlnXG4gIGlmIChwcmVzZXQgPT09ICdiYXNlJykge1xuICAgIHJldHVybiBwcmVzZXRTYWZlbGlzdFxuICB9IGVsc2UgaWYgKHByZXNldCA9PT0gJ21lZGl1bScpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICByZXR1cm4gW11cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2UvUHJvamVjdC9PcGVuU291cmNlL0t5bGluLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgTGlicmFyeU9wdGlvbnMsIGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBsb2FkS3lsaW5Db25maWcgfSBmcm9tICcuL3NjcmlwdHMvY29uZmlnJ1xuXG5pbXBvcnQge1xuICBCdWlsZExpYixcbiAgQnVpbGRQbHVnaW5zLFxuICByb2xsdXBPcHRpb25zLFxufSBmcm9tICcuL3NjcmlwdHMvcm9sbHVwL2J1aWxkLmNvbmZpZydcblxuaW1wb3J0IHtcbiAgcHJlc2V0VW5vLFxuICBwcmVzZXRJY29ucyxcbiAgcHJlc2V0QXR0cmlidXRpZnksXG59IGZyb20gJ3Vub2NzcydcblxuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGt5bGluQ29uZmlnID0gYXdhaXQgbG9hZEt5bGluQ29uZmlnKClcbiAgY29uc29sZS5sb2coJ2t5bGluQ29uZmlnJywga3lsaW5Db25maWcpXG4gIGNvbnN0IGR5bmFtaWNTYWZlbGlzdCA9IGF3YWl0IGltcG9ydChcbiAgICAnLi9wYWNrYWdlcy9wcmVzZXQvZHluYW1pY1NhZmVsaXN0J1xuICApXG4gIGNvbnN0IHNhZmVsaXN0ID0gZHluYW1pY1NhZmVsaXN0LmRlZmF1bHQoa3lsaW5Db25maWcpXG4gIGNvbnNvbGUubG9nKCdzYWZlTGlzdCcpXG5cbiAgcmV0dXJuIGF3YWl0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIFVub2Nzcyh7XG4gICAgICAgIHByZXNldHM6IFtcbiAgICAgICAgICBwcmVzZXRVbm8oKSxcbiAgICAgICAgICBwcmVzZXRJY29ucygpLFxuICAgICAgICAgIHByZXNldEF0dHJpYnV0aWZ5KCksXG4gICAgICAgIF0sXG4gICAgICAgIHNhZmVsaXN0OiBbXG4gICAgICAgICAgLy8gRkxBRzogXHU2ODM5XHU2MzZFIFx1NUYwMFx1NTNEMVx1ODAwNVx1NEYyMFx1NTE2NVx1NzY4NCBwcmVzZXQgXHU4RkRCXHU4ODRDIHNhZmVsaXN0IFx1NzY4NFx1OTE0RFx1N0Y2RVxuICAgICAgICAgIC4uLnNhZmVsaXN0LFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICAuLi5CdWlsZFBsdWdpbnMoKSxcbiAgICAgIGR0cyh7XG4gICAgICAgIG91dHB1dERpcjogJy4vZGlzdC90eXBlcycsXG4gICAgICAgIGluc2VydFR5cGVzRW50cnk6IGZhbHNlLCAvLyBcdTYzRDJcdTUxNjVUUyBcdTUxNjVcdTUzRTNcbiAgICAgICAgY29weUR0c0ZpbGVzOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTVDMDZcdTZFOTBcdTc4MDFcdTkxQ0NcdTc2ODQgLmQudHMgXHU2NTg3XHU0RUY2XHU1OTBEXHU1MjM2XHU1MjMwIG91dHB1dERpclxuICAgICAgfSksXG4gICAgXSxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICAgIGxpYjoge1xuICAgICAgICAuLi5CdWlsZExpYigpLFxuICAgICAgfSBhcyBMaWJyYXJ5T3B0aW9ucyxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgLi4ucm9sbHVwT3B0aW9ucygpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmluZToge1xuICAgICAgJ3Byb2Nlc3MuZW52LktZTElOX0NPTkZJRyc6XG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGt5bGluQ29uZmlnKSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKHBhdGgucmVzb2x2ZSgpLCAnL3NyYycpLFxuICAgICAgICAnQHBhY2thZ2VzJzogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgIHBhdGgucmVzb2x2ZSgpLFxuICAgICAgICAgICcvcGFja2FnZXMnXG4gICAgICAgICksXG4gICAgICAgICdAY29tcG9uZW50cyc6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICBwYXRoLnJlc29sdmUoKSxcbiAgICAgICAgICAnL3BhY2thZ2VzL2NvbXBvbmVudHMvJ1xuICAgICAgICApLFxuICAgICAgICAnQHNoYXJlZCc6IHBhdGgucmVzb2x2ZShcbiAgICAgICAgICBwYXRoLnJlc29sdmUoKSxcbiAgICAgICAgICAnL3BhY2thZ2VzL3NoYXJlZC8nXG4gICAgICAgICksXG4gICAgICAgICdAaG9va3MnOiBwYXRoLnJlc29sdmUoXG4gICAgICAgICAgcGF0aC5yZXNvbHZlKCksXG4gICAgICAgICAgJy9wYWNrYWdlcy9ob29rcy8nXG4gICAgICAgICksXG4gICAgICAgICdAcHJlc2V0JzogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgIHBhdGgucmVzb2x2ZSgpLFxuICAgICAgICAgICcvcGFja2FnZXMvcHJlc2V0LydcbiAgICAgICAgKSxcbiAgICAgICAgJ0BpY29uJzogcGF0aC5yZXNvbHZlKFxuICAgICAgICAgIHBhdGgucmVzb2x2ZSgpLFxuICAgICAgICAgICcvcGFja2FnZXMvaWNvbi8nXG4gICAgICAgICksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvc2NyaXB0cy9jb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvc2NyaXB0cy9jb25maWcvaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9lL1Byb2plY3QvT3BlblNvdXJjZS9LeWxpbi11aS9zY3JpcHRzL2NvbmZpZy9pbmRleC50c1wiO2ltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkS3lsaW5Db25maWcoKSB7XG4gIGNvbnN0IGNvbmZpZ1BhdGggPSBwYXRoLnJlc29sdmUoXG4gICAgcHJvY2Vzcy5jd2QoKSxcbiAgICAna3lsaW4uY29uZmlnLmpzJ1xuICApXG5cbiAgaWYgKGZzLmV4aXN0c1N5bmMoY29uZmlnUGF0aCkpIHtcbiAgICBjb25zdCBjb25maWdNb2R1bGUgPSBhd2FpdCBpbXBvcnQoY29uZmlnUGF0aClcbiAgICByZXR1cm4gY29uZmlnTW9kdWxlLmRlZmF1bHQgfHwgY29uZmlnTW9kdWxlXG4gIH1cbiAgcmV0dXJuIHt9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvc2NyaXB0cy9yb2xsdXBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvc2NyaXB0cy9yb2xsdXAvYnVpbGQuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9tbnQvZS9Qcm9qZWN0L09wZW5Tb3VyY2UvS3lsaW4tdWkvc2NyaXB0cy9yb2xsdXAvYnVpbGQuY29uZmlnLnRzXCI7aW1wb3J0IHBlZXJEZXBzRXh0ZXJuYWwgZnJvbSAncm9sbHVwLXBsdWdpbi1wZWVyLWRlcHMtZXh0ZXJuYWwnXG5pbXBvcnQgY29tbW9uanMgZnJvbSAnQHJvbGx1cC9wbHVnaW4tY29tbW9uanMnXG5pbXBvcnQgcmVzb2x2ZSBmcm9tICdAcm9sbHVwL3BsdWdpbi1ub2RlLXJlc29sdmUnXG5pbXBvcnQganNvbiBmcm9tICdAcm9sbHVwL3BsdWdpbi1qc29uJ1xuXG5leHBvcnQgZnVuY3Rpb24gQnVpbGRQbHVnaW5zKCkge1xuICByZXR1cm4gW3BlZXJEZXBzRXh0ZXJuYWwoKSwgY29tbW9uanMoKSwgcmVzb2x2ZSgpLCBqc29uKCldXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdWlsZExpYigpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRyeTogJ3BhY2thZ2VzL2NvbXBvbmVudHMvaW5kZXgudHMnLFxuICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJywgJ2lpZmUnXSxcbiAgICBuYW1lOiAnS3lsaW5VSScsXG4gICAgZmlsZU5hbWU6IGZvcm1hdCA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYCxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm9sbHVwT3B0aW9ucygpIHtcbiAgcmV0dXJuIHtcbiAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztBQUFBLElB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Q04sNEJBQ0UsS0FBSyxVQUFVLFdBQVc7QUFBQSxJQUM5QjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBS0MsTUFBSyxRQUFRQSxNQUFLLFFBQVEsR0FBRyxNQUFNO0FBQUEsUUFDeEMsYUFBYUEsTUFBSztBQUFBLFVBQ2hCQSxNQUFLLFFBQVE7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLFFBQ0EsZUFBZUEsTUFBSztBQUFBLFVBQ2xCQSxNQUFLLFFBQVE7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLFFBQ0EsV0FBV0EsTUFBSztBQUFBLFVBQ2RBLE1BQUssUUFBUTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsUUFDQSxVQUFVQSxNQUFLO0FBQUEsVUFDYkEsTUFBSyxRQUFRO0FBQUEsVUFDYjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFdBQVdBLE1BQUs7QUFBQSxVQUNkQSxNQUFLLFFBQVE7QUFBQSxVQUNiO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBU0EsTUFBSztBQUFBLFVBQ1pBLE1BQUssUUFBUTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiaW5pdF9jb2xvciIsICJpbml0X2NvbG9yIiwgInBhdGgiLCAiZHluYW1pY1NhZmVsaXN0IiwgInBhdGgiXQp9Cg==
