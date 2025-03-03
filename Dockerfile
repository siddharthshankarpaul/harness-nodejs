# Use an official Node.js runtime as the base image.
FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
