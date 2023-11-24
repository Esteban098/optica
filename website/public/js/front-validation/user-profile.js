window.onload = function () {
  //   const body = document.querySelector("body");
  //   body.style.backgroundColor = "red";
  const formDeleteAccount = document.getElementById("deleteAccount");
  const containerForm = document.getElementById("containerForm");
  containerForm.classList.add("none");
  const btnEnviar = document.getElementById("btnEnviarProfile");
  btnEnviar.classList.add("none");

  const btnEdit = document.getElementById("btnEditProfile");
  btnEdit.addEventListener("click", () => {
    const formNone = containerForm.classList.contains("none");
    const enviarNone = btnEnviar.classList.contains("none");
    //if ternario
    formNone
      ? containerForm.classList.replace("none", "block")
      : containerForm.classList.replace("block", "none");
    //if ternario
    enviarNone
      ? btnEnviar.classList.replace("none", "block")
      : btnEnviar.classList.replace("block", "none");
  });
  console.log(swal);
  formDeleteAccount.addEventListener("submit", (event) => {
    event.preventDefault();
    swal(
      "Esta seguro que desea eliminar su cuenta, no podrá volver a usarla?",
      {
        dangerMode: true,
        buttons: true,
      }
    ).then((response) => {
      console.log(response);
      if (response) {
        formDeleteAccount.submit();
      }
    });
  });

  const form = document.querySelector("#formProfile");
  const userName = document.querySelector("#profileName");
  const nameError = document.querySelector("#errorName");
  const lastName = document.querySelector("#userLastName");
  const lastNameError = document.querySelector("#errorLastName");
  const adress = document.querySelector("#adress");
  const adressError = document.querySelector("#adressError");
  const oldPassword = document.getElementById("oldPassword");
  const OldPasswordError = document.getElementById("passwordError");
  const newPassword = document.getElementById("newPassword");
  const newPasswordError = document.getElementById("newPasswordError");
  const confirmNewPassword = document.getElementById("confirmNewPassword");
  const confirmNewPasswordError = document.getElementById(
    "confirmPasswordError"
  );

  const PORT = "https://vission.herokuapp.com";

  let errors = {};
  async function getPasswordInDb(password) {
    const response = await fetch(
      `${PORT}api/users/passwordValidation?password=${password}`
    );
    const data = await response.json();

    return data;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = await getPasswordInDb(oldPassword.value);
    console.log(data, "data");
    if (data.meta) {
      console.log(data.meta.status, "data.meta.status");
    }

    if (oldPassword.value != "") {
      if (oldPassword.value.length < 8) {
        errors.oldPassword =
          "El campo debe tener al menos 8 caracteres (validacion front)";
      } else {
        if (errors.oldPassword) {
          delete errors.oldPassword;
          OldPasswordError.innerText = "";
        }
        if (!data.meta.status) {
          errors.oldPassword =
            "Las contraseñas no coinciden (validaciones front)";
        } else {
          if (errors.oldPassword) {
            delete errors.oldPassword;
            OldPasswordError.innerText = "";
          }

          if (newPassword.value == "") {
            errors.newPassword =
              "Su nueva contraseña no puede estar vaciá (validaciones front)";
          } else {
            if (errors.newPassword) {
              delete errors.newPassword;
              newPasswordError.innerText = "";
            }
            if (newPassword.value.length < 8) {
              errors.newPassword =
                "Su nueva contraseña no ser menos a 8 caracteres (validaciones front)";
            } else {
              if (errors.newPassword) {
                delete errors.newPassword;
                newPasswordError.innerText = "";
              }
            }
          }

          if (confirmNewPassword.value == "") {
            errors.confirmNewPassword =
              "Su confirmación de contraseña no puede estar vaciá (validaciones front)";
          } else {
            if (errors.confirmNewPassword) {
              delete errors.confirmNewPassword;
              confirmNewPassword.innerText = "";
            }
            if (confirmNewPassword.value.length < 8) {
              errors.confirmNewPassword =
                "Su confirmación de contraseña no ser debe ser menos a 8 caracteres (validaciones front) ";
            } else {
              if (errors.confirmNewPassword) {
                delete errors.confirmNewPassword;
                confirmNewPassword.innerText = "";
              }
              if (newPassword.value != confirmNewPassword.value) {
                errors.newPassword =
                  "sus contraseñas no coinciden (validacion front)";
                errors.confirmNewPassword =
                  "sus contraseña no coincide (validaciones front)";
              } else {
                if (errors.newPassword && errors.confirmNewPassword) {
                  delete errors.newPassword;
                  delete errors.confirmNewPassword;
                  newPasswordError.innerText = "";
                  confirmNewPasswordError.innerText = "";
                }
              }
            }
          }
        }
      }
    }

    if (userName.value == "") {
      errors.name = "El nombre no puede estar vació (validaciones front)";
    } else {
      if (errors.name) {
        delete errors.name;
        nameError.innerText = "";
      }
    }

    if (lastName.value == "") {
      errors.lastname =
        "El apellido no puede estar  vació (validaciones front)";
    } else {
      if (errors.lastname) {
        delete errors.lastname;
        lastNameError.innerText = "";
      }
    }

    if (adress.value == "" || adress.value.length < 6) {
      errors.adress =
        "La direccion debe contener mas de 5 caracteres y no puede estar  vació (validaciones front)";
    } else {
      if (errors.adress) {
        delete errors.adress;
        adressError.innerText = "";
      }
    }

    console.log(errors);

    if (Object.keys(errors) == 0) {
      form.submit();
      console.log("No se encontraron errores");
    } else {
      e.preventDefault();
      if (errors.name) {
        nameError.innerText = errors.name;
      }
      if (errors.lastname) {
        lastNameError.innerText = errors.lastname;
      }
      if (errors.adress) {
        adressError.innerText = errors.adress;
      }
      if (errors.oldPassword) {
        OldPasswordError.innerText = errors.oldPassword;
      }
      if (errors.newPassword) {
        newPasswordError.innerText = errors.newPassword;
      }
      if (errors.confirmNewPassword) {
        confirmNewPasswordError.innerText = errors.confirmNewPassword;
      }
    }
    //--------------------------------------------------------------------//
  });
};
