import { useState } from "react";
import { useParams } from "react-router-dom";
import "./style/detail.scss";
import "./style/style.css";


export default function Details(props) {


  const category = useParams();
  console.log(category);


  const setCount = useState();
  const [count, setCountdown] = useState(1);

  function Count() {
    function countDown(e) {
      if (count <= 0) {
        e.preventDefault();
      } else {
        setCountdown(count - 1);
      }
    }
    return (
      <div className="total_price">
        <p>
          개수
          <button className="conut_btn" onClick={countDown}>
            -
          </button>
          {count}
          <button
            className="conut_btn"
            onClick={() => {
              setCountdown(count + 1);
            }}
          >
            +
          </button>
        </p>
        <p className="total_price">
          총금액
          <span>
            
            <span style={{ fontSize: 14 }}> 원</span>
          </span>
        </p>
      </div>
    );
  }


    return(
      <section className="detail_main">
      <div className="product_detail">
        <div className="detail_img">
          <img src='' alt="상품이미지" />
        </div>
        <div className="product_info">
          <div className="detail_info">
            <p className="product_title"></p>
            <p className="product_price">
              판매가
              <span>
             
                <span style={{ fontSize: 14 }}> 원</span>
              </span>
            </p>
            <p className="membership_price">
              회원할인가
              <span>
                
                <span style={{ fontSize: 14 }}> 원</span>
              </span>
              <p style={{ color: "#BF1F1F" }}>
                *회원할인가는 <strong>로그인</strong> 후 적용 됩니다.
              </p>
            </p>
            <p className="product_delivery">
              배송비<strong>무료배송</strong>
            </p>
            <p className="product_made">
              생산국<span></span>
            </p>
            <p className="product_madeby">
              제조사<span></span>
            </p>
          </div>
          <Count setCount={setCount} />
          <div className="product_btn">
            <button>바로구매</button>
            <button>장바구니</button>
            <button>관심상품</button>
          </div>
        </div>
      </div>
    </section>
    )
 
  
}
