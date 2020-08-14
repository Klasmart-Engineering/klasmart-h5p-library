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

RUN npm install
RUN rm -rf h5p/content
RUN rm -rf h5p/temporary-storage

EXPOSE 8080
CMD [ "npm", "start" ]
