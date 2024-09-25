// store/counter

import { createSlice } from "@reduxjs/toolkit";
export const counter = createSlice({
  name: "loading",
  initialState: {
    state: false,
  },
  reducers: {
    //这里配置切片中用于操作变量的方法
    increment: (state, { type, payload }) => {
      //一个方法即为一个action，“increment”即供action匹配的type字段
      state.state = payload;
    },
  },
});

export const { increment } = counter.actions; //要把所有的action都导出去，以供组件使用
export default counter.reducer; //导出该切片，并在index.js文件（store）中的reducer进行配置
