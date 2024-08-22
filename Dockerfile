FROM node:20-alpine
COPY . .
RUN npm install
CMD ["npm", "run", "start:dev"]
EXPOSE 4444
