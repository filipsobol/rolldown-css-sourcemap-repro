import { defineConfig } from 'rolldown';

export default defineConfig( {
  input: 'src/index.js',
  output: {
    file: 'dist/rolldown.js',
    format: 'es',
    sourcemap: true,
    assetFileNames: '[name][extname]'
  }
} );
