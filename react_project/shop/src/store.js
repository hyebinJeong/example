import { configureStore, createSlice } from "@reduxjs/toolkit";
// store에서 user에 있는 변수를 사용하고 싶으면 user import 해주기
import user from "./store/userSlice";

//새로운 slice 등록
let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cart = createSlice({
  name: 'cart',
  initialState : [
    {id : 0, name : 'White and Black', Count : 2},
    {id : 2, name : 'Grey yordan', counrt : 1 }
  ],
  reducers : {
    addCount(state, action){
      let 번호 = state.findIndex((a)=>{return a.id == action.payload})
      state[번호].count++
    },
    addItem(state,action){
      // state.push --> array 뒤에 자료 추가해주는 함수
      state.push(action.payload)
    }
  }
})

// addCount함수를 cart.actions에서 빼서 export해주세요
export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
    /* 중요 - 여기에 등록해야 사용가능
      등록하는 법 
      1. createSlice를 변수에 저장하기
      2. 작명 : 위에서 만든 state.reducer
    */
  user : user.reducer,
  // 새로운 slice 만들었으면 꼭 여기에 등록해야함!
  stock : stock.reducer,
  cart : cart.reducer
  },
});
