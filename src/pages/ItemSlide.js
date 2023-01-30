import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductBox from "./ProductBox";
import productDatabase from "./productDatabase";

export default function ItemSlide(props) {

  const itemSlidesettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    draggable: true,
    centerPadding: 30,
  };
  return (
    <Slider {...itemSlidesettings}>
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
  );
}
