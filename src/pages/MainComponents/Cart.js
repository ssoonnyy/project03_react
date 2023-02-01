import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minusCount, deleteItem, totalPrice } from '../SubComponents/Store';
import React from 'react';
import { BsFillCartFill } from "react-icons/bs";


export default function Cart() {

  const state = useSelector((state)=>{return state})
  const dispatch = useDispatch()




  return(
    <div className='cart_wrap'>
      <h2>장바구니<BsFillCartFill /></h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>사진</th>
            <th>상품명</th>
            <th>개수</th>
            <th>가격</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         {
          state.cart.map((item, i)=>{
            let totalPrice =(state.cart[i].totalPrice * state.cart[i].count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
       
            return(
              <tr key={i}>
                <td>{i+1}</td>
                <td className='cart_product_img'><img src={state.cart[i].image} alt="상품이미지" style={{width: 100}} /></td>
                <td>{state.cart[i].title}</td>
                <td className='cart_product_count'>
                  <button onClick={()=>{
                    dispatch(addCount(state.cart[i].id))
                  }}>+</button>
                  {state.cart[i].count}
                  <button onClick={()=>{
                    dispatch(minusCount(state.cart[i].id))
                  }}>-</button>
                </td>
                <td className='cart_product_price'>{totalPrice}</td>
                <td className='cart_product_del'><button onClick={()=>{dispatch(deleteItem(state.cart[i].id))}}>삭제</button>
                </td>
              </tr>
            )
          })
          }
        </tbody>
      </Table>
    </div>
  )
}
console.log()