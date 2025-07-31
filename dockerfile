# dockerfile使用指南
# 确保你有docker环境(包括可用的网络或镜像网站)
# 确保命令行工具在当前目录下(如果不想用命令行可以下载docker desktop)
# docker build -t insuep . 构建环境(这可能需要一段时间)
# docker images 查看创建的镜像(image)
# docker run -dp 8080:80 --name insuep_container insuep
# 上一句含义：将你创建的镜像跑在容器(container)里，你可以理解为创建了一个实例，该容器被我们命名为 insuep_container
# 同时端口被映射，你可以在浏览器里的localhost:8080看到我们运行好的项目
# docker stop/start/docker/rm insuep_container
# 停止/再次开启/删除容器(注 此处删除并不会把镜像删除只要镜像存在依旧可重新创建容器)


# 构建阶段
FROM node:22-alpine AS builder

# 启用corepack并安装指定pnpm版本
RUN corepack enable && \
    npm install -g corepack@v0.29.4 && \
    corepack install --global pnpm@8.15.0

# 设置工作目录
WORKDIR /app

# 优先复制包管理相关文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖（包含工程依赖）
RUN pnpm install

# 复制项目文件
COPY . .

# 执行构建
RUN pnpm build

# 生产环境阶段
FROM nginx:alpine

# 从构建阶段复制构建产物
COPY --from=builder /app/docs/.vuepress/dist /usr/share/nginx/html

# 使用自定义nginx配置（如果需要）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动nginx服务
CMD ["nginx", "-g", "daemon off;"]