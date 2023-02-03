import { useState } from "react";
import productDatabase from "../database/productDatabase";

export default function CategoryTab() {
  const [categoryChange, setCategoryChange] = useState(productDatabase.pain);
  const [categoryType, setCategoryTypeChange] = useState("pain");

  function CategoryTap(productDatabase, name) {
    setCategoryChange(productDatabase);
    setCategoryTypeChange(name);
  }

  let category = ['통증', '움직임', '퍼포먼스', '재활필라테스', '근막&마사지', '운동밴드', '요가매트', '보호대']
  let [btnActive, setBtnActive] = useState("");
  
  const toogleActive = (e) => {
    setBtnActive(()=>{
      return e.target.value;
    })
  }
  return(
    <>
      <ul id="category_tap">
        {
          category.map((innerText, idx)=>{
            return(
              <>
                <li value={idx} className={"btn"+ (idx == btnActive ? "active" : "")}onClick={()=>{
                  CategoryTap(productDatabase.pain, categoryType)
                  toogleActive()
                  }}>
                    {innerText}
                </li>
              </>
            )
          })
        }
      </ul>
    </>
  )

}