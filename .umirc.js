export default {
  ssr: false,
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  treeShaking: true,
  plugins: [
    [
      'umi-plugin-react', {
        antd: true,
        dva: {
          immer: true,
        },
        dynamicImport: {
          loadingComponent: './components/Loading/index',
          webpackChunkName: true,
          level: 3,
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
      }
    ],
  ],
  targets: {
    ie: 11,
  },
}
