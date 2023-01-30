import { useState } from "react";
import { Link } from "react-router-dom";
import ProductBox from "./ProductBox";
import productDatabase from "./productDatabase";
import "./style/shop.scss"

export default function Shop() {

  const [categoryChange, setCategoryChange] = useState(productDatabase.pain);
  const [categoryType, setCategoryTypeChange] = useState("pain");

  return(
    <>
      <section className="shop">
        <ul className="category_tap">
          <li
            onClick={() => {
              setCategoryChange(productDatabase.pain);
              setCategoryTypeChange("pain");
            }}
          >
            통증
          </li>
          <li
            onClick={() => {
              setCategoryChange(productDatabase.move);
              setCategoryTypeChange("move");
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

        <div className="product_container">
          {categoryChange.map((product, l) => {
            return (
              <div className="shopProduct" key={l}>
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
        </div>
          
        
      </section>
    </>
  )
}