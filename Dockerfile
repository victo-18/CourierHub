FROM node:lts-alpine
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
EXPOSE 30080
CMD [ "npm","run","dev" ]