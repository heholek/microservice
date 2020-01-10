FROM node:12

COPY . /opt/app

WORKDIR /opt/app

RUN npm install
RUN npm install -g nodemon
CMD npm run watch