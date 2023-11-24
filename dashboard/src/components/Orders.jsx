import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RowOrdes from "./RowOrdes";
import ButtonsPaginate from "./ButtonsPaginate";
export default function Orders() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;
  let countOrder;
  let countOrd = null;
  const PORT = "https://vission.herokuapp.com";

  async function getOrdersInDB() {
    const response = await fetch(`${PORT}/api/orders?page=${page}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  function previous() {
    if (page != 1) {
      setPage(page - 1);
    }
  }
  function next() {
    setPage(page + 1);
  }
  useEffect(() => {
    getOrdersInDB();
  }, [null]);
  useEffect(() => {
    getOrdersInDB();
  }, [page]);
  countOrder = data ? data.meta.count : null;

  const orders = data ? data.data : null;
  return (
    <>
      {!data ? (
        <div class="loader"></div>
      ) : (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Usuario</th>
              <th scope="col">Prescripción</th>
              <th scope="col">Producto</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <Link to={`/orders/${order.id}`}>
              <RowOrdes
                key={order.id}
                id={order.id}
                user={order.order.user.name + " " + order.order.user.lastName}
                product={order.product.name}
                prescription={order.prescription ? "si" : "no"}
              />
            </Link>
          ))}
        </table>
      )}
      <ButtonsPaginate
        previous={previous}
        next={next}
        page={page}
        limit={limit}
        countProd={countOrder}
      />
    </>
  );
}
