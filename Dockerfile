FROM node:15.14.0-alpine3.13

WORKDIR /home/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["node","index.js"]
