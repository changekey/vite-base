import axioss from "axios";
import routers from "@/router/router";
import { getCookie } from "@/utils/utils";
import modalConfig from "@/components/ModalConfig";
import { showLoading, hideLoading } from "@/components/ModalLoading";

// 创建实例时配置默认值
let isPathSet = false;

const axios = axioss.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL || window.location.host,
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_TIME_OUT, // 请求超时时间
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Page-URL": window.location.href,
    "My-Lang": getCookie("lang"),
  },
  // withCredentials: true, // 允许跨域请求带cookies
});
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    showLoading(); // 显示加载中模态框
    const token = getCookie("token") || "";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    hideLoading(); // 显示加载中模态框
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    hideLoading(); // 设置加载状态为 false
    if (response.data) {
      switch (response.data.code) {
        case 307:
          // 在跳转状态码下，跳转至指定页面
          window.location.href = response.data.data.redirect;
          break;
        case 317:
          // 在317状态码下显示一个模态对话框
          modalConfig(response.data.data);
          break;
        case 318:
          // 在318状态码下显示一个结果页面
          routers.navigate("/result", {
            state: response.data.data,
            replace: true,
          });
          break;
        case 401:
          // 处理401状态码，例如跳转至登录页面
          // 当捕获到401错误，或进行跳转前
          const pathname = window.location.pathname;
          if (pathname !== "/login") {
            sessionStorage.setItem(
              "redirectPath",
              window.location.pathname + window.location.search
            );
            routers.navigate(
              `/login?redirect=${encodeURIComponent(
                window.location.pathname + window.location.search
              )}`
            );
          }
          break;
        case 404:
          // 处理404状态码，例如显示404页面  执行两次（原因多个接口返回404）
          routers.navigate("/404");
          break;
        case 500:
          // 处理500状态码，例如显示服务器错误页面
          break;
        default:
          // 处理其他状态码
          break;
      }
    }
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。 response
    hideLoading(); // 设置加载状态为 false
    if (error.request) {
      switch (error.request.status) {
        case 0:
          // 处理401状态码，例如跳转至登录页面
          // routers.navigate("/404");
          break;
        case 401:
          // 处理401状态码，例如跳转至登录页面
          routers.navigate("/login");
          break;
        case 404:
          // 处理404状态码，例如显示404页面
          routers.navigate("/404");
          break;
        case 500:
          // 处理500状态码，例如显示服务器错误页面
          break;
        default:
          // 处理其他状态码
          break;
      }
    }

    return Promise.reject(error);
  }
);
export default axios;
