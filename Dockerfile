FROM node:10.15.3

RUN mkdir -p /var/log/application/starwarservice

COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force \
    && npm install nodemon@latest knex -g \
    && npm i && mkdir /usr/src/app && cp -R ./node_modules ./usr/src/app

WORKDIR /usr/src/app

# Map a volume for the log files and add a volume to override the code
VOLUME ["/usr/src/app", "/var/log/application/starwarservice"]

# Copy entire file to docker
COPY . /usr/src/app

COPY ./bin/start_disposable.sh /usr/src/app/bin/start_disposable.sh
RUN chmod +x ./bin/start_disposable.sh /usr/src/app/bin/start_disposable.sh

EXPOSE 80
CMD ["/usr/src/app/bin/start_disposable.sh"]