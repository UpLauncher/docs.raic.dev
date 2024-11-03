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
      { text: "API", link: "/api/" },
    ],

    sidebar: [
      {
        text: "API",
        items: [
          { text: "API について", link: "/api/" },
          { text: "認証", link: "/api/authorization" },
          { text: "型 (Type)", link: "/api/type" },
          {
            text: "エンドポイント",
            items: [
              { text: "チャット", link: "/api/chat" },
              { text: "Stripe", link: "/api/stripe" },
            ],
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
