/**
 *
 */

import XiaohongshuImage from "@/public/projects/01-xiaohongshu-extension.png";
import MustDoImage from "@/public/projects/02-mustdo.top.png";

export const data = {
  personal: {
    name: "Joyful Lee",
    desc: [
      "I am front-end developer, currently learning to do full-stack development and trying to become an Indie Hacker 👨‍💻",
      "I love snowboarding 🏂, surfing 🏄🏻, surfskating 🛹, riding motorcycles 🏍, lifting 🏋🏻, and so much more, super into sports",
      "Also love reading 📚, history, novels, self-growth, and other genres",
      "Welecome to contact me in many ways ~",
    ],
    links: {
      email: "lidaze1020@gmail.com",
      twitter: "https://x.com/joyful_ze",
      github: "https://github.com/lidaze",
      xiaohongshu1: "https://www.xiaohongshu.com/user/profile/5515620aa46e96326581f0e6",
      xiaohongshu2: "https://www.xiaohongshu.com/user/profile/614f43620000000002018078",
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
      image: MustDoImage,
      imageAlt: "mustdo.top",
    },
    {
      title: "小红书Chrome插件",
      description: "在浏览博主首页的时候同步开",
      link: "https://chromewebstore.google.com/detail/%E5%90%8C%E6%AD%A5%E5%BC%80%E5%90%AF%E5%8D%9A%E4%B8%BB%E9%A6%96%E9%A1%B5-%E5%B0%8F%E7%BA%A2%E4%B9%A6/jajeijpokcdhaamakmfkoibkoaadnomj",
      types: ["Chrome Extension"],
      category: ["Tools"],
      startDate: new Date("2024-06"),
      image: XiaohongshuImage,
      imageAlt: "小红书 Chrome 插件",
    },
  ],
} as const;
