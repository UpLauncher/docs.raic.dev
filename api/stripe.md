# Stripe API

サブスクリプションを購入するための Stripe API、購入と状態の取得など

## チェックアウトの作成

POST https://api.raic.dev/stripe/create-checkout-session

```json
{
  "FB_AUTH_TOKEN": "<FirebaseAuthToken>",
  "selectPlan": "<PlanType>",
  "selectPeriod": "<PeriodType>"
}

// レスポンス: 303 (チェックアウトへのリダイレクト)、400、401
```

## チェックアウトの成功

GET https://api.raic.dev/stripe/success

クエリ パラメーター: `?session_id=<StripeSessionId>` <br>
レスポンス: 303 (成功ページ / パネルの失敗ページ)

## チェックアウトのキャンセル

GET https://api.raic.dev/stripe/cancel

## プランのチェック

POST https://api.raic.dev/stripe/check_customer_plan

```json
// レスポンス: 200、400、404

// 200 response
{"status": "success", "state": "<PlanState>", "plan": "<PlanStatus>"}

// 4xx response
{"errorCode": "<ErrorCode>", "message": "<ErrorMessage>"}
```
