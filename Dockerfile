FROM node:18

WORKDIR /app

Copy package.json ./
Run npm install

Copy . .

EXPOSE 3000
CMD ["npm", "run", "dev"]