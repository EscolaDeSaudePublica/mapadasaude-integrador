FROM node:14 as base

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
