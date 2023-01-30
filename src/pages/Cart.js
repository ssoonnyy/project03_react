import Table from 'react-bootstrap/Table';
export default function Cart() {
  let i = 0;
  i++;
  return(
    <>
      <h2>장바구니</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>선택</th>
            <th>#{`${i}`}</th>
            <th>상품명</th>
            <th>개수</th>
            <th>증감</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" name="select_product" id="select_product" checked/></td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td><button>-</button><button>+</button></td>
          </tr>
        </tbody>
      </Table>
    </>
  )


}