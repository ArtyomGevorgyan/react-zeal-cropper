import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm'
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'], // Ensure these extensions are resolved
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',   // Exclude node_modules from transpiling
      presets: [
        '@babel/preset-env',       // To transpile modern JavaScript
        '@babel/preset-react',     // To transpile JSX syntax
      ],
      babelHelpers: 'bundled',     // Required for Rollup
    }),
  ],
  external: ['react', 'react-dom']
};