import React, { memo, useMemo, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../store';
import { changeName, increase} from '../store/userSlice';

// function 함수(){
//   return 반복문 10억번 돌린결과
// }

 let Child= memo(function(){
  return <div>자식 컴포넌트</div>
})

function Cart (){

  // let result = useMemo(()=>{return 함수()},[state])

  // Redux store 가져와줌
  let state = useSelector((state)=>{return state})
  let dispatch = useDispatch()
  let [count, setCount] = useState(0)

  return (
    <div>
      <br></br>
      <Child></Child>
      <button onClick={()=>{setCount(count+1)}}></button>
      <br></br>

      {state.user.name}
      {state.user.age}의 장바구니
      <button onClick={()=>{
        dispatch(increase(100))
      }}>버튼</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>지역</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {
          state.cart.map((a,i) =>
            <tr key={i}>
              <td>2</td>
              <td>부산</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button onClick={()=>{
                  dispatch(addCount(state.cart[i].id))
                }}>+</button>
              </td>
            </tr>
          )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Cart
