// 아래에서 createSlice 써야하니까 import 해주기
import { createSlice } from "@reduxjs/toolkit";

// state 하나를 slice라고 부름
let user = createSlice({
  name: "user",
  // 유저 이름 보관할때 많이 사용함
  initialState: { name: "been", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "seong";
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

// export 해주는 변수들도 가져와서 적어주는게 깔끔함
export let { changeName, increase } = user.actions;

//위에서 user라는 slice를 내보내서 사용해야하니까 export해주기
export default user;