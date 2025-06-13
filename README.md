# Next.js + Docker Development Template

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)

再利用可能な Next.js + Docker 開発環境テンプレートです。モダンな Web アプリケーション開発を素早く始められます。

## ✨ 特徴

- 🚀 **Next.js 15.3.3** with App Router
- 🐳 **Docker** multi-stage builds (dev/prod)
- 🎨 **Tailwind CSS v3** for styling
- 📝 **TypeScript** support
- 🔥 **Hot reload** in development
- 📱 **Responsive** design ready
- 🌍 **日本語対応**

## 🚀 クイックスタート

### 1. このテンプレートを使用

```bash
# GitHub の "Use this template" ボタンを使用するか
git clone git@github.com:dev-muhus/nextjs-docker-template.git my-new-project
cd my-new-project
```

### 2. Docker で開発開始

```bash
# Docker デーモンを起動
# 開発サーバー起動
docker compose up --build

# ブラウザで http://localhost:5173 にアクセス
```

### 3. 通常の Next.js 開発

```bash
cd frontend
npm install
npm run dev

# http://localhost:3000 でアクセス
```

## 📁 プロジェクト構造

```
your-project/
├── frontend/                 # Next.js アプリケーション
│   ├── app/                 # App Router (Next.js 13+)
│   │   ├── layout.tsx       # ルートレイアウト
│   │   ├── page.tsx         # ホームページ
│   │   └── globals.css      # グローバルスタイル
│   ├── public/              # 静的ファイル
│   ├── package.json         # 依存関係
│   └── tailwind.config.js   # Tailwind CSS 設定
├── Dockerfile               # マルチステージビルド
├── docker-compose.yml       # 開発環境設定
├── .env                     # 環境変数
└── README.md               # このファイル
```

## 🛠️ 利用可能なコマンド

### Docker 環境

```bash
# 開発サーバー起動
docker compose up

# バックグラウンド起動
docker compose up -d

# リビルド
docker compose up --build

# 停止
docker compose down
```

### フロントエンド (frontend/ ディレクトリ内)

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# Lint
npm run lint
```

## ⚙️ 環境設定

### 環境変数

- **ルート `.env`**: Docker 設定
  ```env
  PORT=5173
  NEXT_PUBLIC_API_BASE=https://example.com/api
  ```

- **`frontend/.env.local`**: Next.js 環境変数
  ```env
  NEXT_PUBLIC_API_BASE=https://example.com/api
  ```

### ポート設定

- **Development**: `http://localhost:5173` (Docker)
- **Direct Next.js**: `http://localhost:3000`

## 📦 技術スタック

| 技術 | バージョン | 用途 |
|------|------------|------|
| **Next.js** | 15.3.3 | React フレームワーク |
| **React** | 19.0.0 | UI ライブラリ |
| **TypeScript** | 5+ | 型安全性 |
| **Tailwind CSS** | 3.4.0 | スタイリング |
| **Docker** | Latest | コンテナ化 |
| **Node.js** | 20 LTS | ランタイム |

## 🎨 カスタマイズ

### プロジェクト名とメタデータの変更

1. **docker-compose.yml**
   ```yaml
   services:
     web:
       container_name: your-project-name-web
   ```

2. **frontend/app/layout.tsx**
   ```tsx
   export const metadata: Metadata = {
     title: "Your Project Title",
     description: "Your project description",
   };
   ```

3. **frontend/package.json**
   ```json
   {
     "name": "your-project-name",
     "description": "Your project description"
   }
   ```

### Tailwind CSS テーマのカスタマイズ

`frontend/tailwind.config.js` でカラーパレットやフォントを変更：

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

## 🚢 デプロイ

### Vercel (推奨)

```bash
# Vercel CLI インストール
npm i -g vercel

# デプロイ
vercel --prod
```

### Docker プロダクション

```bash
# プロダクション用ビルド
docker build --target prod -t your-app .

# プロダクション実行
docker run -p 3000:3000 your-app
```

## 🤝 貢献

1. Fork このリポジトリ
2. Feature ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

## 📄 ライセンス

このプロジェクトは [MIT License](LICENSE) の下で公開されています。

## 🙏 クレジット

このテンプレートは [Claude Code](https://claude.ai/code) で生成されました。

---

**Happy Coding! 🚀**