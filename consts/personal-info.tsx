/**
 *
 */

export const data = {
  personal: {
    name: "Joyful Lee",
    description: "Hi, I'm a Joyful and am a developer, I love buiding things... ",
    links: {
      github: "https://github.com/lidaze",
      twitter: "https://x.com/joyful_ze",
    },
  },
  projects: [
    {
      title: "MustDo",
      description: "manange and show your bucket list in a simple and direct way",
      link: "https://www.mustdo.top/",
      types: ["Website", "iOS App"],
      category: ["Tools"],
      startDate: new Date("2024-06"),
    },
    {
      title: "小红书Chrome插件",
      description: "在浏览博主首页的时候同步开",
      link: "https://chromewebstore.google.com/detail/%E5%90%8C%E6%AD%A5%E5%BC%80%E5%90%AF%E5%8D%9A%E4%B8%BB%E9%A6%96%E9%A1%B5-%E5%B0%8F%E7%BA%A2%E4%B9%A6/jajeijpokcdhaamakmfkoibkoaadnomj",
      types: ["Chrome Extension"],
      category: ["Tools"],
      startDate: new Date("2024-06"),
    },
  ],
} as const;
