# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.15.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

WORKDIR /app

ENV NODE_ENV="production"

FROM base as build

RUN apt-get update -qq && \
    apt-get install -y build-essential pkg-config python-is-python3

COPY . .

RUN yarn install --frozen-lockfile --production=false && \
    yarn run build && \
    yarn install --production=true

 RUN npm run tsc

FROM base

COPY --from=build /app /app

EXPOSE 3000
CMD [ "yarn", "run", "start" , "migrati:runon"]

