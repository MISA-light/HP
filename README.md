# MISA Media Kit / LP

1ページのMedia Kit・営業LP（Vite + React + Tailwind）。GitHub Pages で公開想定。

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

## 公開前の準備

1. **Hero画像**  
   `public/images/hero.webp` を配置（1536×1920推奨・WebP）。

2. **問い合わせフォーム**  
   `src/data/constants.ts` の `CTA_FORM_URL` をGoogleフォームのURLに差し替え。

3. **GitHub Pages**  
   リポジトリ名で公開する場合、`vite.config.ts` の `base` を `'/リポジトリ名/'` に変更。

## 構成

- **セクション**: Hero / Strength / Services / Proof / Metrics / FAQ / Contact / Footer
- **データ**: `src/data/constants.ts` で数値・実績ブランド・FAQ・CTA URL を管理
- **デザイン**: くすみピンク・丸み・余白・モバイル優先
