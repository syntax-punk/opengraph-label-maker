import babel from "@rollup/plugin-babel";

const config = {
  input: "src/label.js",
  output: [
    {
      file: "label.js",
      format: "cjs"
    }
  ],
  plugins: [babel()]
}

export default config;