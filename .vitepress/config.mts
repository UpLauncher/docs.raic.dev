import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UpLauncher Docs",
  description: "UpLauncher の製品のドキュメンテーション",
  lang: "ja",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/favicon.ico",
    outline: { label: "このページの中", level: "deep" },

    search: {
      provider: "local",
      options: {
        translations: {
          modal: {
            noResultsText:
              "次の検索候補で検索をしましたが、見つかりませんでした:",
            footer: {
              navigateText: "で移動",
              selectText: "で選択",
              closeText: "で閉じる",
            },
          },
          button: { buttonText: "検索" },
        },
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "ホーム", link: "/" },
      {
        text: "Rai Chat",
        items: [
          { text: "Rai Chat", link: "/chat/" },
          { text: "Rai Chat API", link: "/chat/api/" },
        ],
      },
      { text: "Discord.jsk", link: "/jsk/" },
      { text: "AblityDyno", link: "/ablitydyno/" },
    ],

    sidebar: [
      {
        text: "Rai Chat",
        items: [
          { text: "Rai Chat とは", link: "/chat/" },
          { text: "クイック スタート", link: "/chat/quickstart" },
          { text: "利用規約", link: "/chat/tos" },
          {
            text: "アカウントに関するガイド",
            collapsed: false,
            items: [
              { text: "プロフィールのセットアップ", link: "/chat/guide/profile" },
              { text: "アカウントの保護", link: "/chat/guide/account-security" }
            ]
          },
          {
            text: "API",
            collapsed: true,
            items: [
              { text: "API について", link: "/chat/api/" },
              { text: "認証", link: "/chat/api/authorization" },
              { text: "型 (Type)", link: "/chat/api/type" },
              { text: "エンドポイント", link: "/chat/api/" }
            ]
          },
        ],
      },
      {
        text: "Discord.jsk",
        items: [{ text: "クイック スタート", link: "/jsk" }],
      },
      {
        text: "AblityDyno",
        items: [
          { text: "AblityDyno とは", link: "/ablitydyno" },
          { text: "クイック スタート", link: "/ablitydyno/getting-started" },
          { text: "コマンドリスト", link: "/ablitydyno/command-list" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
