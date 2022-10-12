import babel from "@rollup/plugin-babel";
import resolve, {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import replace from "@rollup/plugin-replace";


const config = {
  input: "src/label.js",
  output: [
    {
      file: "label.js",
      format: "iife",
    }
  ],
  plugins: [
    resolve({ browser: true }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react'],
      babelHelpers: 'bundled'
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    globals(),
    builtins()
  ]
};

export default config;