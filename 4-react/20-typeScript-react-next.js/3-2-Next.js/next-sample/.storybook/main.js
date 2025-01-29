import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation'
  },
  webpackFinal: async (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      })
    );
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    config.optimization = { splitChunks: { chunks: "async" } };
    config.output = { ...config.output, chunkFilename: "[name].chunk.js" };
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
    );
    return config;
  },
};

export default config;
