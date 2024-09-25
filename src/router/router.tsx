import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("@/App"));
const Result_404 = lazy(() => import("@/components/404"));
const Result = lazy(() => import("@/components/Result"));
const Search = lazy(() => import("../pages/Search"));
const Account = lazy(() => import("../pages/Account"));
const Login = lazy(() => import("../pages/Login"));

const Demo = lazy(() => import("../pages/demo"));

const routers = createBrowserRouter([
  //使用Navigate进行重定向
  {
    path: "/",
    element: (
      <Suspense>
        <Navigate to="/demo" />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "search", //搜索
        element: (
          <Suspense>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "account", //个人中心
        element: (
          <Suspense>
            <Account />
          </Suspense>
        ),
      },

      {
        path: "result", //没有权限结果页
        element: (
          <Suspense>
            <Result />
          </Suspense>
        ),
      },
      {
        path: "demo",
        element: (
          <Suspense>
            <Demo />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: "/login", //登录页面
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },

  {
    path: "/404",
    element: (
      <Suspense>
        <Result_404 />
      </Suspense>
    ),
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Result_404 />
      </Suspense>
    ),
  },
]);

export default routers;
