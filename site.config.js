const CONFIG = {
  // profile setting (required)
  profile: {
    name: "seminlog",
    image: "https://notion-avatar.vercel.app/api/svg/eyJmYWNlIjo5LCJub3NlIjoxLCJtb3V0aCI6MTEsImV5ZXMiOjIsImV5ZWJyb3dzIjowLCJnbGFzc2VzIjowLCJoYWlyIjoyNywiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "NLP, Prompt Engineering, AI ",
    bio: "",
    email: "semin021126@gmail.com",
    linkedin: "Semin Lim",
    github: "www.linkedin.com/in/semin-lim-a289362b6",
    instagram: "@juliejoy__",
  },
  projects: [
    {
      name: `semin-log`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "semin-log",
    description: "welcome to seminlog!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
