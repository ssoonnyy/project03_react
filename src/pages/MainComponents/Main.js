import Slider from "react-slick";
import { useState } from "react";
import { Link } from "react-router-dom";
import productDatabase from "../database/productDatabase";
import VisualMain from "../SubComponents/Main_visual";
import ProductBox from "../SubComponents/ProductBox";
import { useDispatch, useSelector } from "react-redux";
import { selected } from "../SubComponents/Store";

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
  const dispatch = useDispatch();
  const [categoryChange, setCategoryChange] = useState(productDatabase.pain);
  const [categoryType, setCategoryTypeChange] = useState("pain");

  function CategoryTap(productDatabase, name) {
    setCategoryChange(productDatabase);
    setCategoryTypeChange(name);
  }

  const tab = useSelector((tab) => {
    return tab.tabmenu;
  });
  console.log(tab);

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
          {tab.map((menu) => {
            console.log(menu);
            return (
              <li
                style={{
                  transition: "all 0.3s",
                  color: menu.chk ? "#BF1F1F" : "#000",
                  borderColor: menu.chk ? "#BF1F1F" : " ",
                  fontWeight: menu.chk ? "bold" : " ",
                }}
                onClick={() => {
                  CategoryTap(menu.category, menu.type);
                  dispatch(
                    selected({
                      type: menu.type,
                    })
                  );
                }}
              >
                {menu.name}
              </li>
            );
          })}
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
