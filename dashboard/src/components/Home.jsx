import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [product, setProduct] = useState(null);
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const PORT = "https://vission.herokuapp.com";
  async function getMetrics() {
    const data = await Promise.all([
      fetch(`${PORT}/api/metrics/product`),

      fetch(`${PORT}/api/metrics/order`),
      fetch(`${PORT}/api/metrics/user`),
    ]);
    const metricsProduct = await data[0].json();
    const metricsOrder = await data[1].json();
    const metricsUser = await data[2].json();
    setProduct(metricsProduct);
    setOrder(metricsOrder);
    setUser(metricsUser);
  }
  useEffect(() => {
    getMetrics();
  }, [null]);

  const porCenUser = (user * 100) / 2000;
  const porCenProduct = (product * 100) / 2000;
  const porCenOrder = (order * 100) / 100;
  console.log(order, 12312);
  return (
    <>
      {!product && !order && !user ? (
        <div className="loader"></div>
      ) : (
        <div className="col-md-10 w-100 ">
          <div className="row ">
            <div className=" col-lg-6">
              <Link to={"/orders"} style={{ textDecoration: "none" }}>
                <div className="card l-bg-cherry" id="cardHome">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="mb-4">
                      <h5 className="card-title mb-0">Nuevas Ordenes</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">
                          {order}
                        </h2>
                      </div>
                      <div className="col-4 text-right">
                        <span>
                          {porCenOrder}% <i className="fa fa-arrow-up"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      className="progress mt-1 "
                      data-height="8"
                      style={{ height: "8px" }}
                    >
                      <div
                        className="progress-bar l-bg-cyan"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${porCenOrder}` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to={"/users"} style={{ textDecoration: "none" }}>
                <div className="card l-bg-blue-dark" id="cardHome">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="mb-4">
                      <h5 className="card-title mb-0">Usuarios</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">
                          {user}
                        </h2>
                      </div>
                      <div className="col-4 text-right">
                        <span>
                          {porCenUser}% <i className="fa fa-arrow-up"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      className="progress mt-1 "
                      data-height="8"
                      style={{ height: "8px" }}
                    >
                      <div
                        className="progress-bar l-bg-green"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${porCenUser}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className=" col-lg-6">
              <Link to={"/products"} style={{ textDecoration: "none" }}>
                <div className="card l-bg-green-dark" id="cardHome">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-ticket-alt"></i>
                    </div>
                    <div className="mb-4">
                      <h5 className="card-title mb-0">Productos</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">
                          {product}
                        </h2>
                      </div>
                      <div className="col-4 text-right">
                        <span>
                          {porCenProduct}% <i className="fa fa-arrow-up"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      className="progress mt-1 "
                      data-height="8"
                      style={{ height: "8px" }}
                    >
                      <div
                        className="progress-bar l-bg-orange"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${porCenProduct}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
