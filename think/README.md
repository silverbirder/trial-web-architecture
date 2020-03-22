[memo]

# 状態管理

各チームが管理する。
グローバル状態管理は、app-shell(team-page)が担当する。
状態のやり取りは、イベントフローでハンドリングする。(pub/sub. flux)
→ いや、グローバル状態をやめる。誰かが管理するようにする。

## team-page
pureなjsか、frameworkを使用するか。

イメージ: 
1. nginx + 静的コンテンツ + vanillaJS
2. node-ssi (nginx) + JS framework

# 段階的リリース
nginxのSSIで部分リリースをしたい。
各エンドポイントは、SSRを返すようにする。リッチなUIを提供したい場合は、
hydrationを駆使する。