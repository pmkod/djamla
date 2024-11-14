FROM node:20-slim

ENV PNPM_HOME="/pnpm"

ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

COPY . .

RUN cd apps/website

RUN pnpm install

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "--filter", "website", "start"]