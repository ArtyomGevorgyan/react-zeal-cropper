import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [
    postcss({
      extract: 'style.css',  // Specify the output CSS file
      plugins: [autoprefixer],    // Apply autoprefixer
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',  
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
      babelHelpers: 'bundled',
    }),
  ],
  external: ['react', 'react-dom']
};