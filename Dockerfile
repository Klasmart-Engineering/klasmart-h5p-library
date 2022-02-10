FROM node:16-alpine

RUN apk --no-cache add curl

USER node
WORKDIR /home/node/h5p-nodejs-library
COPY --chown=node:node node_modules node_modules
COPY --chown=node:node dist ./
COPY --chown=node:node h5p h5p
RUN curl 'https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem' -o './rds-combined-ca-bundle.pem'
RUN sha256sum rds-combined-ca-bundle.pem

EXPOSE 8080
CMD [ "node", "src/express.js" ]
