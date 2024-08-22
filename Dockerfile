FROM node:18-alpine
RUN npm install --production
COPY package*.json ./
COPY . .
CMD ["npm", "run", "start:dev"]
EXPOSE 4444
