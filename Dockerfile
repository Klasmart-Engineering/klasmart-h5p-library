FROM node:16-alpine

RUN apk --no-cache add curl

USER node
RUN mkdir /home/node/h5p-nodejs-library
WORKDIR /home/node/h5p-nodejs-library
COPY --chown=node:node node_modules node_modules
COPY --chown=node:node dist dist
COPY --chown=node:node h5p h5p
COPY --chown=node:node custom custom
COPY --chown=node:node config.json config.json

RUN curl 'https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem' -o './rds-combined-ca-bundle.pem'
RUN sha256sum rds-combined-ca-bundle.pem

EXPOSE 8080
CMD [ "node", "dist/express.js" ]
