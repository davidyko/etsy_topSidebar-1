// const path = require('path');

// const SRC_DIR = path.join(__dirname, 'client/src');
// const DIST_DIR = path.join(__dirname, 'client/dist');

// module.exports = {
//   mode: 'development',
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         include: [SRC_DIR],
//         use: {
//           loader:'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env'],
//           }
//         }
//       },
//     ],
//   },
// };

const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const OUT_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        use: 'babel-loader',
      },
    ],
  },
};