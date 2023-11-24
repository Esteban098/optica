window.addEventListener("load", function () {
  const errors = {};
  const form = document.getElementById("formRegister");
  const name = document.getElementById("name");
  const errorsName = document.getElementById("errorsName");
  const lastName = document.getElementById("lastName");
  const errorLastName = document.getElementById("errorLastName");
  const country = document.getElementById("country");
  const errorCountry = document.getElementById("errorCountry");
  const dateBirth = document.getElementById("dateBirth");
  const errorDateBirth = document.getElementById("errorDateBirth");
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");
  const password = document.getElementById("password");
  const errorPassword = document.getElementById("errorPassword");
  const confirmPassword = document.getElementById("confirmPassword");
  const errorConfirmPassword = document.getElementById("errorConfirmPassword");
  const address = document.getElementById("address");
  const errorAddress = document.getElementById("errorAddress");
  const avatar = document.getElementById("avatar");
  const errorAvatar = document.getElementById("errorAvatar");
  const PORT = "https://vission.herokuapp.com";

  async function getUserInDb(email) {
    const response = await fetch(
      `${PORT}api/users/validationUser?userDB=${email}`
    );
    const data = await response.json();
    return data;
  }

  avatar.addEventListener("change", function () {
    const file = this.files;
    const extensionAcepte = [
      "image/gif",
      "image/jpg",
      "image/png",
      "image/jpeg",
    ];
    console.log(file);
    //como la foto no es obligatoria , solo verifico el formato en el caso que se ingrese una
    if (!extensionAcepte.includes(file[0].type)) {
      errors.avatar =
        "Solo puede subir un archivo en los siguientes formatos jpg, png, gif ";
    } else {
      if (errors.avatar) {
        delete errors.avatar;
        errorAvatar.innerText = "";
      }
    }
  });
  const userDb = await getUserInDb(email.value);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (name.value == "") {
      errors.name = "El campo Nombre no puede estar vació -Validaciones Front-";
    } else {
      if (errors.name) {
        delete errors.name;
        errorsName.innerText = "";
      }
      if (name.value.length < 2) {
        errors.name =
          "El campo Nombre debe tener al menos 2 caracteres -Validaciones Front-";
      } else {
        if (errors.name) {
          delete errors.name;
          errorsName.innerText = "";
        }
      }
    }

    if (lastName.value == "") {
      errors.lastName =
        "El campo apellido no puede estar vació -Validaciones Front-";
    } else {
      if (errors.lastName) {
        delete errors.lastName;
        errorLastName.innerText = "";
      }
      if (lastName.value.length < 2) {
        errors.lastName =
          "Debe campo apellido tener al menos 2 caracteres -Validaciones Front-";
      } else {
        if (errors.name) {
          delete errors.lastName;
          errorLastName.innerText = "";
        }
      }
    }

    if (country.value == "") {
      errors.country = "Debe seleccionar un país -Validaciones Front-";
    } else {
      if (errors.country) {
        delete errors.country;
        errorCountry.innerText = "";
      }
    }
    console.log(dateBirth.value);
    if (dateBirth.value == "") {
      errors.dateBirth =
        "Debe indicar su fecha de nacimiento -Validaciones Front-";
    } else {
      if (errors.dateBirth) {
        delete errors.dateBirth;
        errorDateBirth.innerText = "";
      }
    }

    if (email.value == "") {
      errors.email = "Debe llenar el campo email -Validaciones Front-";
    } else {
      if (errors.email) {
        delete errors.email;
        errorEmail.innerText = "";
      }
      const validateEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

      if (!validateEmail.exec(email.value)) {
        errors.email = "El email debe ser un email valido -Validaciones Front-";
      } else {
        if (errors.email) {
          delete errors.email;
          errorEmail.innerText = "";
        }
        console.log(userDb.meta.status, "status");
        if (!userDb.meta.status) {
          errors.email =
            "Este email ya registrado esta en la base de datos -Validaciones Front-";
        } else {
          if (errors.email) {
            delete errors.email;
            errorEmail.innerText = "";
          }
        }
      }
    }

    if (password.value == "") {
      errors.password =
        "El campo contraseña no puede estar vació -Validaciones Front-";
    } else {
      if (errors.password) {
        delete errors.password;
        errorPassword.innerText = "";
      }
      if (password.value.length < 8) {
        errors.password =
          "El campo contraseña debe tener al menos 8 caracteres -Validaciones Front-";
      } else {
        if (errors.password) {
          delete errors.password;
          errorPassword.innerText = "";
        }
      }
    }

    if (confirmPassword.value == "") {
      errors.confirmPassword =
        "El campo contraseña no puede estar vació -Validaciones Front-";
    } else {
      if (errors.confirmPassword) {
        delete errors.confirmPassword;
        errorConfirmPassword.innerText = "";
      }
      if (confirmPassword.value.length < 8) {
        errors.confirmPassword =
          "El campo contraseña debe tener al menos 8 caracteres -Validaciones Front-";
      } else {
        if (errors.confirmPassword) {
          delete errors.confirmPassword;
          errorConfirmPassword.innerText = "";
        }
        if (password.value != confirmPassword.value) {
          errors.password = "Las contraseñas no coinciden Front";
          errors.confirmPassword =
            "Las contraseñas no coinciden -Validaciones Front-";
        } else {
          if (password.value && errors.confirmPassword) {
            delete errors.password;
            delete errors.confirmPassword;
            errorConfirmPassword.innerText = "";
          }
        }
      }
    }
    if (address.value == "") {
      errors.address =
        "El campo dirección no puede estar vació -Validaciones Front-";
    } else {
      if (errors.address) {
        delete errors.address;
        errorAddress.innerText = "";
      }
      if (address.value.length < 4) {
        errors.address =
          "El campo dirección debe tener al menos 5 caracteres -Validaciones Front-";
      } else {
        if (errors.address) {
          delete errors.address;
          errorAddress.innerText = "";
        }
      }
    }

    console.log(errors);
    if (Object.keys(errors) == 0) {
      form.submit();
      console.log("no hubo errores");
    } else {
      if (errors.name) {
        errorsName.innerText = errors.name;
      }
      if (errors.lastName) {
        errorLastName.innerText = errors.lastName;
      }
      if (errors.country) {
        errorCountry.innerText = errors.country;
      }
      if (errors.dateBirth) {
        errorDateBirth.innerText = errors.dateBirth;
      }
      if (errors.email) {
        errorEmail.innerText = errors.email;
      }
      if (errors.password) {
        errorPassword.innerText = errors.password;
      }
      if (errors.confirmPassword) {
        errorConfirmPassword.innerText = errors.confirmPassword;
      }
      if (errors.address) {
        errorAddress.innerText = errors.address;
      }
      if (errors.avatar) {
        errorAvatar.innerText = errors.avatar;
      }
    }
  });
});
