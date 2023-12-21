FROM node:20-alpine

ENV PORT=3000

WORKDIR /app
COPY package*.json .

RUN npm install -g nodemon
RUN npm install

COPY . .
EXPOSE ${PORT}
CMD [ "npm", "start" ]