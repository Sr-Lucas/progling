#!/bin/bash

npx prisma generate

exec "$@"