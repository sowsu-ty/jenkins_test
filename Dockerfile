FROM node:18-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-alpine
ENV NODE_ENV production
USER node
# WORKDIR /user/src/app
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
# CMD yarn run start:prod
