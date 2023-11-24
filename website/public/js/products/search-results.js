window.onload = async function () {
  const query = location.search;
  const footerResults = document.querySelector(".footer-results");
  const PORT = "https://vission.herokuapp.com";
  const response = await fetch(`${PORT}/api/search${query}`);
  const search = await response.json();
  console.log(search);
  const containerProducts = document.getElementById("container-products");
  const gondola = document.createElement("div");
  gondola.setAttribute("class", "gondola");

  if (search.data.length != 0) {
    search.data.forEach((product) => {
      const article = document.createElement("article");
      article.setAttribute(
        "class",
        "margin-10 productos container-products-list"
      );
      const a = document.createElement("a");
      a.setAttribute("href", `products/${product.id}`);
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

      // asignación de jerarquía
      containerProducts.appendChild(gondola);
      gondola.appendChild(article);
      article.appendChild(a);
      a.appendChild(div1);
      div1.appendChild(img);
      div1.appendChild(div2);
      div2.appendChild(i);
      div1.appendChild(div3);
      div3.appendChild(p);
      div3.appendChild(h4);
    });
    if (search.data.length < 8) {
      footerResults.style.position = "absolute";
      footerResults.style.bottom = "0px";
    }
  } else {
    console.log("erntro al elce");
    const divNoResults = document.createElement("div");
    divNoResults.setAttribute("class", "col-12");
    const h2NoResults = document.createElement("h2");
    h2NoResults.setAttribute("class", "products-title");
    h2NoResults.style.color = "#0bc197";
    h2NoResults.innerText = "No hay productos que coincidan con esa búsqueda";
    containerProducts.appendChild(divNoResults);
    divNoResults.appendChild(h2NoResults);
    footerResults.style.position = "absolute";
    footerResults.style.bottom = "0px";
  }
};
