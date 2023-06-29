# Build the project using the node debian docker image

FROM docker.io/library/node:18 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run lint && npm run build

# Use the google distroless image as runtime

FROM gcr.io/distroless/nodejs18-debian11 AS runtime

WORKDIR /app

COPY --from=build /usr/src/app/dist /app
COPY --from=build /usr/src/app/node_modules /node_modules

# Expose port 3000
EXPOSE 3000

CMD [ "/app/src/main.js" ]
