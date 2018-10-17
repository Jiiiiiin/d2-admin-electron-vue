# d2-admin-electron-vue

基于[nklayman/vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)构建的[d2-admin](https://github.com/d2-projects/d2-admin)桌面版demo

![](https://ws1.sinaimg.cn/large/006tNbRwgy1fwa44w5ylgj318g0xct9s.jpg)

# 配置

+ 需要在`.env`配置文件中注意下面这个配置

```bash
# 标识是否允许于Electron环境（注意开发环境可以设置为false，但是如需build必须设置为true）
VUE_APP_RUN_IN_ELECTRON=true
```

# 测试

```cmd
# 运行
npm run serve:electron
# 打包
npm run build:electron
```


# 详细参考

+ 关于Vue CLI Plugin Electron Builder

[Vue CLI Plugin Electron Builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/guide/#installation)

+ 关于d2-admin

[![Build Status](https://www.travis-ci.org/d2-projects/d2-admin-start-kit.svg?branch=master)](https://www.travis-ci.org/d2-projects/d2-admin-start-kit)

[D2Admin](https://github.com/d2-projects/d2-admin) 简化版起始模板，删除所有完整版中的示例代码，保留所有核心功能。

[码云镜像](https://gitee.com/fairyever/d2-admin-start-kit)

# 更新

+ [feat: 添加**VUE_APP_RUN_IN_ELECTRON**环境变量配置](https://github.com/Jiiiiiin/d2-admin-electron-vue/commit/48150286d2e9509887db6b03021a3ca244cbba8c)
