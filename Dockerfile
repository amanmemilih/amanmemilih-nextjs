# Stage 1: Builder
FROM node:20-alpine3.20 AS builder

WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./
COPY tailwind.config.js postcss.config.js ./

# Install dependencies (including dev)
RUN npm ci --include=dev

# Copy source code
COPY . .

# Build the application (generates .next/standalone)
RUN npm run build

# Stage 2: Production
FROM node:20-alpine3.20

WORKDIR /app

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
# Copy static assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]