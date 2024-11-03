# Rai Chat API

Rai Chat の API、メッセージ送信と返信

## チャットの送信

POST https://api.raic.dev/chat/send

```json
{ "content": "<MessageContent>" }
```

## チャットへの返信

POST https://api.raic.dev/chat/reply

```json
{ "content": "<MessageContent>", "replyTo": "<MessageId>" }
```
