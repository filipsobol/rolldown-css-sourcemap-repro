import { defineConfig } from 'rollup';

export default defineConfig( {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    {
      name: 'Plugin',
      writeBundle ( { dir, file }, bundle ) {
        console.log( {
          bundler: 'Rollup',
          dir,
          file,
          bundles: Object.keys( bundle ),
        } );
      },
    },
  ],
} );
