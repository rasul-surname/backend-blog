FROM node:18-alpine
RUN npm install
COPY package*.json ./
COPY . .
CMD ["npm", "run", "start:dev"]
EXPOSE 4444
