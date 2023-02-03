export default function ProductBox(props) {

  const price = (props.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return (
    <div>
      <div className="product_img">
        <img src={props.image} alt="상품이미지" />
      </div>
      <div className="product_info">
        <p className="product_title">{props.title}</p>
        <p className="product_desc">{props.desc}</p>
        <p className="product_price">
          {price}원
        </p>
      </div>
    </div>
  );
}
