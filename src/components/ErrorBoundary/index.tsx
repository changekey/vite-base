import { Component } from "react";
// 错误边界组件，用于捕获子组件渲染过程中的错误，并渲染备用 UI
// 这里主要是捕获，动态导入的组件，并重新渲染组件树
// 这里主要是解决线上环境下，vite中的动态导入组件（路由的懒加载）
// .html缓存了 link 标签的错误，导致动态导入的组件没有加载进来问题

class ErrorBoundary extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新状态以便下次渲染可以显示备用 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你可以将错误日志上报给服务端
    const fetchResourcesErrors = [
      "Failed to fetch dynamically imported module",
      "Importing a module script failed",
    ];
    if (fetchResourcesErrors.some((item) => error.message?.includes(item))) {
      window.location.reload();
    }

    console.log("ErrorBoundary caught an error", error.message);
  }

  render() {
    if (this.state.hasError) {
      // 可以渲染任何自定义的降级 UI

      // return <h1>出错了。</h1>;
      return this.props.children;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
