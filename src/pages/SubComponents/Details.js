import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productDatabase from "../database/productDatabase";
import { useDispatch } from "react-redux";
import { addItem } from "./Store";
//import { useNavigate } from "react-router-dom";

export default function Details() {

  const { category, id } = useParams();
  const dispatch = useDispatch()
  //const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    let findCategory = [];
    if (category === "pain") {
      findCategory = productDatabase.pain;
    }
    if (category === "move") {
      findCategory = productDatabase.move;
    }
  
 
    let result = findCategory.find((product) => product.id === id);
    setProduct(result);
  }, [category, id]);

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
    const totalPrice = (product.price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
      product && (
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
              {totalPrice}
              <span style={{ fontSize: 14 }}> 원</span>
            </span>
          </p>
        </div>
      )
    );
  }
  const dotprice = product&&(product.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  //console.log(product)
  return (
    product && (
      
      <section className="detail_main">
        <div className="product_detail">
          <div className="detail_img">
            <img src={product.image} alt="상품이미지" />
          </div>
          <div className="product_info">
            <div className="detail_info">
              <p className="product_title">{product.title}</p>
              <p className="product_price">
                판매가
                <span>
                  {dotprice}
                  <span style={{ fontSize: 14 }}> 원</span>
                </span>
              </p>
              <p className="membership_price">
                회원할인가
                <span>
                  {dotprice}
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
                생산국<span>{product.made}</span>
              </p>
              <p className="product_madeby">
                제조사<span>{product.madeby}</span>
              </p>
            </div>
            <Count setCount={setCount} product={product} />
            <div className="product_btn">
              <button>바로구매</button>
              <button onClick={()=>{
                dispatch(addItem({id: product.id , title: product.title, count:1 , totalPrice: product.price, image: product.image}))
              }}>장바구니</button>
              <button>관심상품</button>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
