import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../store';
import { changeName, increase} from '../store/userSlice';

const Cart = () => {

  // Redux store 가져와줌
  let state = useSelector((state)=>{return state})
  let dispatch = useDispatch()

  return (
    <div>
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
