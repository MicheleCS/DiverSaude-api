FROM node:16.13.1

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package*.json ./
RUN npm install

COPY dist ./dist
COPY .env.production ./.env


EXPOSE 3000
CMD ["npm", "run", "start:prod"]