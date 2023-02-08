import { configureStore, createSlice } from "@reduxjs/toolkit";
import productDatabase from "../database/productDatabase";

const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((i) => {
        return i.id === action.payload;
      });
      state[index].count++;
    },
    minusCount(state, action) {
      const index = state.findIndex((i) => {
        return i.id === action.payload;
      });
      if (state[index].count <= 1) {
      } else {
        state[index].count--;
      }
    },
    deleteItem(state, action) {
      const index = state.findIndex((i) => {
        return i.id === action.payload;
      });
      state.splice(index, 1);
    },
    addItem(state, action) {
      const index = state.findIndex((i) => {
        return i.id === action.payload.id;
      });
      if (index > -1) {
        // 배열의 index값 중 하나로 존재한다면. 0번부터 시작하니까 유무를 확인하는 것임.
        state[index].count++;
      } else {
        state.push(action.payload);
      }
    },
    totalPrice(state, action) {
      const index = state.findIndex((i) => {
        return i.id === action.payload.id;
      });
      state[index].totalPrice++;
      state.push(action.payload);
    },
  },
});
const tabmenu = createSlice({
  name: "tabmenu",
  initialState: [
    { name: "통증", category: productDatabase.pain, type: "pain", chk: true },
    {
      name: "움직임",
      category: productDatabase.move,
      type: "move",
      chk: false,
    },
    {
      name: "퍼포먼스",
      category: productDatabase.pain,
      type: "performance",
      chk: false,
    },
    {
      name: "재활필라테스",
      category: productDatabase.pain,
      type: "pilates",
      chk: false,
    },
    {
      name: "근막&마사지",
      category: productDatabase.pain,
      type: "massage",
      chk: false,
    },
    {
      name: "운동밴드",
      category: productDatabase.pain,
      type: "band",
      chk: false,
    },
    {
      name: "요가매트",
      category: productDatabase.pain,
      type: "mat",
      chk: false,
    },
    {
      name: "보호대",
      category: productDatabase.pain,
      type: "guard",
      chk: false,
    },
  ],
  reducers: {
    selected(state, action) {
      //console.log("클릭");
      const { type } = action.payload;
      return state.map((tab) => {
        if (tab.type === type) {
          return {
            // ...tab,
            name: tab.name,
            category: tab.category,
            type: tab.type,
            chk: true,
          };
        } else {
          return {
            ...tab,
            chk: false, //...tab으로 불러온 값 중 이 값을 덮어쓰겠다는 뜻
          };
        }
      });
    },
  },
});
export const { addCount, minusCount, deleteItem, addItem, totalPrice } =
  cart.actions;
export const { selected } = tabmenu.actions;
export default configureStore({
  reducer: {
    cart: cart.reducer,
    tabmenu: tabmenu.reducer,
  },
});
