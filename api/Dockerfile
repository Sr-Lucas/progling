FROM node

WORKDIR /usr/src/app

USER root

# Copie os arquivos do projeto para o diretório de trabalho do usuário 'appuser'
COPY --chown=root:root tsconfig*.json ./
COPY --chown=root:root package*.json ./
COPY --chown=root:root .env.development ./.env
COPY --chown=root:root init.sh ./

# Conceda permissões de execução ao 'init.sh'
RUN chmod +x init.sh

RUN npm install --silent --force

RUN npm -g install @nestjs/cli

COPY --chown=root:root . .

EXPOSE 3000

# Inicie o aplicativo como o usuário 'appuser'
CMD [ "npm", "run", "start:dev" ]