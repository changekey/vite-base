import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { updatePrimaryColor, colorToRgb, loadThemeCSS } from "@/utils/utils";
import { getMenu } from "@/utils/request";
import { generateThemeStyles } from "@/utils/themeStyle";
import store from "@/store";
import routers from "@/router/router.tsx";
import "@/global.less";
import "./index.css";
import "@/utils/rootFontSize";

// 当 Vite 加载动态导入失败时，会触发 vite:preloadError 事件。
// event.payload 包含原始的导入错误信息。
// 如果调用 event.preventDefault()，则不会抛出错误。
window.addEventListener("vite:preloadError", (event) => {
  console.warn("Failed to preload module:", "vite:preloadError");
  window.location.reload(); // 刷新页面
});

const root = ReactDOM.createRoot(document.getElementById("root")!);

const App = () => {
  const [color, setColor] = useState("rgba(0, 102, 102, 1)");

  useEffect(() => {
    getMenuData();
  }, []);

  const getMenuData = async () => {
    try {
      const { data, code }: any = await getMenu();
      if (code === 1) {
        // autoparts 汽配展
        // cnise 文具展
        // console.log(data, "app"); data?.themeColor
        // 加载主题色
        loadThemeCSS(data?.platform);
        setColor(data?.themeColor);
        sessionStorage.setItem("themeColor", colorToRgb(data?.themeColor));
        updatePrimaryColor(data?.themeColor);
      }
    } catch (error) {
      loadThemeCSS("cnise");
      updatePrimaryColor("rgba(0, 102, 102, 1)");
      sessionStorage.setItem("themeColor", colorToRgb("rgba(0, 102, 102, 1)"));
    }
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color,
          colorLink: color,
        },
        components: {
          Button: {
            boxShadow: "none", // 去除按钮阴影
          },
        },
      }}
    >
      {/* 主题色 根据 color 动态生成 全局的主题样式 */}
      <style>{generateThemeStyles(color)}</style>
      <Provider store={store}>
        <RouterProvider router={routers} />
      </Provider>
    </ConfigProvider>
  );
};
root.render(<App />);
