FROM amd64/node:14-alpine
RUN apk add --no-cache git


RUN mkdir -p /usr/src/app
ENV PORT 3001

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

# Production use node instead of root
# USER node

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

EXPOSE 3001
CMD [ "yarn", "start" ]