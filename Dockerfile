# ---- base stage -------------------------------------------------
FROM node:20-slim AS base
WORKDIR /usr/src/app
ENV NODE_ENV=development

COPY frontend/package.json frontend/package-lock.json* ./
RUN npm ci

# ---- dev stage --------------------------------------------------
FROM base AS dev
ENV PORT=3000
COPY frontend ./
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0", "--port", "3000"]

# ---- prod stage -------------------------------------------------
FROM base AS prod
ENV NODE_ENV=production
COPY frontend ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]