FROM node

WORKDIR /app
ADD . /app
RUN yarn install
