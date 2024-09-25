import { Outlet } from "react-router-dom";
import VConsole from "vconsole";
import "./App.css";

function App() {
  // useEffect(() => {
  //   if (process.env.NODE_ENV === "development") {
  //     // 只在开发环境中加载 VConsole
  //     const vConsole = new VConsole();
  //     console.log("VConsole loaded");
  //   }
  // }, []);

  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
