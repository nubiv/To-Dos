# Build Phase
FROM node:alpine as builder
WORKDIR /app
COPY ./package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "build"]

# Run Phase, the second FROM call will automatically terminate the first block
FROM nginx
COPY --from=builder /app/dist/to-do-list /usr/share/nginx/html