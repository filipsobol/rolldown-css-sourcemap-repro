import { defineConfig } from 'rollup';
import styles from 'rollup-plugin-styles';

export default defineConfig( {
  input: 'src/index.js',
  output: {
    file: 'dist/rollup.js',
    format: 'es',
    sourcemap: true,
    assetFileNames: '[name][extname]'
  },
  plugins: [
    styles( {
      mode: 'extract',
      sourceMap: true,
      minimize: true
    } )
  ]
} );
