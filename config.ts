export default {
  /** -------------------------------------------------以下必须修改----------------------------------------------------- */

  githubName: "shishuocool", // 必须修改，github账户名

  /** -------------------------------------------------以下可选修改----------------------------------------------------- */

  title: "石硕", // 网站标题
  nickName: "SHISHUO", // 昵称
  domain: "https://mmm.st", // rss域名
  SEO_title: " - shishuo blog", // 搜索引擎显示的标题
  SEO_keywords: "shishuo,shishuo's blog,石硕,石硕的博客", // keywords meta header
  MSClarityId: "", // Microsoft的Clarity统计，https://clarity.microsoft.com/
  CloudflareAnalyze: "", // cloudflare的统计，https://developers.cloudflare.com/analytics/web-analytics
  CommentRepoId: "R_kgDOP20zng", // 评论系统，参考 https://github.com/yunyuyuan/nuxt3-blog/wiki/2.3-%E8%AF%84%E8%AE%BA%E7%B3%BB%E7%BB%9F
  CommentDiscussionCategoryId: "DIC_kwDOP20zns4CwYO8", // 评论系统

  database: { // 参考 https://github.com/yunyuyuan/nuxt3-blog/wiki/2.4-%E6%B5%8F%E8%A7%88%E9%87%8F%E7%BB%9F%E8%AE%A1
    initialVisitors: 1, // 如果设置成10000，那么发一篇文章立马就有10000个浏览量！
    visitFromOwner: false // 网站拥有者访问时，是否增加浏览量
  },
  algoliaSearch: { // 参考 https://github.com/yunyuyuan/nuxt3-blog/wiki/2.5-%E5%85%A8%E7%AB%99%E6%90%9C%E7%B4%A2
    appId: "",
    searchKey: "",
    indexName: ""
  },
  themeColor: ["cyan", "sky", "teal", "emerald", "purple", "indigo", "fuchsia", "orange", "amber"], // 主题色，如果有多个颜色，则随机使用，参考 https://tailwindcss.com/docs/colors
  themeColorDark: "neutral", // 主题色(夜间模式)
  defaultLang: "zh", // default language, "zh" and "en" are supported currently
  about: [
    "让世界充满爱",
    
  ],

  /** -------------------------------------------------注意----------------------------------------------------- */

  githubRepo: "nuxt3-blog" // 需要与仓库名一致，如果fork时更改了仓库名，则这里也要改
};
