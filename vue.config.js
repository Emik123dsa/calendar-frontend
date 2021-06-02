const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  configureWebpack: {
    entry: {
      mainCss: [path.join(__dirname, './src/assets/styles/_main.scss')],
      tailwindCss: [
        path.join(
          __dirname,
          './src/assets/styles/thirdparty/_tailwindcss.scss',
        ),
      ],
    },
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        configFile: path.join(__dirname, './stylelint.config.js'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: { loader: 'worker-loader' },
        },
        {
          test: /\.(sc|sa|c)ss$/,
          use: [
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  './src/assets/styles/_vars.scss',
                  './src/assets/styles/_colors.scss',
                ],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '~': path.join(__dirname, './'),
        '@': path.join(__dirname, './src/app'),
        '@assets': path.join(__dirname, './src/assets'),
        '@fonts': path.join(__dirname, './src/assets/fonts'),
        '@images': path.join(__dirname, './src/assets/images'),
        '@styles': path.join(__dirname, './src/assets/styles'),
        '@components': path.join(__dirname, './src/app/components'),
        '@routers': path.join(__dirname, './src/app/routers'),
        '@views': path.join(__dirname, './src/app/views'),
        '@providers': path.join(__dirname, './src/app/providers'),
        '@layouts': path.join(__dirname, './src/app/layouts'),
        '@plugins': path.join(__dirname, './src/app/plugins'),
      },
      modules: ['node_modules'],
      extensions: [
        '.js',
        '.ts',
        '.tsx',
        '.wasm',
        '.vue',
        '.scss',
        '.css',
        '.sass',
      ],
    },
  },
};
