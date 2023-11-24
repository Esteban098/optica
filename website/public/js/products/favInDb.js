window.onload = async () => {
  const idProduct = document.querySelector();
  //   function setFavInDb(PORT, id) {
  //     fetch(`${PORT}/api/products/favorite/${id}`).then((response) => {
  //       response.json().then((data) => {
  //         return data;
  //       });
  //     });
  //   }
  //   function getFavoriteIds() {
  //     const jsonValue = localStorage.getItem("favoritesProduct");
  //     let favoritesProduct = [];
  //     if (jsonValue) {
  //       favoritesProduct = JSON.parse(jsonValue);
  //     }
  //     return favoritesProduct;
  //   }
  //   const response = await fetch(`${PORT}/api/`);
  //   const products = await response.json();
  //   products.data.forEach((product) => {
  //     const id = product.id;
  //     const article = document.createElement("article");
  //     article.setAttribute(
  //       "class",
  //       "margin-10 productos container-products-list"
  //     );
  //     const bag = document.createElement("div");
  //     bag.setAttribute("class", "bolsa");
  //     const a1 = document.createElement("a");
  //     a1.setAttribute("href", `products/${id}`);
  //     const div1 = document.createElement("div");
  //     div1.setAttribute("class", "precios-descripcion shadows");
  //     const img = document.createElement("img");
  //     img.setAttribute("class", "fotos");
  //     img.setAttribute("src", `/img/products/${product.image[0].filename}`);
  //     const i = document.createElement("i");
  //     i.setAttribute("class", "fas fa-shopping-bag ");
  //     const favProduct = getFavoriteIds();
  //     const index = favProduct.indexOf(id);
  //     if (index != -1) {
  //       i.classList.add("bagRose");
  //     } else {
  //       i.classList.add("bagBlue");
  //     }
  //     // const setFavoriteDb = document.createElement("a");
  //     // setFavoriteDb.setAttribute("href", `/api/products/favorite/${id}`);
  //     bag.addEventListener("click", (event) => {
  //       event.preventDefault();
  //       // console.log(dataDB);
  //       setFavInDb(PORT, id);
  //       const favoritesProduct = getFavoriteIds();
  //       const index = favoritesProduct.indexOf(id);
  //       if (index == -1) {
  //         favoritesProduct.push(id);
  //         i.classList.replace("bagBlue", "bagRose");
  //       } else {
  //         favoritesProduct.splice(index, 1);
  //         i.classList.replace("bagRose", "bagBlue");
  //       }
  //       localStorage.setItem(
  //         "favoritesProduct",
  //         JSON.stringify(favoritesProduct)
  //       );
  //     });
  //   });
};
