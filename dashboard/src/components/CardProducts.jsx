import { Link } from "react-router-dom";

export default function CardProducts(props) {
  return (
    <div className="col-md-3">
      <div className="ibox" id="ibox">
        <div className="ibox-content product-box">
          <div className="product-imitation">
            <img
              src={`https://vission.herokuapp.com/img/products/${props.image}`}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="product-desc">
            <span className="product-price">$ {props.price}</span>
            <small className="text-muted">Categoría: {props.category} </small>
            <Link to={`/products/${props.id}`} className="product-name">
              {" "}
              {props.name}
            </Link>

            <div className="small m-t-xs">{props.shortDescription}</div>
            <div className="m-t text-righ">
              <Link
                to={`/products/${props.id}`}
                className="btn btn-xs btn-outline btn-dark"
              >
                Info <i className="fa fa-long-arrow-right"></i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
