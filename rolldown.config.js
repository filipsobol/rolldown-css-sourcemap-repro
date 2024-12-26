import { defineConfig } from 'rolldown';

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
          bundler: 'Rolldown',
          dir,
          file,
          bundles: Object.keys( bundle ),
        } );
      },
    },
  ],
} );
