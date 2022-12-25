# 拉取node镜像来打包vue项目
FROM node:16 as build
WORKDIR /app
COPY package*.json ./
COPY vue.config.js ./
RUN npm install
COPY . /app
RUN npm run build

# 创建并运行Nginx托管服务器，并把打包好的文件复制粘贴到服务器文件夹中
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]