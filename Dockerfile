FROM ianwalter/puppeteer:latest as build
WORKDIR /app
ADD . /app
RUN npm install
CMD npm run wdio