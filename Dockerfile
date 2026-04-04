# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app

# Install build dependencies for Prisma/Bcrypt
RUN apk add --no-cache python3 make g++

COPY package.json yarn.lock* ./
COPY prisma ./prisma/

# Install dependencies using yarn and generate Prisma client
RUN yarn install --frozen-lockfile
RUN npx prisma generate

COPY . .
RUN yarn build

# Stage 2: Runtime
FROM node:22-alpine AS runtime
WORKDIR /app

# Define production environment
ENV NODE_ENV production

# Copy required files from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
COPY --from=build /app/prisma ./prisma/

# Expose the API port
EXPOSE 3000

# Run the project
CMD ["node", "dist/main"]
