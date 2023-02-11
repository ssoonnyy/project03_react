import { useState } from "react";
import productDatabase from "../database/productDatabase";
import VisualMain from "../SubComponents/Main_visual";
import { Tabmenu } from "../SubComponents/CategoryTab";
import { useDispatch, useSelector } from "react-redux";
import { selected } from "../SubComponents/Store";
import { ProductSlide } from "../SubComponents/ProductSlide";

export default function Main() {
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
  //console.log(tab);

  return (
    <div className="wrap">
      <VisualMain />
      <section className="hot_item">
        <h3>인기상품</h3>
        <ProductSlide data={productDatabase.hot} link={"/details/hot"} />
      </section>

      <section className="category">
        <h3>상품 카테고리</h3>
        <Tabmenu
          tab={tab}
          onClick={(menu) => {
            CategoryTap(menu.category, menu.type);
            dispatch(
              selected({
                type: menu.type,
              })
            );
          }}
        />
        <ProductSlide data={categoryChange} link={`/details/${categoryType}`} />
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
