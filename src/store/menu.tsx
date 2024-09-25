import { createSlice } from "@reduxjs/toolkit";

export const menu = createSlice({
  name: "menu",
  initialState: {
    text: "",
    state: false,
    texts: { please_select2: "" },
    regionOptions: [],
    categoryOptions: [],
    exhibitionOptions: [],
    regionValue: [],
    categoryValue: [],
    exhibition: [],
    switchChecked: {
      popularity: false,
      recommendation: false,
    },
    category: {
      one: "",
      two: "",
      three: "",
    },
    region: {
      country: "",
      province: "",
      city: "",
    },
    selsect: { page: 0 },
    type: "range",
  },
  reducers: {
    increment: (state, { type, payload }) => {
      //一个方法即为一个action，“increment”即供action匹配的type字段
      state.text = payload;
    },
    increments: (state, { type, payload }) => {
      return { ...state, ...payload };
    },
  },
});

export const { increment, increments } = menu.actions;
export default menu.reducer;
