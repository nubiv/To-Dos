FROM node:16
FROM node:lts-alpine
WORKDIR /app
# we are using a wildcard to ensure that both package.json and package-lock.json file into our work directory
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD [ "node", "dist/to-do-list/main.js" ]