# コマンドリスト

このページでは、AblityDyno のコマンドについてを説明します。

## 基本コマンド

誰でも使用できるコマンド(カテゴリー: 基本)です。

### /ping

BOT が応答している場合は Pong!と返します。BOT が動作しているかチェックするときに利用してください。

### /stats

BOT が参加しているサーバー数や、メンバー数、チャンネル数などを表示します。

### /user info (target:ユーザー)

指定したユーザー(指定していない場合は自分)のユーザー情報を表示します。アカウント作成日時などです。

**オプションの説明**

```markdown
- target: Discord のユーザー ID、ユーザー選択 | user
```

## マインクラフト

誰でも使用できるコマンド(カテゴリー: マインクラフト)です。

### /minecraft info target:文字

指定したユーザーの基本的な情報を表示します。

**オプションの説明**

```markdown
- target: マインクラフトのユーザー名(MCID)
```

### /minecraft images target:文字

指定したユーザーの体や頭の画像を表示します。

**オプションの説明**

```markdown
- target: マインクラフトのユーザー名(MCID) | string
```

### /minecraft cape target:文字

指定したユーザーのマントを表示します。(近日登場予定)

**オプションの説明**

```markdown
- target: マインクラフトのユーザー名(MCID) | string
```

## サーバー管理者向け

:::tip
Bot の Discord.js から Discord.py の書き直しによりコマンドが変更されました
:::

### /user ban target:ユーザー (reason:文字)

指定したユーザーをサーバーから BAN します。reason オプション(任意)で理由を追加できます。

**オプションの説明**

```markdown
- target: Discord のユーザー ID、ユーザー選択 | user
```

### /user kick target:ユーザー

指定したユーザーをサーバーからキックします。

**オプションの説明**

```markdown
- target: Discord のユーザー ID、ユーザー選択 | user
```

### /user pardon target:ユーザー

指定したユーザーの BAN を解除します。

**オプションの説明**

```markdown
- target: Discord のユーザー ID、ユーザー選択 | user
```
