# 型 (Type)

型 (例: `<MessageContent>`) についての解説

## 認証

Firebase / API の認証トークン

### FirebaseAuthToken

ベースの型は string で、Firebase の認証トークン ([認証について](/api/authorization)) を指定します。

## Rai Chat

Rai Chat で使用される型

### MessageContent

ベースの型は string で、メッセージを送信/返信する内容です。

### MessageId

ベースの型は string (数字)で、返信先のメッセージの ID を指定します。

## Stripe

Stripe で使用される型

### PlanType / PeriodType

ベースの型はどちらとも string で、プランと期間を指定します。

```json
// PlanType
["premium", "premiumPlus", "pro"]

//PeriodType
["monthly", "yearly"]
```

### StripeSessionId

ベースの型は string で、Stripe のセッション ID (UpLauncher の製品のみ) を指定します。

### PlanState / PlanStatus

ベースの型は string で、Stripe のプランステータスです。

```json
// PlanState
["active", "not_active"]

// PlanStatus
["active", "trialing"] // Stripeだとこれ以上返すよ！！！！
```
