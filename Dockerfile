FROM node:18-alpine
RUN npm install
COPY index.js .
CMD ["nodemon", "index.js"]
EXPOSE 4444
