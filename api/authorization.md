# 認証

各 API の認証方法は以下の通りです。

## Rai Chat の認証

認証は、ヘッダーに以下の内容を追加することで行います。

```json
{ "Authorization": "Bearer YOUR_API_TOKEN" }
```

## Stripe の認証

認証には、Firebase の ID トークンが必要です。ID トークンは普通、以下の方法で取得できますが、Rai Chat では取得することができません。

```js
await getAuth().currentUser.getIdToken();
```

今後、API を展開するときには、API 専用のトークンを用意します。今は、Dev Tools の ネットワークから確認してください。

## 認証のつけ方

ヘッダーに Authorization をつけてください

```json
{ "Authorization": "Auth Token" }
```
