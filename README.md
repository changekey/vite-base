# 项目名称

这是一个使用 Vite + React + TypeScript + React Router DOM + Redux + Axios + less 构建的项目。
采用 vite 构建 react 项目，使用 typescript 进行类型检查，使用 react-router-dom 进行前端路由，使用 redux 进行状态管理，使用 axios 进行 http 请求，使用 less 进行样式编写。

# 技术栈

- Vite - 下一代前端构建工具 [vite](https://vitejs.cn/vite3-cn/guide/#scaffolding-your-first-vite-project)
- React - 前端框架 采用 React hooks 开发 [react](https://react.docschina.org/learn)
- TypeScript - 静态类型检查 规范参数类型 [TypeScript](https://typescript.bootcss.com/tutorials/typescript-in-5-minutes.html)
- React Router DOM - 前端路由 [RouterV6](https://baimingxuan.github.io/react-router6-doc/start/tutorial)
- Redux - 状态管理 [Redux](https://cn.react-redux.js.org/tutorials/quick-start/)
- Axios - HTTP 客户端 [Axios](https://www.axios-http.cn/docs/config_defaults)
- less - 样式语言 方便样式编写 最终转化为 css

## 开始克隆项目

### 1.克隆项目到本地并运行

```bash
git clone https://github.com/yourusername/yourproject.git
cd yourproject
npm install
npm run dev
```

### 2.构建项目

```bash
npm run build
```

### 项目目录结构

```bash
yourproject/
├── public/            # 公共资源
├── src/               # 源代码
│   ├── api/           # 基于 Axios 的 HTTP 请求封装
│   ├── assets/        # 图片、样式等静态资源
│   ├── components/    # React 组件
│   ├── pages/         # 页面组件
│   ├── store/         # Redux 相关文件
│   ├── utils/         # 工具函数
│   ├── App.tsx        # 根组件
│   ├── global.css     # 全局样式
│   └── main.tsx       # 入口文件
├── .gitignore         # Git 忽略文件配置
├── index.html         # 根 HTML 文件
├── .eslintrc.cjs       # ESLint 配置
├── package.json       # npm 包管理配置
├── README.md          # 项目说明文档
├── tsconfig.json      # TypeScript 配置
├── .env.development   # 开发环境变量配置
├── .env.production    # 生产环境变量配置
└── vite.config.ts    # Vite 配置
```

### 项目目录具体说明

- 在 api 文件夹下，我们封装了基于 axios 的 http 请求，统一管理请求地址和请求方法，方便后续调用。
- 在 store 文件夹下，我们定义了 redux 的相关文件，在 index.tsx 中，同意将 store 挂载到 React 的 context 中，方便后续使用。
- 在 router 文件夹下，我们定义了前端路由，采用了路由表的的形式，在 router1.tsx 中统一配置，方便后续维护。
- 在 utils 文件夹下，我们定义了一些工具函数，比如判断是否登录，获取当前用户信息等。
- 在 pages 文件夹下，我们定义了页面组件，比如登录页、主页等。
- 在 components 文件夹下，我们定义了一些公共组件，比如头部、侧边栏等。
- 在 assets 文件夹下，我们存放了图片、样式等静态资源。
- 在 global.css 文件中，我们定义了全局样式。
- 在 App.tsx 文件中，我们定义了根组件，并将 store、router 等挂载到 React 的 context 中。
- 在 main.tsx 文件中，我们定义了入口文件，并将根组件渲染到页面中。
- 在.env.development 和.env.production 文件中，我们定义了环境变量，方便不同环境的配置。
