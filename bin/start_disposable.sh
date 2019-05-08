#!/usr/bin/env bash

mkdir -p /var/log/application && \
chmod -R 777 /var/log/application
export NODE_PATH=.
npm install

knex migrate:latest
npm start