# Dockerfile
FROM node:16.15.1-alpine3.16

ENV NODE_ENV=development

# create destination directory
RUN mkdir -p /usr/src/ids-client
WORKDIR /usr/src/ids-client

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/ids-client/
COPY package.json package-lock.json /usr/src/ids-client/

RUN npm install

# build necessary, even if nostatic files are needed,
# since it builds the server as well
RUN npm run build

# expose port 3000 on the container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# set app port
ENV NUXT_PORT=3000

# start the app
CMD [ "npm", "run", "dev" ]