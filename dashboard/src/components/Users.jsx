import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import ButtonsPaginate from "./ButtonsPaginate";
import CardUsers from "./CardUsers";
// import RowOrdes from "./RowOrdes";
// import RowUsers from "./RowUsers";

export default function Users() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const PORT = "https://vission.herokuapp.com";
  const limit = 12;
  let countUser;

  async function getUserInDB() {
    const response = await fetch(`${PORT}/api/users?page=${page}`);
    const data = await response.json();
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
    getUserInDB();
    random_color();
  }, [null]);
  useEffect(() => {
    getUserInDB();
    random_color();
  }, [page]);
  function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    // const bgColorUser = document.getElementById("colorBackgroundUsers");
    // bgColorUser.style.background = bgColor;
    return bgColor;
  }
  countUser = data ? data.meta.count : null;
  const users = data ? data.data : null;
  console.log(users);
  return (
    <>
      {!data ? (
        <div className="loader"></div>
      ) : (
        <div className="container">
          <div className="main-body">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
              {users.map((user) => (
                <CardUsers
                  key={user.id}
                  name={user.name + " " + user.lastName}
                  country={user.country}
                  streetAddress={user.streetAddress}
                  id={user.id}
                  avatar={user.avatar}
                  bgColor={random_color()}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <ButtonsPaginate
        previous={previous}
        next={next}
        page={page}
        limit={limit}
        countProd={countUser}
      />
    </>
  );
}
