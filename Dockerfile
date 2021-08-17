FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN yarn install

CMD ["yarn", "start"]
