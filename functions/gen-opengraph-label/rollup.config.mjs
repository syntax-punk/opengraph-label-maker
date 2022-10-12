import babel from "@rollup/plugin-babel";
import resolve, {nodeResolve} from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import replace from "@rollup/plugin-replace";

const extensions = ['.js', '.ts', '.tsx'];

const config = {
  input: "src/label.js",
  output: [
    {
      file: "label.js",
      format: "iife",
    }
  ],
  plugins: [
    resolve({ extensions }),
    commonjs({ include: /node_modules/ }),
    babel({
      extensions,
      exclude: /node_modules/,
      babelrc: false,
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: [
        'react-require',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-proposal-object-rest-spread', {
          useBuiltIns: true,
        }],
        ['@babel/plugin-transform-runtime', {
          corejs: 3,
          regenerator: true,
          useESModules: false,
        }],
      ],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    globals(),
    builtins()
  ]
};

export default config;