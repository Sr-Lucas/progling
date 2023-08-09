#!/bin/bash

echo "Initializing API..."

pnpm install

npx prisma generate
npx prisma migrate dev
pnpm seed:dev