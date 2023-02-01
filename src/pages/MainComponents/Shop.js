import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductBox from "../SubComponents/ProductBox";
import productDatabase from "../database/productDatabase";
import Pagination from 'react-bootstrap/Pagination';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export default function Shop() {

  const [categoryChange, setCategoryChange] = useState(productDatabase.pain);
  const [categoryType, setCategoryTypeChange] = useState("pain");
  const navigate = useNavigate();
  return(
    <>
      <section className="shop">
     
        <p className="title">
          <Breadcrumb>
            <Breadcrumb.Item onClick={()=>{
              navigate("/project03_react");
            }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item onClick={()=>{
              navigate('shop')
            }}>
              Shop
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{categoryType}</Breadcrumb.Item>
          </Breadcrumb>
          <select className="view" name="view" id="view">
            <option value="기본정렬" selected>기본정렬</option>
            <option value="낮은가격순">낮은 가격 순</option>
            <option value="높은가격순">높은 가격 순</option>
          </select>
        </p>

        <ul className="category_tab">
          <li
            onClick={() => {
              setCategoryChange(productDatabase.pain);
              setCategoryTypeChange("pain");
            }}
          >
            <img src={process.env.PUBLIC_URL + "/images/category01.png"} alt="" />
            <p>통증</p>
          </li>
          <li
            onClick={() => {
              setCategoryChange(productDatabase.move);
              setCategoryTypeChange("move");
            }}
          >
            <img src={process.env.PUBLIC_URL + "/images/category02.png"} alt="" />
            <p>움직임</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/category03.png"} alt="" />
            <p>퍼포먼스</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/category04.png"} alt="" />
            <p>재활필라테스</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/category05.png"} alt="" />
            <p>근막&마사지</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/category06.png"} alt="" />
            <p>운동밴드</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/category07.png"} alt="" />
            <p>요가매트</p>
          </li>
          <li>
            <img src={process.env.PUBLIC_URL + "/images/category08.png"} alt="" />
            <p>보호대</p>
          </li>
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
  )
}