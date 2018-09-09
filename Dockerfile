FROM node:6.9.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install express

RUN npm install mongodb

EXPOSE 3000

COPY sample.js .

CMD node sample.js
