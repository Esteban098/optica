window.onload = function () {
  const images = document.querySelectorAll("#imagesLowCarrusel");
  console.log(images);

  const img = document.querySelector(".carousel-item img");
  console.log(img.src, "img");
  img.addEventListener("change", (event) => {});
  let src;
  document
    .querySelector(".imgs-del-producto")
    .addEventListener("click", function (event) {
      func(event.target.src);
    });

  let idImgActual;

  let setImage;
  setImage = document.getElementById("0");
  $(document).ready(function () {
    $("#carousel-product-details").on("slid.bs.carousel", function () {
      src = $(".active").find("img");
      idImgActual = src[0].attributes.id;
      console.log(idImgActual.value);

      setImage = document.getElementById(idImgActual.value);

      // console.log(setImage, "set images");
      //console.log(idImgActual);
    });
  });
  function func(element) {
    const selectedImg = element.replace("http://localhost:3001", "");
    console.log(setImage, "setImage");
    setImage.setAttribute("src", selectedImg);
    img.classList.add("active");
  }
};
