######## Build Boilerplate for angular apps
FROM teracy/angular-cli:latest AS builder

ARG BUILD_ENV

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
WORKDIR /usr/src/app
RUN npm install
COPY . .
RUN npm run $BUILD_ENV

######## Boilerplate for all static web apps
FROM nginx:1.13.9-alpine

# These conf files must be maintained in a central location
ADD conf/server.conf /etc/nginx/conf.d/server.conf
ADD conf/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# This line can be the same for static websites that use the dist folder convention
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD nginx
