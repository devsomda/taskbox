// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   staticDirs: ["../public"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/addon-interactions",
//   ],
//   framework: {
//     name: "@storybook/react-vite",
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
// export default config;


module.exports = {
  stories: ['../src/components/**/*.stories.js'],
   staticDirs: ['../public'],
   addons: [
     '@storybook/addon-links',
     '@storybook/addon-essentials',
     '@storybook/preset-create-react-app',
     '@storybook/addon-interactions',
   ],
   features: {
     postcss: false,
   },
   framework: '@storybook/react',
   core: {
     builder: 'webpack4',
   },
 };