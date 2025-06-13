# Next.js × Docker Compose 開発／動作環境構築手順書

本書は **「魔法の杖を用いた WebAR アプリケーション」** を例に、Next.js と Docker Compose を用いたローカル開発環境の構築から、Vercel 本番デプロイまでの手順をまとめたものです。  
ポート **3000** を避け、`.env` で管理し、`docker-compose.yml` に **`version:` 行を記載しない** ことが前提条件です。

---

## 1. 前提条件

| 項目 | 推奨値・備考 |
|------|--------------|
| OS | macOS 14 / Windows 11 (WSL2) / Linux |
| Docker | Docker Desktop v4.29+（Compose v2 同梱） |
| Node.js | 20.x (LTS) |
| パッケージマネージャ | npm 10.x / pnpm / yarn |
| CLI | `docker`, `docker compose`, `git`, `vercel` |

---

## 2. ディレクトリ構成（最小構成）

```text
your-app/
├─ .env             # 共通環境変数（PORT など）
├─ docker-compose.yml
├─ Dockerfile
└─ app/             # create‑next‑app 生成物
   ├─ next.config.js
   └─ …
```

---

## 3. リポジトリ作成 & Next.js 雛形

```bash
git init your-app && cd $_
npx create-next-app@latest app --ts --eslint --tailwind
```

---

## 4. `.env`／`.env.local` の作成

```dotenv
PORT=5173                    # 3000 禁止
NEXT_PUBLIC_API_BASE=https://example.com/api
```

`NEXT_PUBLIC_` で始まる変数はブラウザにも公開されます。

---

## 5. Dockerfile（マルチステージ構成）

```dockerfile
# ---- base stage -------------------------------------------------
FROM node:20-slim AS base
WORKDIR /usr/src/app
ENV NODE_ENV=development

COPY package.json package-lock.json* ./
RUN npm ci

# ---- dev stage --------------------------------------------------
FROM base AS dev
ENV PORT=${PORT:-5173}
CMD ["npm","run","dev","-w","app"]

# ---- prod stage -------------------------------------------------
FROM base AS prod
ENV NODE_ENV=production
COPY . .
RUN npm run build -w app
EXPOSE 3000
CMD ["npm","start","-w","app"]
```

---

## 6. `docker-compose.yml`（`version:` 行は書かない）

```yaml
services:
  web:
    build:
      context: .
      target: dev
      dockerfile: Dockerfile
    env_file: .env
    ports:
      - "${PORT}:5173"
    volumes:
      - ./app:/usr/src/app/app
    command: npm run dev -w app
```

---

## 7. コンテナ起動

```bash
docker compose up --build
```

ブラウザで `http://localhost:5173` にアクセスして動作を確認します。

---

## 8. VS Code Dev Container（任意）

`.devcontainer/devcontainer.json`

```json
{
  "name": "nextjs-webar",
  "dockerComposeFile": ["../docker-compose.yml"],
  "service": "web",
  "workspaceFolder": "/usr/src/app/app",
  "forwardPorts": [5173]
}
```

---

## 9. 本番デプロイ（Vercel）

1. **Vercel CLI** をインストール  
   ```bash
   npm i -g vercel
   ```
2. **デプロイ**  
   ```bash
   vercel --prod
   ```

`Dockerfile` をコミットしたままでも、Vercel Container Registry で自動ビルドされます。

---

## 10. トラブルシューティング

| 症状 | 原因 | 解決策 |
|------|------|--------|
| `EADDRINUSE 5173` | ポート競合 | `.env` の `PORT` を変更 |
| 変更が反映されない | volume 未設定 | `volumes:` を再確認 |
| `node-gyp` エラー | Python/Build Tools 不足 | base stage に `apt-get install -y python3 make g++` を追加 |
| Vercel 起動失敗 | ポート競合/環境変数不足 | Vercel で `PORT` を削除 |

---

## 11. 参考情報

- Next.js 公式 Docker デプロイガイド  
- Next.js 環境変数ガイド  
- Docker Compose Watch  
- Vercel Next.js デプロイガイド  

---

以上でローカル開発から本番デプロイまでの基本フローは完了です。必要に応じて DB や外部サービスを `services:` に追加して拡張してください。
