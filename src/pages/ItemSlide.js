export default function ItemSlide(props) {
  return (
    <div>
      <div className="product_img">
        <img src={props.image} alt="인기상품" />
      </div>
      <div className="product_info">
        <p className="product_title">{props.title}</p>
        <p className="product_desc">{props.desc}</p>
        <p className="product_price">
          {props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </p>
      </div>
    </div>
  );
}
