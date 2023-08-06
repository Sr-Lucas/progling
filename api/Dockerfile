FROM node

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get update && apt-get install -y wget \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY tsconfig*.json ./
COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

RUN npm -g install @nestjs/cli

COPY . .

EXPOSE 3000

CMD [ "pnpm", "start:dev" ]