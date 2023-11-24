window.onload = function () {
  const errors = {};
  const form = document.getElementById("formLogin");
  const email = document.getElementById("email");
  const errorEmail = document.getElementById("errorEmail");
  const password = document.getElementById("password");
  const errorPassword = document.getElementById("errorPassword");
  const PORT = "https://vission.herokuapp.com";
  const validateEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  async function getDataUserInDB(email, password) {
    const response = await fetch(
      `${PORT}/api/users/validationLogin?email=${email}&password=${password}`
    );
    const data = await response.json();
    return data;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (email.value == "") {
      errors.email = "El campo email no puede estar vació -Validaciones Front-";
    } else {
      if (errors.email) {
        delete errors.email;
        email.classList.remove("is-invalid");
        errorEmail.innerText = "";
      }
      if (!validateEmail.exec(email.value)) {
        errors.email = "Debe ser un email valido -Validaciones Front-";
      } else {
        if (errors.email) {
          delete errors.email;
          email.classList.remove("is-invalid");
          errorEmail.innerText = "";
        }
      }
    }

    if (password.value == "") {
      errors.password = "Debe ingresar un a contraseña -Validaciones Front-";
    } else {
      if (errors.password) {
        delete errors.password;
        password.classList.remove("is-invalid");
        errorPassword.innerText = "";
      }
      if (password.value.length < 7) {
        errors.password =
          "La contraseña debe tener al menos 8 caracteres -Validaciones Front-";
      } else {
        if (errors.password) {
          delete errors.password;
          password.classList.remove("is-invalid");
          errorPassword.innerText = "";
        }
        const validUser = await getDataUserInDB(email.value, password.value);
        console.log(validUser);
        if (!validUser.data) {
          errors.email = "Las credenciales no son validas -Validaciones Front-";
          errors.password =
            "Las credenciales no son validas -Validaciones Front-";
        } else {
          if (errors.email) {
            delete errors.email;
            email.classList.remove("is-invalid");
            errorEmail.innerText = "";
          }
          if (errors.password) {
            delete errors.password;
            password.classList.remove("is-invalid");
            errorPassword.innerText = "";
          }
        }
      }
    }

    console.log(errors);
    if (Object.keys(errors) == 0) {
      form.submit();
    } else {
      if (errors.email) {
        errorEmail.innerText = errors.email;
        email.classList.add("is-invalid");
      }
      if (errors.password) {
        errorPassword.innerText = errors.password;
        password.classList.add("is-invalid");
      }
    }
  });
};
