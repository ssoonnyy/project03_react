import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, minusCount, deleteItem } from './Store';

export default function Cart() {

  const state = useSelector((state)=>{return state})
  const dispatch = useDispatch()

 

  return(
    <>
      <h2>장바구니</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>선택</th>
            <th>No</th>
            <th>상품명</th>
            <th>개수</th>
            <th>증감</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
         {
          state.cart.map((item, i)=>{
            let totalPrice =(state.cart[i].totalPrice * state.cart[i].count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            return(
              <tr key={i}>
                <td><input type="checkbox" name="" id="" /></td>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(addCount(state.cart[i].id))
                  }}>+</button>

                  {totalPrice}

                  <button onClick={()=>{
                    dispatch(minusCount(state.cart[i].id))
                  }}>-</button>
                  <button onClick={()=>{
                    dispatch(deleteItem(state.cart[i].id))
                  }}>삭제</button>
                </td>
              </tr>
            )
          })
          }
        </tbody>
      </Table>
    </>
  )


}