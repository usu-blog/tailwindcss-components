const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(ts|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config: any) => {
    config.module.rules.push({
      test: /\.css$/,
      loaders: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [require('tailwindcss')],
        },
      },
    })
    return config
  },
}
