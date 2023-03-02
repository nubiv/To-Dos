# Build Client Phase
FROM node:19.6.0-alpine as client-builder
WORKDIR /app
COPY ./client/ ./client/ 
RUN cd client && npm install && npm run build

# Build Server Phase
FROM node:19.6.0-alpine AS server-builder
WORKDIR /app
COPY ./server/ ./server/
RUN cd server && npm install -ci && npm run build

# Run Phase
FROM node:19.6.0-alpine
WORKDIR /app
COPY ./server/package*.json ./
RUN npm install --only=production
COPY --from=client-builder /app/client/dist/to-do-list/ ./views/
COPY --from=server-builder /app/server/dist/ ./dist
CMD [ "node", "./dist/src/index.js" ]