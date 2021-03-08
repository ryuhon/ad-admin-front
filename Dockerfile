FROM node:14.16.0-alpine  as builder
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app



ENV VUE_APP_BASE_URL=https://ad-admin-api.devbox.app/api/
ENV NODE_PATH=src/


RUN npm install --silent
RUN npm run build



# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/default.conf /etc/nginx/conf.d

RUN apk add tzdata
RUN cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime
RUN echo "Asia/Seoul" >  /etc/timezone
RUN apk del tzdata


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]