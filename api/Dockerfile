FROM node

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get update && apt-get install -y wget \
    && wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

USER root

# Copie os arquivos do projeto para o diretório de trabalho do usuário 'appuser'
COPY --chown=root:root tsconfig*.json ./
COPY --chown=root:root package*.json ./
COPY --chown=root:root .env ./
COPY --chown=root:root init.sh ./

# Conceda permissões de execução ao 'init.sh'
RUN chmod +x init.sh

RUN npm install --silent --force

RUN npm -g install @nestjs/cli

COPY --chown=root:root . .

EXPOSE 3000

# Inicie o aplicativo como o usuário 'appuser'
CMD [ "npm", "start:dev" ]