FROM node:20-alpine
RUN npm install
WORKDIR /usr/app
COPY package*.json ./
COPY . .
CMD ["npm", "run", "start:dev"]
EXPOSE 4444
