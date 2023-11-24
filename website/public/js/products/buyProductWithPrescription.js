window.onload = function () {
  const nameUserHeader = document.getElementById("nameUserLoggedHeader");
  console.log(nameUserHeader);
  // no debe ser muy seguro esto , deberia hacer una api que pregunte por algo y que si es legitimo el user lo deje comprar
  const btnBuy = document.getElementById("btnBuyPrescription");
  const fromBuy = document.getElementById("fromBuyProductPrescription");
  fromBuy.addEventListener("submit", (event) => {
    if (nameUserHeader) {
      event.preventDefault();
      swal({
        title: "¿Esta seguro de comprar este producto?",
      }).then((response) => {
        if (response) {
          swal({
            icon: "success",
            title: "Gracias por su compra",
          });
          fromBuy.submit();
        }
      });
    }
  });
};
