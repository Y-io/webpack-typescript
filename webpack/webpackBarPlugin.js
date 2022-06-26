const WebpackBar = require('webpackbar');
const chalk = require('chalk');

const webpackBarPlugin = ({ env, port }) => {
  // 是否开发模式
  const isDev = env === 'dev';

  // 是否热更新状态
  let isWatch = false;

  return new WebpackBar({
    name: isDev ? 'Webpack' : 'Build',
    color: '#40ddb3', // 默认green，进度条颜色支持HEX
    // basic: false, // 默认true，启用一个简单的日志报告器
    // profile: false, // 默认false，启用探查器。
    reporter: {
      // 注册一个自定义记者数组
      start(context) {
        // console.log('在（重新）编译开始时调用');
        // 在（重新）编译开始时调用
        const { start, progress, message, details, request, hasErrors } =
          context;
      },
      change(context) {
        // console.log('在 watch 模式下文件更改时调用');
        isWatch = true;
        // 在 watch 模式下文件更改时调用
      },
      update(context) {
        // console.log('在每次进度更新后调用');
        // 在每次进度更新后调用
      },
      done(context) {
        // console.log('编译完成时调用');
        // 编译完成时调用
      },
      progress(context) {
        // console.log('构建进度更新时调用');
        // 构建进度更新时调用
      },
      allDone(context) {
        // console.log('当编译完成时调用');
        // 当编译完成时调用
      },
      beforeAllDone(context) {
        // console.log('当编译完成前调用');
        // 当编译完成前调用
      },
      afterAllDone(context) {
        // console.log(context.state);
        if (isDev && !isWatch) {
          const loopback =
            '地址: ' +
            chalk
              .hex('#f5f7e9')
              .bgHex('#49aed6')
              .bold(`http://localhost:${port}/`);

          const networkIPv4 =
            'ipv4: ' +
            chalk
              .hex('#f5f7e9')
              .bgHex('#49aed6')
              .bold(`http://192.168.10.6:${port}/`);

          console.log(chalk.bold('项目正在运行: ') + '\n');
          console.log(loopback);
          console.log(networkIPv4);
          // console.log(chalk.red.bold('网络 (IPv6): http://[fe80::1]:8080/'));
          // 当编译完成后调用
        }
      },
    },
  });
};

module.exports = webpackBarPlugin;
