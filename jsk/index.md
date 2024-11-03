# クイック スタート

このページでは、Discord.jsk を Discord.js にインストールする方法を説明します。

### Discord.jsk のパッケージをインストールする

::: code-group

```sh [npm]
$ npm add @uplc/discord.jsk
```

```sh [pnpm]
$ pnpm add @uplc/discord.jsk
```

```sh [yarn]
$ yarn add @uplc/discord.jsk
```

```sh [bun]
$ bun add @uplc/discord.jsk
```

:::

### Discord.jsk を discord.js に追加する

これは、サンプルのコードです。このコードは変更する必要があります。

::: warning

\*\*重要: Discord.jsk の使用には Message Content Intent が必要です。

\*\*この方法を使用するには、``@uplc/discord.jsk@develop``をインストールする必要があります。   

:::

```js
// https://discordjs.guide/creating-your-bot/main-file.html
// 必要な Discord.jsk クラスをインポートする
const { Events, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

// 必要な Discord.jsk クラスをインポートする
const djskClient = require("@uplc/discord.jsk");

// Client インスタンスを作成
// 重要! Message Content Intent をコードでも有効にする必要があります
const client = new djskClient(
  {
    intents: [
      GatewayIntentBits.MessageContent,
      /* サーバーでの必要に必須 */
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
    ],
  },
  {
    encoding: "UTF-8" /* 日本語環境ではShift-JISを推奨 */,
    useableUserId: ["0", "1"] /* 誰が Discord.jsk を使えるか */,
  }
);

// クライアントが準備完了したら、このコードを実行します（1回のみ）。
// TypeScript開発者にとって、`client: Client<boolean>` と `readyClient: Client<true>` の区別は重要です。
// これにより、一部のプロパティが null 非許容になります。
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);
```