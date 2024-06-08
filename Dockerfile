FROM  node:20-alpine


WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY .. ..

EXPOSE 5521

CMD [ "npm","run","dev"]