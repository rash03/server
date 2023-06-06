FROM node:18.16.0-alpine

WORKDIR /app
COPY package.json .
COPY apiserver.js .
COPY apis ./apis
RUN npm install

# Build your application
#RUN npm run build

#FROM node:18.16.0-alpine

#WORKDIR /app
#COPY --from=builder /app .

EXPOSE 3000

CMD ["node", "apiserver.js"]
