# Rai Chat API

Rai Chat の API、メッセージ送信と返信

## ユーザーの読み取り

POST https://api.raic.dev/v1/chat/users/read

### リクエストの内容

```json
{
  "user_id": "<UserId>"
}
```

### レスポンス

```json
{
  "id": "aokOO190912OKAspsldap10P012l0",
  "username": "UpLauncher Automated",
  "handle": "uplauncher_bot",
  "verified": true,
  "badge": "staff", // verified, gov, staff
  "banned": false
}
```

## メッセージの読み取り

POST https://api.raic.dev/v1/chat/read

### リクエストの内容

```json
{
  "messageId": "<MessageId>"
}
```

### レスポンス

```json
{
  "status": "success",
  "id": "1711354545489-dh1J8AmiGAP4bg70Fawe1Lhl3adw1",
  "message": "Hello World!",
  "timestamp": 1711354545489,
  "is_api": true,
  "likes": 0,
  "user_id": "aokOO190912OKAspsldap10P012l0"
}
```

## メッセージの送信

POST https://api.raic.dev/v1/chat/send

### リクエストの内容

```json
{
  "message": "<MessageContent>"
}
```

### レスポンス

```json
{
  "status": "success",
  "id": "1711354545489-dh1J8AmiGAP4bg70Fawe1Lhl3adw1"
}
```

## メッセージの返信

POST https://api.raic.dev/v1/chat/reply

### リクエストの内容

```json
{
  "message": "<MessageContent>",
  "replyTo": "<MessageId>"
}
```

### レスポンス

```json
{
  "status": "success",
  "id": "1711354545489-dh1J8AmiGAP4bg70Fawe1Lhl3adw1"
}
```
