FROM node:20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM node:20
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/dist/access-portal /app
CMD ["http-server", "-p", "4201"]
EXPOSE 4201
