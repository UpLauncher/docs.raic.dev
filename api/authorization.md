# 認証

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
