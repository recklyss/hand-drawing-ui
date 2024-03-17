import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: [ 'src' ],
      exclude: [ '**/*.stories.tsx', '**/*.spec.tsx' ],
    }),
  ],
  build: {
    lib: {
      name: 'hand_drawing_ui',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: [ 'es', 'umd' ]
    },
    rollupOptions: {
      external: [ ...Object.keys(packageJson.peerDependencies) ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    }
  }
})
