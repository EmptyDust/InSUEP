<div align="center">
  <img src="https://bu.dusays.com/2025/03/21/67dc3ca22d617.jpg" alt="InSUEP Logo" width="200">
  <h1>✨ InSUEP - 上海电力大学信息直通车 ✨</h1>
  
  ![VuePress](https://img.shields.io/badge/VuePress-2.0.0--rc.24-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
  ![Vue](https://img.shields.io/badge/Vue-3.4.0-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![pnpm](https://img.shields.io/badge/pnpm-8.15.0-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
  ![Docker](https://img.shields.io/badge/Docker-支持-2496ED?style=for-the-badge&logo=docker&logoColor=white)
  [![CC BY-NC-ND 4.0][cc-by-nc-nd-shield]][cc-by-nc-nd]

  <p>💫 信息共享，让上电更美好 💫</p>
</div>

<p align="center">
  <a href="#-项目概述">📖 项目概述</a> •
  <a href="#-特性">✨ 特性</a> •
  <a href="#-开始使用">🚀 开始使用</a> •
  <a href="#-项目结构">📁 项目结构</a> •
  <a href="#-开发指南">🧪 开发指南</a> •
  <a href="#-贡献指南">🤝 贡献指南</a> •
  <a href="#-许可协议">📝 许可协议</a> •
  <a href="#-致谢">🙏 致谢</a>
</p>

---

## 📖 项目概述

InSUEP（上海电力大学信息直通车）是一个由上海电力大学学生共同编写的信息平台，旨在为新老学生提供校园生活的方方面面的信息指南。该项目使用 VuePress 2.0 构建，提供了清晰直观的界面，整合了 [SUEP-Book](https://github.com/SUEP-Plus/SUEP-Book) 的优质内容，力求打造最全面的上电校园攻略。

### 📊 项目状态

- ✅ **基础框架**: VuePress 2.0 + Vue 3 + TypeScript
- ✅ **主题设计**: 基于 vuepress-theme-hope 的现代化主题
- ✅ **文档结构**: 完整的校园生活指南体系
- ✅ **开发流程**: 完整的 CI/CD 自动化部署
- ✅ **容器化**: Docker 支持，便于部署
- 🔄 **内容完善**: 持续更新中，欢迎贡献

## ✨ 特性

- 🚀 基于 VuePress 2.0 构建，性能优异
- 📱 响应式设计，适配各种设备
- 🔍 内置搜索功能，快速找到所需信息
- 🎨 现代简洁的主题设计
- 📝 增强的 Markdown 支持
- 🌐 支持自动部署到腾讯云
- 📚 涵盖上电校园生活的方方面面
- 🐳 Docker 容器化支持
- 🔄 完整的 CI/CD 流程

## 🚀 开始使用

### 🛠️ 环境要求

- Node.js >= 22 (推荐 LTS 版本)
- pnpm 8.15.0 或更高版本

### 📥 安装与运行

1. **克隆仓库**

   ```bash
   git clone https://github.com/emptydust/InSUEP.git
   cd InSUEP
   ```

2. **安装依赖**

   ```bash
   pnpm install
   ```

3. **启动开发服务器**

   ```bash
   pnpm dev
   ```

4. **构建生产版本**

   ```bash
   pnpm build
   ```

5. **部署**
   ```bash
   pnpm deploy
   ```

### 🐳 Docker 部署

项目支持 Docker 容器化部署：

```bash
# 构建镜像
docker build -t insuep .

# 运行容器
docker run -dp 8080:80 --name insuep_container insuep

# 访问 http://localhost:8080
```

## 📁 项目结构

```
InSUEP/
├── docs/                    # 文档源文件
│   ├── 新生你好/           # 新生入学指南
│   │   ├── 学校介绍.md     # 学校概况
│   │   ├── 校区介绍/       # 临港、杨浦校区介绍
│   │   ├── 入学准备/       # 入学物品、宿舍了解
│   │   ├── 入学活动/       # 军训、报道、入学教育
│   │   ├── 校园网/         # 校园网上网指南
│   │   ├── 需带物品/       # 电子产品类等
│   │   └── QQ群/           # 新生交流群
│   ├── 上电指南/           # 校园生活指南
│   │   ├── 防诈骗指南.md   # 安全提醒
│   │   ├── 美食指南/       # 各校区食堂指南
│   │   ├── 数码产品建议/   # 电脑选购指南
│   │   ├── 社团&学生组织/  # 各类社团介绍
│   │   ├── 学生工作/       # 学生会、班级职务
│   │   └── 0day.md         # 快速上手指南
│   ├── 学院与专业介绍/     # 专业相关信息
│   │   └── 计算机科学与技术学院/
│   ├── 学校机构/           # 学校机构信息
│   │   └── 计算机科学与技术学院/
│   ├── 老生入门/           # 高年级学生指南
│   │   ├── 学习指南/       # 各专业学长学姐建议
│   │   ├── 考研指南/       # 考研经验分享
│   │   └── 转专业/         # 转专业流程和经验
│   ├── 开发须知/           # 开发相关文档
│   │   ├── 声明.md         # 项目声明
│   │   ├── 开发者文档.md   # 开发指南
│   │   ├── 文档编写指南.md # 文档编写规范
│   │   └── 样式语法&例子/  # 样式组件说明
│   ├── 序言/               # 项目介绍
│   ├── static/             # 静态资源
│   │   └── imgs/           # 图片资源
│   ├── .vuepress/          # VuePress 配置文件
│   ├── README.md           # 网站首页
│   └── Preface.md          # 序言
├── .github/                # GitHub Actions CI/CD
│   └── workflows/
├── public/                 # 公共静态资源
├── package.json            # 项目依赖和脚本
├── dockerfile              # Docker 配置
└── README.md               # 项目说明
```

## 🧪 开发指南

### 🔧 技术栈

- **VuePress 2.0**: 文档框架
- **Vue 3.4.0**: 前端框架
- **TypeScript**: 类型安全
- **SASS**: 样式处理
- **pnpm 8.15.0**: 包管理
- **Vite**: 构建工具
- **Docker**: 容器化部署

### 💻 开发环境设置

推荐使用 VSCode 进行开发，并安装以下扩展：

- Vue Language Features (Volar)
- ESLint
- Prettier

### 🔌 已安装插件

- @vuepress/bundler-vite
- vuepress-plugin-md-enhance
- vuepress-theme-hope
- @vuepress/plugin-search
- @vueuse/core

### 📋 环境要求

- Node.js >= 22
- pnpm >= 8.15.0
- Vue 3.4.0

## 🤝 贡献指南

我们非常欢迎各种形式的贡献！无论是新功能、内容更新、bug 修复还是文档改进。

### 🔄 贡献步骤

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

### 📝 Commit 规范

请遵循以下 commit 规范：

- **fix**: 修复问题
- **feat**: 新增功能
- **update**: 内容更新
- **refactor**: 结构调整
- **style**: 样式变更
- **ci**: 流水线变更

### ⚠️ 注意事项

- **请将 PR 提交到 `debug` 分支**，而不是 `main` 分支
- 提交前请确保本地运行 `pnpm build` 无错误
- 遵循项目的代码风格和提交规范
- 更多贡献指南请参阅[开发者文档](/开发须知/开发者文档.md)

## 📋 待办事项

- [ ] 🎨 寻找更多志愿者完善界面美化
- [ ] 🖼️ 增加图标资源
- [ ] 📚 丰富网站内容
- [ ] 🏗️ 改进主页设计和功能
- [ ] 📝 完善各学院专业介绍
- [ ] 🏢 补充学校机构信息
- [ ] 🔧 优化 Docker 配置
- [ ] 📊 添加访问统计功能

## 📞 联系我们

- **💬 QQ 交流群**:
  - 726427904 (上电算法竞赛交流群)
- **🐞 GitHub Issues**: 如有问题或建议，请在 GitHub 仓库中提出 issue
- **📧 邮箱**: 可通过 GitHub Issues 联系

## 🙏 致谢

- 感谢所有提出意见的同学和帮助完善界面、文档的朋友
- 特别感谢 [SUEP-Book](https://github.com/SUEP-Plus/SUEP-Book) 的创作者分享了宝贵的文档内容
- 项目灵感来源于 [innenu](https://innenu.com/)
- 感谢所有为项目贡献内容的学长学姐们

## 📝 许可协议

本作品采用 [知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议][cc-by-nc-nd] 进行许可。

[![CC BY-NC-ND 4.0][cc-by-nc-nd-image]][cc-by-nc-nd]

---

<div align="center">
  <sub>用 ❤️ 打造 | Copyright © 2025 InSUEP</sub>
</div>

[cc-by-nc-nd]: http://creativecommons.org/licenses/by-nc-nd/4.0/
[cc-by-nc-nd-image]: https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png
[cc-by-nc-nd-shield]: https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg?style=for-the-badge
