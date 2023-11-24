import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImagesDetailProduct from "./ImagesDetailProduct";
export default function DetailProducts() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const PORT = "https://vission.herokuapp.com";
  async function getProductInDb() {
    const response = await fetch(`${PORT}/api/products/${id}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    getProductInDb();
  }, [null]);
  const product = data ? data.data : null;
  const images = data ? data.data.image : null;
  const category = data ? data.data.category : null;
  const price = data ? data.data.price[0] : null;
  return !data ? (
    <div className="loader"></div>
  ) : (
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel">
          <div className="panel-body">
            <div className="col-md-6 d-flex">
              {images.map((image) => (
                <ImagesDetailProduct image={image.filename} />
              ))}
            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">
                <a href="#" className="">
                  {product.name}
                </a>
              </h4>
              <p>{product.longDescription}</p>
              <div className="product_meta">
                <span className="posted_in">
                  {" "}
                  <strong>Categorías:</strong>{" "}
                  {category.map((cat) => cat.categoryName + ", ")}
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Precio : </strong>{" "}
                <span className="amount-old">$ {price.priceDiscount}</span>{" "}
                <span className="pro-price">$ {price.price}</span>
              </div>
              <strong>Descuento : </strong>{" "}
              <span className="text-success"> {price.discount}%</span>
              <div className="form-group">
                <label>Cantidad</label>
                <input
                  type="quantiy"
                  placeholder="1"
                  className="form-control quantity"
                />
              </div>
              <p>
                <button className="btn btn-round btn-danger" type="button">
                  <i className="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
