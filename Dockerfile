FROM node:20-slim

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm install && pnpm format && pnpm --filter @repo/scripts generate:components:codes && pnpm --filter website run build 

EXPOSE 3000

CMD ["pnpm", "--filter", "website", "start"]