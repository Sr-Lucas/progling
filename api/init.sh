#!/bin/bash

npm install --silent --force
npx prisma generate

exec "$@"