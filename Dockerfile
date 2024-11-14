FROM node:20-slim

ENV PNPM_HOME="/pnpm"

ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

COPY . .

RUN pnpm --filter @repo/scripts generate:components:codes && pnpm --filter website install && pnpm --filter website run build 

EXPOSE 3000

CMD ["pnpm", "--filter", "website", "start"]