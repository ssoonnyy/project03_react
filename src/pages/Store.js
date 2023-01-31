import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name : "cart",
  initialState : [
  ],
  reducers : {
    addCount(state, action){
      const index = state.findIndex((i)=>{return i.id === action.payload}) 
      state[index].count++
    },
    minusCount(state, action){
      const index = state.findIndex((i)=>{return i.id === action.payload})
      if (state[index].count <= 1) {
      } else {
        state[index].count--
      }
    },
    deleteItem(state, action) {
      const index = state.findIndex((i)=>{return i.id === action.payload})
      state.splice(index, 1)
    },
    addItem(state, action) {
      const index = state.findIndex((i)=>{return i.id === action.payload.id})
      if(index >-1) {  // 배열의 index값 중 하나로 존재한다면. 0번부터 시작하니까 유무를 확인하는 것임.
        state[index].count++
      }else{
        state.push(action.payload)
      }
    },
    totalPrice(state, action) {
      const index = state.findIndex((i)=>{return i.id === action.payload.id})
      state[index].totalPrice++
      state.push(action.payload)
    }
  }
})
export const {addCount, minusCount, deleteItem, addItem, totalPrice} = cart.actions





export default configureStore({
  reducer: {
    cart : cart.reducer
  },
});
