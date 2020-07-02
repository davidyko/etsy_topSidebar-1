FROM node:6.13.0

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --verbose

EXPOSE 3000

CMD [ "npm", "start" ]