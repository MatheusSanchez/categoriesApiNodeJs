FROM node

WORKDIR /usr/app

COPY package.json ./categoriesApiNodeJs

COPY . . 

RUN yarn

EXPOSE 3333

CMD ["yarn", "dev:server"]