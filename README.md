# Pure Front-End Blog
---

![](https://img.shields.io/github/license/yunyuyuan/nuxt3-blog) ![](https://img.shields.io/badge/vue-v3-%234FC08D?logo=vue.js) ![](https://img.shields.io/badge/nuxt-v3-%2300DC82?logo=nuxt.js)

> 🚀 [https://blog.halberd.cn](https://blog.halberd.cn)

### Quick Start
1. Fork本仓库，勿修改仓库名
2. 大体参考[旧版教程](https://blog.halberd.cn/articles/6562)
3. 需要更改vercel的编译参数，如下图：![](https://s1.ax1x.com/2022/06/03/XNXXvR.png)
4. 若使用评论功能，则需要安装[giscus](https://github.com/apps/giscus)，并开启[discussion](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository)，然后填写`config.ts`中的`CommentRepoId`和`CommentDiscussionCategoryId`(参考[giscus.app](https://giscus.app/zh-CN))

### Todo list
Feature
- [x] eslint,stylelint
- [x] error page
- [ ] different passwd(unnecessary)
- [x] localhost server for committing
- [ ] testing
- [ ] custom markdown syntax highlight on monaco editor 
- [x] full-static site generate(SSG)
- [ ] toggle plugin enabled,and implement conditional build
- [ ] get new feature by pull source branch with single action 
- [x] serverless function to upload image
- [ ] IV for AES encrypt
- [x] partial encrypt
- [ ] pagination

Appearance
- [x] global theme color
- [ ] i18n
- [ ] left-side layout
- [ ] dark mode