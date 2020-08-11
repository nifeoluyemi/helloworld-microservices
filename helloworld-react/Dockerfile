FROM node:13.12.0-alpine

WORKDIR /helloworld-react

ENV PATH /helloworld-react/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent

EXPOSE 3000

COPY . .

CMD ["npm", "start" ]