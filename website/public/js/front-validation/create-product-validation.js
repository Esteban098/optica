window.onload = function () {
  let errors = {};

  const form = document.getElementById("formValidation");
  const inputFile = document.getElementById("avatar_p_Create");
  const msg_error_files = document.getElementById("msg_error_files");
  const title = document.getElementById("title");
  const error_title = document.getElementById("error_title");
  const shortDescription = document.getElementById("shortDescription");
  const error_shortDescription = document.getElementById(
    "error_shortDescription"
  );
  const price = document.getElementById("price");
  const error_price = document.getElementById("error_price");
  const size = document.getElementById("size");
  const error_size = document.getElementById("error_size");
  const material = document.getElementById("material"); //no se esi esta bien
  const error_material = document.getElementById("error_material");
  const longDescription = document.getElementById("floatingTextarea2"); // es el que esta como dato?
  const error_longDescription = document.getElementById(
    "error_longDescription"
  );

  //---------------------
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
  //-------------------------------------
  inputFile.addEventListener("change", function () {
    let extensionErrors = [];
    const arrayFile = this.files;
    const extensionAcepte = [
      "image/gif",
      "image/jpg",
      "image/png",
      "image/jpeg",
    ];

    for (element of arrayFile) {
      if (!extensionAcepte.includes(element.type)) {
        extensionErrors.push(element);
      }
    }
    if (extensionErrors.length != 0) {
      errors.images =
        " debe ingresar una foto con formato valido front-end los formatos aceptados son jpg, png, gif, jpeg";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const valueTitle = title.value;

    if (valueTitle == "" || valueTitle.replace(/ /g, "") == "") {
      //saco los espacios vacíos con replace
      errors.title = "Debe ingresar un titulo (validaciones front-end)";
    } else if (valueTitle != "" && valueTitle.length <= 5) {
      errors.title =
        "El campo title debe tener al menos 5 caracteres (validaciones front-end)";
    } else {
      if (errors.title) {
        delete errors.title;
        error_title.innerText = "";
        title.classList.remove("is-invalid");
      }
    }

    const valueShortDescription = shortDescription.value;

    if (
      valueShortDescription == "" ||
      valueShortDescription.replace(/ /g, "") == ""
    ) {
      errors.shortDescription = "Debe llenar el campo Breve Descripción";
    } else if (valueShortDescription.length < 19) {
      errors.shortDescription =
        "El campo breve descripción debe tener al menos 20 caracteres";
    } else {
      if (errors.shortDescription) {
        delete errors.shortDescription;
        error_shortDescription.innerText = "";
        shortDescription.classList.remove("is-invalid");
      }
    }

    const valuePrice = price.value;

    if (valuePrice == "" || valuePrice.replace(/ /g, "") == "") {
      errors.price = "Debe llenar el campo precio f";
    } else if (isNaN(Number(valuePrice))) {
      //isNaN devuelve falso cundo es un numero y devuelve true cuando no lo es, por eso no lo niego
      errors.price = "El campo precio debe ser un numero f";
    } else {
      if (errors.price) {
        delete errors.price;
        error_price.innerText = "";
        price.classList.remove("is-invalid");
      }
    }

    const valueSize = size.value;

    if (valueSize == "") {
      errors.size = "Debe seleccionar un tamaño (front)";
    } else {
      if (errors.size) {
        delete errors.size;
        error_size.innerText = "";
        size.classList.remove("is-invalid");
      }
    }

    const valueMaterial = material.value;

    if (valueMaterial == "") {
      errors.material = "Debe seleccionar un material";
    } else {
      if (errors.material) {
        delete errors.material;
        error_material.innerText = "";
        material.classList.remove("is-invalid");
      }
    }

    const valueLongDescription = longDescription.value;
    console.log(
      valueLongDescription == "" ||
        valueLongDescription.replace(/ /g, "") == "",
      1211231
    );
    if (
      valueLongDescription == "" ||
      valueLongDescription.replace(/ /g, "") == ""
    ) {
      errors.longDescription = "Debe llenar el campo descripción";
    } else if (valueLongDescription.length <= 20) {
      errors.longDescription =
        "El campo descripción debe tener al menos 20 caracteres";
    } else {
      if (errors.material) {
        delete errors.material;
      }
    }

    if (inputFile.value == "") {
      errors.image = "Debe agregar al menos una imagen ";
    } else {
      if (errors.image) {
        delete errors.image;
        msg_error_files.innerText = "";
      }
    }

    console.log(errors);
    if (Object.keys(errors) == 0) {
      form.submit();
    } else {
      e.preventDefault();
      if (errors.title) {
        error_title.innerText = errors.title;
        title.classList.add("is-invalid");
      }
      if (errors.shortDescription) {
        error_shortDescription.innerText = errors.shortDescription;
        shortDescription.classList.add("is-invalid");
      }
      if (errors.price) {
        error_price.innerText = errors.price;
        price.classList.add("is-invalid");
      }
      if (errors.size) {
        error_size.innerText = errors.size;
        size.classList.add("is-invalid");
      }
      if (errors.material) {
        error_material.innerText = errors.material;
        material.classList.add("is-invalid");
      }
      if (errors.longDescription) {
        error_longDescription.innerText = errors.longDescription;
        longDescription.classList.add("is-invalid");
      }

      if (errors.image) {
        msg_error_files.innerText = errors.image;
        inputFile.classList.add("is-invalid");
      }
      if (errors.images) {
        msg_error_files.innerText = errors.images;
        inputFile.classList.add("is-invalid");
      }
    }
  });
};
