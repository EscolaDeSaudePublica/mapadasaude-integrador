FROM node:alpine

WORKDIR /usr/app

RUN npm install -g typescript

COPY package*.json ./

COPY . .

RUN yarn install

RUN yarn build

CMD ["npm", "start"]
