import type { StorybookConfig } from "@storybook/react-webpack5";
import { getCssLoader } from '../config/build/helpers/getCssLoader';
import path from "path";
import { DefinePlugin, RuleSetRule, webpack } from "webpack";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",

  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve?.extensions?.push('.tsx', '.ts', '.js')
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "..", "src")
    };

    config.module.rules.push(getCssLoader({ isDev: true }));

    config.plugins?.push(new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API_BASE_URL__: JSON.stringify('123'),
      __PROJECT__: JSON.stringify('storybook'),
    }),)

    config.optimization = { splitChunks: { chunks: 'async' } };
    config.output = { ...config.output, chunkFilename: '[chunkhash].chunk.js', };


    return config;


  },
};
export default config;
