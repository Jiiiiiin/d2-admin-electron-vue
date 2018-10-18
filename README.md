# d2-admin-electron-vue

基于[nklayman/vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)构建的[d2-admin](https://github.com/d2-projects/d2-admin)桌面版 demo

此种模式是将前端项目构建之后打包到左面应用中，故如需要进行代码更新（bug修复），需要自行在界面判断版本号，和服务端进行比对之后提示用户下载新的客户端。这个逻辑可以类比移动端的应用升级流程。

![](https://ws1.sinaimg.cn/large/006tNbRwgy1fwa44w5ylgj318g0xct9s.jpg)

# 测试

```cmd
# 运行
npm run serve:electron
# 打包
npm run build:electron
```

# 详细参考

- 关于 Vue CLI Plugin Electron Builder

  [Vue CLI Plugin Electron Builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/#installation)

- 关于 d2-admin

  [![Build Status](https://www.travis-ci.org/d2-projects/d2-admin-start-kit.svg?branch=master)](https://www.travis-ci.org/d2-projects/d2-admin-start-kit)

  [D2Admin](https://github.com/d2-projects/d2-admin) 简化版起始模板，删除所有完整版中的示例代码，保留所有核心功能。

  [码云镜像](https://gitee.com/fairyever/d2-admin-start-kit)
