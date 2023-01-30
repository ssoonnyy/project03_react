import "./style/style.css";
import "./style/main.scss";
import Slider from "react-slick";
import { useState } from "react";
import { Link } from "react-router-dom";
import productDatabase from "./productDatabase";
import VisualMain from "./Main_visual";
import ProductBox from "./ProductBox";

export default function Main() {
  const productsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    draggable: true,
    centerPadding: 30,
  };

  const [categoryChange, setCategoryChange] = useState(productDatabase.pain);
  const [categoryType, setCategoryTypeChange] = useState("pain");

  function CategoryTap(productDatabase, name) {
    setCategoryChange(productDatabase);
    setCategoryTypeChange(name);
  }

  //console.log(productDatabase.hot);
  return (
    <div className="wrap">
      <VisualMain />
      <section className="hot_item">
        <h3>인기상품</h3>
        <Slider {...productsettings}>
          {productDatabase.hot.map((product, i) => {
            return (
              <div className="product" key={i}>
                <Link to={`/details/hot/${i}`}>
                  <ProductBox
                    image={product.image}
                    title={product.title}
                    desc={product.desc}
                    price={product.price}
                  />
                </Link>
              </div>
            );
          })}
        </Slider>
      </section>

      <section className="category">
        <h3>상품 카테고리</h3>
        <ul id="category_tap">
          <li
            onClick={() => {
              CategoryTap(productDatabase.pain, "pain");
            }}
          >
            통증
          </li>
          <li
            onClick={() => {
              CategoryTap(productDatabase.move, "move");
            }}
          >
            움직임
          </li>
          <li>퍼포먼스</li>
          <li>재활필라테스</li>
          <li>근막&마사지</li>
          <li>운동밴드</li>
          <li>요가매트</li>
          <li>보호대</li>
        </ul>

        <Slider {...productsettings} id="category_sheet">
          {categoryChange.map((product, l) => {
            return (
              <div className="product" key={l}>
                <Link to={`/details/${categoryType}/${product.id}`}>
                  <ProductBox
                    image={product.image}
                    title={product.title}
                    desc={product.desc}
                    price={product.price}
                  />
                </Link>
              </div>
            );
          })}
        </Slider>
      </section>

      <section className="instar">
        <div className="instar_ani">
          <img src={process.env.PUBLIC_URL + "/images/instar01.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar02.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar03.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar04.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar05.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar06.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar07.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar08.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar01.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar02.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar03.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar04.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar05.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar06.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar07.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/instar08.jpg"} alt="" />
        </div>
      </section>
    </div>
  );
}
