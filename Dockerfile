FROM node:lts

USER node
RUN mkdir /home/node/h5p-nodejs-library
WORKDIR /home/node/h5p-nodejs-library
COPY --chown=node:node node_modules node_modules
COPY --chown=node:node tsconfig* ./
COPY --chown=node:node h5p h5p
COPY --chown=node:node src src
COPY --chown=node:node config.json config.json
COPY --chown=node:node package.json package.json
COPY --chown=node:node package-lock.json package-lock.json

ARG SSH_PRIVATE_KEY
RUN mkdir /home/node/.ssh/
RUN echo "${SSH_PRIVATE_KEY}" > /home/node/.ssh/id_rsa && \
      chmod 600 /home/node/.ssh/id_rsa && \
      npm install ts-node && \
      rm -f /home/node/.ssh/id_rsa

RUN rm -rf h5p/content
RUN rm -rf h5p/temporary-storage

RUN curl 'https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem' -o './rds-combined-ca-bundle.pem'
RUN sha256sum rds-combined-ca-bundle.pem

EXPOSE 8080
CMD [ "npm", "start" ]
