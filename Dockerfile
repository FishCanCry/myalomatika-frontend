FROM node:12.8.1-alpine AS builder
COPY . ./myalomatika-frontend
WORKDIR /myalomatika-frontend
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.19-alpine
COPY --from=builder /myalomatika-frontend/dist/myalomatika-frontend/ /usr/share/nginx/html