//配置如下
// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import loading from "./loading";
import menu from "./menu";
export default configureStore({
  reducer: {
    counter,
    loading,
    menu,
  },
});
