FROM node:latest

USER node
RUN mkdir /home/node/h5p-nodejs-library
WORKDIR /home/node/h5p-nodejs-library
COPY --chown=node:node assets assets
COPY --chown=node:node scripts scripts
COPY --chown=node:node test/data/content-type-cache/real-content-types.json test/data/content-type-cache/real-content-types.json
COPY --chown=node:node tsconfig* ./
COPY --chown=node:node h5p h5p
COPY --chown=node:node examples examples
COPY --chown=node:node src src
COPY --chown=node:node package.json package.json
COPY --chown=node:node package-lock.json package-lock.json
COPY --chown=node:node node_modules node_modules

RUN npm install ts-node
RUN rm -rf h5p/content
RUN rm -rf h5p/temporary-storage

RUN curl 'https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem' -o './rds-combined-ca-bundle.pem'
RUN sha256sum rds-combined-ca-bundle.pem

EXPOSE 8080
CMD [ "npm", "start" ]
