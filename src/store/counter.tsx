// store/counter

import { createSlice } from "@reduxjs/toolkit";
export const counter = createSlice({
  name: "counter", //切片的名称，在定位到该切片的时候需要用到
  initialState: {
    //state的初始值，这是一个对象，里面包含用来所有组件共享的变量
    count: 0,
  },
  reducers: {
    //这里配置切片中用于操作变量的方法
    increment: (state, { type, payload }) => {
      //一个方法即为一个action，“increment”即供action匹配的type字段
      state.count += payload;
    },
  },
});

export const { increment } = counter.actions; //要把所有的action都导出去，以供组件使用
export default counter.reducer; //导出该切片，并在index.js文件（store）中的reducer进行配置
