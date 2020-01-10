FROM node:12

COPY . /opt/app

WORKDIR /opt/app

RUN npm install -g nodemon
RUN npm install

CMD npm run watch

