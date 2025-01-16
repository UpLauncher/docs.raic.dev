# API のドキュメント

基本的に、Stripe の API は内部で使用することのみが想定されています。Firebase の認証トークンが基本的に必要です。

Rai Chat の API は、パブリックな API として公開されています。(近日公開予定)

## Rai API のプランについて

> ※R=読み取り、W=書き込み

|                          | Rai API Basic   | Rai API Advanced | Rai API Pro             |
| ------------------------ | -------------- | ---------------- | ----------------------- |
| **お手紙の読み取り**     | ✅             | ✅               | ✅                      |
| **お手紙の書き込み**     | ✅             | ✅               | ✅                      |
| **URL を使用する**       | ✅             | ✅               | ✅                      |
| **プレミアム機能の使用** | ❌             | ✅               | ✅                      |
| **レートリミット**       | 50R/30s・10W/m | 100R/30s・20W/m  | 500R/30s・50W/m         |
| **プラン**               | 0 円           | プレミアムに付属 | プレミアムプラス に付属 |

\*1: お手紙の検索には追加料金が発生する場合があります。

### 購入リンク

- **Basic プラン**: [今すぐ始める](/chat/api/)
- **Advanced プラン**: [購入する](https://chat.raic.dev/account/subscriptions)
- **Pro プラン**: [購入する](https://chat.raic.dev/account/subscriptions)

## 開始する

1. API キーをパネルから発行してください (https://chat.raic.dev/account/credentials)
2. [Rai Chat API](/chat/api/) などをご利用ください！
