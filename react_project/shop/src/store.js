import { configureStore, createSlice } from "@reduxjs/toolkit";

// state 하나를 slice라고 부름
let user = createSlice({
  name : 'user',
  initialState : 'been' // 유저 이름 보관할때 많이 사용함
})

//새로운 slice 등록
let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

export default configureStore({
  reducer: {
    /* 중요 - 여기에 등록해야 사용가능
      등록하는 법 
      1. createSlice를 변수에 저장하기
      2. 작명 : 위에서 만든 state.reducer
    */
  user : user.reducer,
  // 새로운 slice 만들었으면 꼭 여기에 등록해야함!
  stock : stock.reducer
  },
});
