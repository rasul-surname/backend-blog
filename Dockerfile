FROM node:18-alpine
RUN npm install --omit=dev
COPY package*.json ./
COPY . .
CMD ["npm", "run", "start:dev"]
EXPOSE 4444
