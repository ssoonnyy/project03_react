import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productDatabase from "../database/productDatabase";
import { useDispatch } from "react-redux";
import { addItem } from "./Store";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

export default function Details() {
  const { category, id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    let findCategory = [];
    if (category === "hot") {
      findCategory = productDatabase.hot;
    }
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
  const [cartPopup, setCartPopup] = useState(false);
  const [interestPopup, setInterestPopup] = useState(false);
  const navigate = useNavigate;
  function Count() {
    function countDown(e) {
      if (count <= 1) {
        e.preventDefault();
      } else {
        setCountdown(count - 1);
      }
    }
    const totalPrice = (product.price * count)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
  const dotprice =
    product && product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //console.log(product)
  return (
    product && (
      <section className="detail_main">
        <Breadcrumb>
          <Breadcrumb.Item
            onClick={() => {
              navigate("/project03_react");
            }}
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            onClick={() => {
              navigate("shop");
            }}
          >
            Shop
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="detail_banner">
          <img
            src={process.env.PUBLIC_URL + "/images/detail_banner.jpg"}
            alt="배송안내배너"
          />
        </div>
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
              <button
                onClick={() => {
                  dispatch(
                    addItem({
                      id: product.id,
                      title: product.title,
                      count: count,
                      totalPrice: product.price,
                      image: product.image,
                    })
                  );
                  setCartPopup(true);
                }}
              >
                장바구니
              </button>
              <button
                onClick={() => {
                  setInterestPopup(true);
                }}
              >
                관심상품
              </button>
            </div>
          </div>
        </div>
        {cartPopup === true ? <CartPopup setCartPopup={setCartPopup} /> : null}
        {interestPopup === true ? (
          <InterestPopup setInterestPopup={setInterestPopup} />
        ) : null}

        <div className="detail_sub">
          <ul className="detail_subnav">
            <li>상품정보</li>
            <li>상품평</li>
            <li>배송안내</li>
            <li>상품문의</li>
            <li>자주하는문의</li>
          </ul>
          <div>
            <img src={product.subimg01} alt="상품정보1" />
            <img src={product.subimg02} alt="상품정보2" />
            <img src={product.subimg03} alt="상품상세정보" />
            <img src={product.subimg04} alt="배송안내/환불규정" />
          </div>
        </div>
      </section>
    )
  );
}

function CartPopup(props) {
  const { setCartPopup } = props;
  const navigate = useNavigate();

  return (
    <div className="cartPopup_alert">
      <header className="cartPopup_header">
        <span>알림</span>
        <span
          className="popup_close"
          onClick={() => {
            setCartPopup(false);
          }}
        ></span>
      </header>
      <div className="cartpopup_main">
        <p>장바구니에 추가되었습니다.</p>
      </div>
      <div className="cartpopup_btnbox">
        <button
          onClick={() => {
            setCartPopup(false);
          }}
        >
          Shop more
        </button>
        <button
          onClick={() => {
            navigate("../cart");
          }}
        >
          Go Cart
        </button>
      </div>
    </div>
  );
}
function InterestPopup(props) {
  const { setInterestPopup } = props;

  return (
    <div className="InterestPopup_alert">
      <header className="InterestPopup_header">
        <span>알림</span>
        <span
          className="popup_close"
          onClick={() => {
            setInterestPopup(false);
          }}
        ></span>
      </header>
      <div className="InterestPopup_main">
        <p>관심상품에 추가되었습니다.</p>
      </div>
      <div className="InterestPopup_btnbox">
        <button
          onClick={() => {
            setInterestPopup(false);
          }}
        >
          Shop more
        </button>
        <button>관심상품보기</button>
      </div>
    </div>
  );
}
