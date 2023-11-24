import { useEffect, useState } from "react";
import axios from "axios";
// import dayjs from "dayjs";
// import RowProducts from "./RowProducts";
// import ColumProducts from "./ColumProducts";
// import { Link } from "react-router-dom";
import ButtonsPaginate from "./ButtonsPaginate";
import CardProducts from "./CardProducts";

export default function Products() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  let countProd;
  const limit = 10;
  const PORT = "https://vission.herokuapp.com";
  async function getProductsInDb() {
    const response = await axios(`${PORT}/api/products?page=${page}`);
    setData(response.data);
    //  setCountProd(response.data.meta.count);
  }
  countProd = data ? data.meta.count : null;
  function previous() {
    if (page != 1) {
      setPage(page - 1);
    }
  }
  function next() {
    setPage(page + 1);
  }
  useEffect(() => {
    getProductsInDb();
  }, [null]);
  useEffect(() => {
    getProductsInDb();
  }, [page]);
  const products = data ? data.data : "";
  console.log(products);

  return (
    <>
      {!data ? (
        <div className="loader"></div>
      ) : (
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <CardProducts
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price[0].price}
                category={product.category.map((cat) => cat.categoryName + " ")}
                image={product.image[0].filename}
              />
            ))}
          </div>
        </div>
      )}
      <ButtonsPaginate
        previous={previous}
        next={next}
        page={page}
        limit={limit}
        countProd={countProd}
      />
    </>
  );
}
