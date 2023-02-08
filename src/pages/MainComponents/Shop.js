import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductBox from "../SubComponents/ProductBox";
import productDatabase from "../database/productDatabase";
import Pagination from "react-bootstrap/Pagination";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { selected } from "../SubComponents/Store";

export default function Shop() {
  const [categoryChange, setCategoryChange] = useState(productDatabase.pain);
  const [categoryType, setCategoryTypeChange] = useState("pain");
  function CategoryTap(productDatabase, name) {
    setCategoryChange(productDatabase);
    setCategoryTypeChange(name);
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tab = useSelector((tab) => {
    return tab.tabmenu;
  });
  return (
    <>
      <section className="shop">
        <p className="title">
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
            <Breadcrumb.Item active>{categoryType}</Breadcrumb.Item>
          </Breadcrumb>
          <select className="view" name="view" id="view">
            <option value="기본정렬" selected>
              기본정렬
            </option>
            <option value="낮은가격순">낮은 가격 순</option>
            <option value="높은가격순">높은 가격 순</option>
          </select>
        </p>

        <ul className="category_tab">
          {tab.map((menu, i) => {
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
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/category0" + i + ".png"
                  }
                  alt=""
                />
                <p>{menu.name}</p>
              </li>
            );
          })}
        </ul>

        <div className="product_container">
          {categoryChange.map((product, l) => {
            return (
              <>
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
              </>
            );
          })}
        </div>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </section>
    </>
  );
}
