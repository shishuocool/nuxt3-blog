<p align="center">
<img width="200px" src="public/favicon.png" />
</p>
<h1 align="center">💎Nuxt3-Blog</h1>


[![](https://img.shields.io/github/license/yunyuyuan/nuxt3-blog)](/LICENSE) ![](https://img.shields.io/badge/vue-v3-%234FC08D?logo=vue.js) ![](https://img.shields.io/badge/nuxt-v3-%2300DC82?logo=nuxt.js)

**🚀已通过[NitroJS](https://nitro.unjs.io/)多平台部署（NitroJS是Nuxt3的[官方引擎](https://nuxt.com/docs/guide/concepts/server-engine)）**
> Vercel:[https://blog.yunyuyuan.net](https://blog.yunyuyuan.net)
> 
> Cloudflare Page:[https://blog-cfpage.yunyuyuan.net](https://blog-cfpage.yunyuyuan.net)
> 
> Netlify:[https://blog-netlify.yunyuyuan.net](https://blog-netlify.yunyuyuan.net)
>
**🚀self hosted部署（参考[我的文章](https://blog.yunyuyuan.net/articles/8346)）**
> Drone:[https://blog-drone-cf.yunyuyuan.net](https://blog-drone-cf.yunyuyuan.net)，这里的`cf`意思是使用cloudflare做内网穿透

[English Readme](/README.md) | 中文说明

# 博客特性
* 💻 **5分钟完成搭建**。快速搭建，不用写一行代码。
* 🤝 **方便使用**。全能的后台管理界面，只需一个token，就可**在网页端更新配置，新增/修改/删除博客内容**，不用`notepad`，更不用`git push`。
* 📷 **集成图床**。集成smms图床和tinypng图片压缩，网页端一键上传博客图片。
* 🌐 **纯静态**。打包为纯静态网站，无需后端。
* 🔍 **SEO友好**。每个HTML页面都是已经渲染完毕的，搜索引擎可收录。
* 🔒 **可加密**。可以对任意单篇**文章/记录/文化**加密，也可以对某些内容单独加密，只有输入密码才可查看。
  * 🚪整篇加密:  
      <img height="300px" src="https://s2.loli.net/2023/03/09/6loknpQFATqSOMB.png"/>
  * 🚪部分加密:  
      <img height="300px" src="https://s2.loli.net/2023/03/09/9UQurkTGaOSY3j4.png"/>

# 教我搭建
<center>
<img width="600px" src="https://s2.loli.net/2024/03/10/ih2KsmBDISAWN3U.png"/>
</center>

1. Fork 这个项目。
2. 在 `config.ts` 中将 `githubName`更改为您当前的 Github 账户。如果您的存储库名称不是 **nuxt3-blog**，也请修改 `githubRepo`。
3. 在 [Nitro 支持的平台](https://nitro.unjs.io/deploy) 上部署。
4. 前往 [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)，选择 **repo** 范围，然后点击 `Generate`。
5. 前往 https://your-blog-domain/manage，输入您的 github 令牌。
6. 享受创作的乐趣。

#### 额外事项
* 若要使用浏览量统计功能，则需要[注册MongoDB账号](https://www.mongodb.com/cloud/atlas/register)，然后创建一个名为`nuxt3-blog`的database, 并设置Mongodb环境变量(参考`env.sample`)
* 若要使用评论功能，则需要为Github安装[giscus](https://github.com/apps/giscus)，并开启[discussion](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)，然后填写`config.ts`中的`CommentRepoId`和`CommentDiscussionCategoryId`  
  参考giscus.app，[填写](https://giscus.app/zh-CN#:~:text=%E4%BB%93%E5%BA%93%EF%BC%9A,%E8%BF%9E%E6%8E%A5%E5%88%B0%E6%AD%A4%E4%BB%93%E5%BA%93%E3%80%82) **你的仓库** 的地址后，复制`data-repo-id`和`data-category-id`，分别对应`CommentRepoId`和`CommentDiscussionCategoryId`，位置在[data-repo-id和data-category-id](https://giscus.app/zh-CN#:~:text=%E5%9C%A8%E4%BD%A0%E6%83%B3%E8%AE%A9%E8%AF%84%E8%AE%BA%E5%87%BA%E7%8E%B0%E7%9A%84%E4%BD%8D%E7%BD%AE%E6%B7%BB%E5%8A%A0%E4%BB%A5%E4%B8%8B%20%3Cscript%3E%20%E6%A0%87%E7%AD%BE%E3%80%82%E4%BD%86%E5%A6%82%E6%9E%9C%E5%B7%B2%E7%BB%8F%E5%AD%98%E5%9C%A8%E5%B8%A6%E6%9C%89%20giscus%20%E7%B1%BB%E7%9A%84%E5%85%83%E7%B4%A0%EF%BC%8C%E5%88%99%E8%AF%84%E8%AE%BA%E4%BC%9A%E8%A2%AB%E6%94%BE%E5%9C%A8%E9%82%A3%E9%87%8C%E3%80%82)

# 待开发
#### 特性
- [ ] 404页面
- [x] 在本地`npm run dev`下更新数据
- [x] 自动化测试
- [x] 纯静态网站生成(SSG)
- [ ] 插件系统
- [x] 支持serverless function上传图片
- [x] 数据库集成(浏览量统计)
- [ ] algolia全站搜索
- [x] 博客图片备份与迁移
- [x] 密码修改(目前仅支持在本地使用npm脚本修改)


#### 外观
- [x] 夜间模式
- [x] 国际化
- [ ] 多种布局主题(缺少UI设计)
- [x] 自定义主题色
##### 低优先级特性
- [ ] 不同加密页面可使用不同的密码
- [ ] 让monaco editor支持额外的markdown语法高亮
- [ ] 一键拉取上游github仓库更新 
- [ ] IV for AES encryption
- [x] 块级加密
- [x] SSR, 用于自建([参考](https://blog.yunyuyuan.net/articles/8346))
- [ ] 支持 cloudflare page,netlify 以及其他服务

# 项目结构
* `/assets`
  * `/image` vite引入的图片
  * `/style` 公共/功能样式
* `/components` vue组件，被nuxt自动加载
* `/composables` vue响应式，被nuxt自动加载
* `/e2e` e2e测试
* `/i18n` 国际化翻译文件
* `/layouts` nuxt布局文件
* `/middleware` nuxt路由守卫
* `/pages` 所有网页视图
* `/plugins` nuxt插件
* `/public`
  * `/e2e/rebuild` 用于e2e测试的假数据
  * `/rebuild` 所有博客数据
  * `/sticker` 所有表情图片
* `/scripts` Gulp执行的脚本
* `/server` api服务器(Nodejs)
* `/utils`
  * `/api` `/server`调用的函数.
  * `/common` javascript相关的功能代码(不依赖vue或nuxt)
  * `/hooks` 一些composable封装逻辑
  * `/nuxt` nuxt相关的功能代码
* `/vite-plugins` vite插件
* `/config.ts` 博客配置，必须修改

# Node脚本
```json5
"scripts": {
  "build": "nuxt build", // 编译为ssr
  "dev": "nuxt dev", //开发
  "dev-for-test": "cross-env NUXT_PORT=13000 VITESTING=\"true\" nuxt dev", //用于e2e测试
  "generate": "nuxt generate", // 弃用了
  "local:change-pwd": "gulp change-passwd", // 全局修改密码
  "local:generate-img-map": "gulp generate-image-map", // 收集全站图片，输出到img.json
  "local:download-img": "gulp download-image", // 读取img.json，下载所有图片到imgs/
  "local:substitute-img": "gulp substitute-image", // 读取img.json，替换为新的图片（运行此脚本前，请先修改img.json里的newUrl为需要替换的url）
  "test:unit": "vitest run --exclude ./e2e", // unit测试
  "test:e2e": "vitest run --dir ./e2e", // e2e测试
  "test:dev-and-e2e": "start-server-and-test dev-for-test http://localhost:13000 test:e2e", // 运行测试服务并开始e2e测试
  "eslint": "eslint --fix .", //执行eslint
  "preview": "nuxt preview", // 预览编译后的网站
  "prepare": "husky" // 安装husky
}
```

# 更新日志

[CHANGELOG.md](/CHANGELOG.md)

# 其他
* 技术解答/交流qq群：745105612
* 邮箱：me@yunyuyuan.net
* discord: https://discord.gg/HtSehSMYXa
