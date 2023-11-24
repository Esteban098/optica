import { useEffect, useState } from "react";
import ButtonsPaginate from "./ButtonsPaginate";
import RowCategory from "./RowCategory";

export default function Categories() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;

  let countCategory;
  let countOrd = null;
  const PORT = "https://vission.herokuapp.com";

  async function getCategoriesInDb() {
    const response = await fetch(
      `${PORT}/api/products/categories?page=${page}`
    );
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
    getCategoriesInDb();
  }, [null]);
  useEffect(() => {
    getCategoriesInDb();
  }, [page]);
  countCategory = data ? data.meta.count : null;
  if (data) {
    console.log(data.data, "data");
  }
  const categories = data ? data.data : null;
  return (
    <>
      {!data ? (
        <div className="loader"></div>
      ) : (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Categoría</th>
              <th scope="col">Activa</th>
            </tr>
          </thead>

          {categories.map((category) => (
            <RowCategory
              key={category.id}
              id={category.id}
              categoryName={category.categoryName}
              active={category.active}
            />
          ))}
        </table>
      )}
      <ButtonsPaginate
        previous={previous}
        next={next}
        page={page}
        limit={limit}
        countProd={countCategory}
      />
    </>
  );
}
