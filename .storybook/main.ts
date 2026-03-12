// .storybook/main.ts
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    // NOTE: addon-styling is not compatible with Storybook 10.x
  ],
  framework: '@storybook/angular',

  // Storybook 10 + Angular builder sometimes ends up applying only sass-loader
  // (missing css-loader/style-loader). This rule forces the full chain.
  webpackFinal: async (config) => {
    config.module = config.module || { rules: [] };
    config.module.rules = config.module.rules || [];

    // Remove any existing SCSS rules to avoid double-processing.
    config.module.rules = config.module.rules.filter((rule: any) => {
      const test = rule?.test?.toString?.() || '';
      return !test.includes('scss');
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: { sourceMap: true },
        },
        {
          loader: require.resolve('resolve-url-loader'),
          options: { sourceMap: true },
        },
        {
          loader: require.resolve('sass-loader'),
          options: { sourceMap: true },
        },
      ],
    });

    return config;
  },
};

export default config;