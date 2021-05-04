FROM node:lts-alpine

RUN mkdir -p /home/node/api
RUN chown -R node:node /home/node/api

WORKDIR /home/node/api

RUN apk add --no-cache openssl
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3333

# CMD yarn migration & yarn start

CMD sh -c "dockerize -wait tcp://mysql:3306 -timeout 100s -wait-retry-interval 20s yarn start:dev"
