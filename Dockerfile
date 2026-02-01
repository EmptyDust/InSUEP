FROM node:25-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm@latest
RUN pnpm install
COPY . .
RUN pnpm run build

FROM joseluisq/static-web-server:2
COPY --from=builder /app/docs/.vuepress/dist /public
EXPOSE 80
CMD ["--port", "80", "--page-fallback", "/public/index.html"]