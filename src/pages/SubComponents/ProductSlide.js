import { Link } from "react-router-dom";
import Slider from "react-slick";
import ProductBox from "./ProductBox";

export const ProductSlide = ({ data, link }) => {
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
  //console.log("hottest", data);
  return (
    <Slider {...productsettings}>
      {data.map((product, i) => {
        return (
          <div className="product" key={i}>
            <Link to={`${link}/${product.id}`}>
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
};
