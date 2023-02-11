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
          {Array.from({ length: 16 }).map((i) => {
            return (
              <img
                key={i}
                src={process.env.PUBLIC_URL + `/images/instar0${i + 1}.jpg`}
                alt={`instar img`}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
