
FROM node:22-alpine3.21

WORKDIR /app

COPY . .

RUN npm install

# CMD ["tail", "-f", "/dev/null"]
RUN npm run build
CMD ["npm", "start"]