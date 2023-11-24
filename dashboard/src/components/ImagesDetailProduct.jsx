export default function ImagesDetailProduct(props) {
  return (
    <div className="pro-img-list">
      <a href="#">
        <img
          src={`https://vission.herokuapp.com/img/products/${props.image}`}
          alt=""
          style={{ width: "300px" }}
        />
      </a>
    </div>
  );
}
