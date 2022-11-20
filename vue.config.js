const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

// Generate pages object
const pagesObj = {};

const chromeName = ["popup", "options", "newtab"];

chromeName.forEach(name => {
  pagesObj[name] = {
    entry: `src/${name}/index.js`,
    template: `src/${name}/index.html`,
    filename: `${name}.html`
  };
});

const plugins = process.env.NODE_ENV === "production"
    ? [
        {
          from: path.resolve("src/manifest.production.json"),
          to: `${path.resolve("dist")}/manifest.json`
        }
      ]
    : [
        {
          from: path.resolve("src/manifest.development.json"),
          to: `${path.resolve("dist")}/manifest.json`
        }
      ];

// module.exports = {
//   pages: pagesObj,
//   configureWebpack: {
//     plugins: [CopyWebpackPlugin(plugins)]
//   },
// };

module.exports = {
  publicPath: './',
  indexPath: 'index.html',
  runtimeCompiler: true,
};