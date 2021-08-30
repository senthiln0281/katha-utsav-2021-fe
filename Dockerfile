FROM openjdk:11 as builder
COPY . /home/app
WORKDIR /home/app


RUN apt install -y curl \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt install -y nodejs g++ gcc make python \
    && curl -L https://www.npmjs.com/install.sh | sh \
    && npm install \
    && npm rebuild node-sass

RUN npm run build

FROM node:14.17.5-alpine
COPY --from=builder /home/app/dist /home/app/dist
COPY --from=builder ["/home/app/src/server", "/home/app/package.json", "/home/app/"]
WORKDIR /home/app
RUN npm install --production
ENTRYPOINT node server.js
EXPOSE 80
