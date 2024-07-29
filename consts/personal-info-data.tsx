/**
 *
 */

import type { StaticImageData } from "next/image";
import XiaohongshuImage from "@/public/projects/01-xiaohongshu-extension.png";
import MustDoImage from "@/public/projects/02-mustdo.top.png";
import LidazeComImage from "@/public/projects/03-lidaze.com.png";

export type Project = {
  title: string;
  description: string;
  link: string;
  sourceCode?: string; // 源码
  types: string[];
  category: string[];
  startDate: Date;
  image: StaticImageData;
  imageAlt: string;
};

/**
 * 英文数据
 */
export const enData = {
  personal: {
    name: "Joyful Lee",
    desc: [
      "I am front-end developer, currently learning to do full-stack development and trying to become an Indie Hacker 👨‍💻",
      "I love snowboarding 🏂, surfing 🏄🏻, surfskating 🛹, riding motorcycles 🏍, lifting 🏋🏻, and so much more, super into sports",
      "Also love reading 📚, history, novels, self-growth, and other genres",
      "Welcome to communicate through the following ways~",
    ],
  },
  projects: [
    {
      title: "Home",
      description: "Home Page, showing my info and projects",
      link: "https://lidaze.com/",
      sourceCode: "https://github.com/lidaze/joyful-home",
      types: ["website"],
      category: ["home"],
      startDate: new Date("2024-07"),
      image: LidazeComImage,
      imageAlt: "lidaze.com",
    },
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
      title: "小红书 Chrome Extension",
      description: "Synchronously open the blogger's homepage - 小红书",
      link: "https://chromewebstore.google.com/detail/%E5%90%8C%E6%AD%A5%E5%BC%80%E5%90%AF%E5%8D%9A%E4%B8%BB%E9%A6%96%E9%A1%B5-%E5%B0%8F%E7%BA%A2%E4%B9%A6/jajeijpokcdhaamakmfkoibkoaadnomj",
      sourceCode: "https://github.com/lidaze/xhs-user-tab-extension",
      types: ["Chrome Extension"],
      category: ["Tools"],
      startDate: new Date("2024-06"),
      image: XiaohongshuImage,
      imageAlt: "小红书 Chrome Extension",
    },
  ],
};

/**
 * 中文数据
 */
export const zhData = {
  personal: {
    name: "大泽",
    desc: [
      "我是前端程序员，正在学习如何进行全栈开发，努力成为一名Indie Hacker 👨‍💻",
      "我喜欢单板滑雪 🏂，冲浪 🏄🏻， 路冲 🛹， 骑摩托车 🏍， 健身 🏋🏻 等等，超级喜欢运动",
      "也很喜欢读书 📚，历史，小说，个人成长，以及一些其他类型",
      "欢迎大家通过以下方式沟通交流~",
    ],
  },
  projects: [
    {
      title: "个人主页",
      description: "个人主页，展示个人信息及个人项目",
      link: "https://lidaze.com/",
      sourceCode: "https://github.com/lidaze/joyful-home",
      types: ["网站"],
      category: ["home"],
      startDate: new Date("2024-07"),
      image: LidazeComImage,
      imageAlt: "lidaze.com",
    },
    {
      title: "MustDo",
      description: "以一种简单和直接的方式，管理和展示您的人生清单 🪣",
      link: "https://www.mustdo.top/",
      types: ["网站", "iOS 应用"],
      category: ["工具"],
      startDate: new Date("2024-06"),
      image: MustDoImage,
      imageAlt: "mustdo.top",
    },
    {
      title: "小红书Chrome插件",
      description: "同步开启博主首页 - 小红书",
      link: "https://chromewebstore.google.com/detail/%E5%90%8C%E6%AD%A5%E5%BC%80%E5%90%AF%E5%8D%9A%E4%B8%BB%E9%A6%96%E9%A1%B5-%E5%B0%8F%E7%BA%A2%E4%B9%A6/jajeijpokcdhaamakmfkoibkoaadnomj",
      sourceCode: "https://github.com/lidaze/xhs-user-tab-extension",
      types: ["Chrome 插件"],
      category: ["工具"],
      startDate: new Date("2024-06"),
      image: XiaohongshuImage,
      imageAlt: "小红书 Chrome 插件",
    },
  ],
};

export const data = {
  en: enData,
  zh: zhData,
  common: {
    socialLinks: {
      email: "lidaze1020@gmail.com",
      twitter: "https://x.com/joyful_ze",
      github: "https://github.com/lidaze",
      xiaohongshu1: "https://www.xiaohongshu.com/user/profile/5515620aa46e96326581f0e6",
      xiaohongshu2: "https://www.xiaohongshu.com/user/profile/614f43620000000002018078",
    },
  },
} as const;
