FROM node:20

WORKDIR /app/auth

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "start"]