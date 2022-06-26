const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 输入文件
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      // js,ts,tsx 配置
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      // css 配置
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // sass 配置
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                // 多协程
                fiber: require('fibers'),
              },
            },
          },
        ],
      },
      // 图片
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // 字体
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  // 'info' : 'none' | 'error' | 'warn' | 'info' | 'log' | 'verbose'
  // warn：只显示错误及警告，
  infrastructureLogging: {
    level: 'warn',
  },
  stats: {
    assets: false, // 是否显示资产的信息
    modulesSpace: 0, // 打包模块的信息最大条数
    logging: 'warn', // 只显示警告和错误
    loggingTrace: true,
    // version: false, // 是否显示版本信息
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
};
