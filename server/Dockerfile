FROM node:alpine

WORKDIR /app

RUN npm install
RUN npm install faker
RUN npm install mysql

COPY ./ ./

CMD ["node", "app.js"]