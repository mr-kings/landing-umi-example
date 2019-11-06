
export default {
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  plugins: [
    [
      'umi-plugin-react', {
        antd: true,
        dva: {
          immer: true,
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
