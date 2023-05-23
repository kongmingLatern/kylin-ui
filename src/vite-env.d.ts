/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    KYLIN_CONFIG: {
      preset: import('../packages/shared').presetMode
    }
  }
}
