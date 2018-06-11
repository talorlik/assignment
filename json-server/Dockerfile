FROM node:9.8.0-alpine

ADD . /usr/src/app

WORKDIR /usr/src/app

#RUN npm init -y
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]