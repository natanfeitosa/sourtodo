import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxInject: 'import * as soursop from "soursop"'
  }
})
