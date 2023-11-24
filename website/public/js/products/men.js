window.onload = async () => {
  //   const query = location.search;
  //   const footerResults = document.querySelector(".footer-results");
  const PORT = "https://vission.herokuapp.com";
  const response = await fetch(`${PORT}/api/products/men`);
  const products = await response.json();
  console.log(products);
  const sectionContainer = document.querySelector(".container-products");
  const divGondola = document.createElement("div");
  divGondola.setAttribute("class", "gondola");

  //   function setFavInDb(PORT, id) {
  //     fetch(`${PORT}/api/products/favorite/${id}`).then((response) => {
  //       response.json().then((data) => {
  //         return data;
  //       });
  //     });
  //   }
  function getFavoriteIds() {
    const jsonValue = localStorage.getItem("favoritesProduct");
    let favoritesProduct = [];
    if (jsonValue) {
      favoritesProduct = JSON.parse(jsonValue);
    }
    return favoritesProduct;
  }
  if (products.data.length != 0) {
    products.data.forEach((product) => {
      const id = product.id;
      const article = document.createElement("article");
      article.setAttribute(
        "class",
        "margin-10 productos container-products-list"
      );
      const bag = document.createElement("div");
      bag.setAttribute("class", "bolsa");
      const a1 = document.createElement("a");
      a1.setAttribute("href", `products/${id}`);
      const div1 = document.createElement("div");
      div1.setAttribute("class", "precios-descripcion shadows");
      const img = document.createElement("img");
      img.setAttribute("class", "fotos");
      img.setAttribute("src", `/img/products/${product.image[0].filename}`);

      const div2 = document.createElement("div");
      div2.setAttribute("class", "bolsa");
      const i = document.createElement("i");
      i.setAttribute("class", "fas fa-shopping-bag bagBlue");
      const div3 = document.createElement("div");
      const p = document.createElement("p");
      p.setAttribute("class", "precios");

      if (product.price[0]) {
        p.innerText = product.price[0].price;
      }
      const h4 = document.createElement("h4");
      h4.setAttribute("class", "name");
      h4.innerText = product.name;

      const favProduct = getFavoriteIds();
      const index = favProduct.indexOf(id);

      if (index != -1) {
        i.classList.add("bagRose");
      } else {
        i.classList.add("bagBlue");
      }

      const setFavoriteDb = document.createElement("a");
      setFavoriteDb.setAttribute("href", `/api/products/favorite/${id}`);

      bag.addEventListener("click", (event) => {
        // console.log(dataDB);

        const favoritesProduct = getFavoriteIds();
        const index = favoritesProduct.indexOf(id);
        if (index == -1) {
          favoritesProduct.push(id);
          i.classList.replace("bagBlue", "bagRose");
        } else {
          favoritesProduct.splice(index, 1);
          i.classList.replace("bagRose", "bagBlue");
        }
        localStorage.setItem(
          "favoritesProduct",
          JSON.stringify(favoritesProduct)
        );
      });

      // asignación de jerarquía
      sectionContainer.appendChild(divGondola);
      divGondola.appendChild(article);
      article.appendChild(a1);
      a1.appendChild(div1);
      div1.appendChild(img);
      div1.appendChild(bag);
      bag.appendChild(setFavoriteDb);
      setFavoriteDb.appendChild(i);
      //bag.appendChild(i);
      // a2.appendChild(i);
      div1.appendChild(div3);
      //a3.appendChild(div3);
      div3.appendChild(p);
      div3.appendChild(h4);
    });
  }
};
