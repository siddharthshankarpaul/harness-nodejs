# Use an official Node.js runtime as the base image.
FROM node:16

WORKDIR /app

COPY src/* ./src/
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80
CMD [ "node", "src/index.js" ]
