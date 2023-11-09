# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/app
RUN mkdir -p src

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
RUN mkdir -p /temp/prod
WORKDIR /temp/dev
COPY package.json ./
RUN bun install
RUN cp -r ./node_modules /temp/prod
RUN cp ./package.json /temp/prod
RUN cp ./bun.lockb /temp/prod

## copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=install /temp/prod/bun.lockb node_modules
COPY src ./src
COPY package.json .
COPY tsconfig.json .

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "src/index.tsx" ]