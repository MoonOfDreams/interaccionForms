window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//
  let formTitle = document.querySelector("#title");
  let formRating = document.querySelector("#rating");
  let formAwards = document.querySelector("#awards");
  let formReleaseDate = document.querySelector("#release_date");
  let formLength = document.querySelector("#length");
  let formGenre = document.querySelector("#genre_id");
  let formGenreOptions = document.querySelectorAll("#genre_id option");
  let errores = document.querySelector(".errores");

  function inputValidator(input, message) {
    input.addEventListener("blur", () => {
      if (!input.value) {
        if (!errores.innerHTML.includes(`<li>${message}</li>`)) {
          errores.innerHTML += `<li>${message}</li>`;
          errores.classList.add("alert-warning");
        }
        return input.classList.add("is-invalid");
      } //`<li>${message}</li>`
      if (errores.innerHTML.includes(`<li>${message}</li>`)) {
        errores.innerHTML = errores.innerHTML.replace(
          `<li>${message}</li>`,
          ""
        );
      }
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    });
  }

  function genreValidator() {
    let errorValidation = true;
    formGenreOptions.forEach((option) => {
      if (option.selected && !option.disabled) return (errorValidation = false);
    });
    if (errorValidation) {
      if (!errores.innerHTML.includes(`<li>Debe elegir un genero</li>`)) {
        errores.innerHTML += `<li>Debe elegir un genero</li>`;
      }
      formGenre.classList.add("is-invalid");
      return true;
    }
    if (errores.innerHTML.includes("<li>Debe elegir un genero</li>")) {
      errores.innerHTML = errores.innerHTML.replace(
        "<li>Debe elegir un genero</li>",
        ""
      );
    }
    formGenre.classList.remove("is-invalid");
    formGenre.classList.add("is-valid");
    return false;
  }

  inputValidator(formTitle, "Debe ingresar un titulo");
  inputValidator(formRating, "Debe ingresar un rating");
  formRating.addEventListener("blur", () => {
    if (parseInt(formRating.value) < 0 || parseInt(formRating.value) > 10) {
      if (
        !errores.innerHTML.includes(
          `<li>El rating tiene que ser entre 0 y 10</li>`
        )
      ) {
        errores.innerHTML += `<li>El rating tiene que ser entre 0 y 10</li>`;
      }
      return formRating.classList.add("is-invalid");
    } //`<li>${message}</li>`
    if (
      errores.innerHTML.includes(
        `<li>El rating tiene que ser entre 0 y 10</li>`
      )
    ) {
      errores.innerHTML = errores.innerHTML.replace(
        `<li>El rating tiene que ser entre 0 y 10</li>`,
        ""
      );
    }
    formRating.classList.remove("is-invalid");
    formRating.classList.add("is-valid");
  });
  inputValidator(formAwards, "Debe ingresar una cantidad de premios");
  formAwards.addEventListener("blur", () => {
    if (parseInt(formAwards.value) < 0 || parseInt(formAwards.value) > 10) {
      if (
        !errores.innerHTML.includes(
          `<li>La cantidad de premios tienen que ser entre 0 y 10</li>`
        )
      ) {
        errores.innerHTML += `<li>La cantidad de premios tienen que ser entre 0 y 10</li>`;
      }
      return formAwards.classList.add("is-invalid");
    } //`<li>${message}</li>`
    if (
      errores.innerHTML.includes(
        `<li>La cantidad de premios tienen que ser entre 0 y 10</li>`
      )
    ) {
      errores.innerHTML = errores.innerHTML.replace(
        `<li>La cantidad de premios tienen que ser entre 0 y 10</li>`,
        ""
      );
    }
    formAwards.classList.remove("is-invalid");
    formAwards.classList.add("is-valid");
  });
  inputValidator(formReleaseDate, "Debe ingresar una fecha de estreno");
  inputValidator(formLength, "Debe ingresar una duracion");
  formGenre.addEventListener("blur", genreValidator);

  formulario.addEventListener("submit", (event) => {
    let errors = [];
    errores.innerHTML = "";
    if (!formTitle.value) {
      if (!errors.includes("Debe ingresar un titulo")) {
        errors.push("Debe ingresar un titulo");
      }
      formTitle.classList.add("is-invalid");
    }
    if (!formRating.value) {
      if (!errors.includes("Debe ingresar un rating")) {
        errors.push("Debe ingresar un rating");
      }
      formRating.classList.add("is-invalid");
    }
    if (!formAwards.value) {
      if (!errors.includes("Debe ingresar una cantidad de premios")) {
        errors.push("Debe ingresar una cantidad de premios");
      }
      formAwards.classList.add("is-invalid");
    }
    if (!formReleaseDate.value) {
      if (!errors.includes("Debe ingresar una fecha de estreno")) {
        errors.push("Debe ingresar una fecha de estreno");
      }
      formReleaseDate.classList.add("is-invalid");
    }
    if (!formLength.value) {
      if (!errors.includes("Debe ingresar una duracion")) {
        errors.push("Debe ingresar una duracion");
      }
      formLength.classList.add("is-invalid");
    }

    if (parseInt(formRating.value) < 0 || parseInt(formRating.value) > 10) {
      if (!errors.includes(`El rating tiene que ser entre 0 y 10`)) {
        errors.push(`El rating tiene que ser entre 0 y 10`);
      }
      formRating.classList.add("is-invalid");
    }
    if (parseInt(formAwards.value < 0) || parseInt(formAwards.value) > 10) {
      if (
        !errors.includes(`La cantidad de premios tienen que ser entre 0 y 10`)
      ) {
        errors.push(`La cantidad de premios tienen que ser entre 0 y 10`);
      }
      formAwards.classList.add("is-invalid");
    }

    let errorValidation = true;
    formGenreOptions.forEach((option) => {
      if (option.selected && !option.disabled) return (errorValidation = false);
    });
    if (errorValidation) {
      if (!errors.includes(`Debes elegir un genero`)) {
        errors.push(`Debes elegir un genero`);
      }
      formGenre.classList.add("is-invalid");
    }

    if (errors.length > 0) {
      event.preventDefault();
      errors.forEach((error) => (errores.innerHTML += `<li>${error}</li>`));
      errores.classList.add("alert-warning");
      return;
    } else {
      errores.classList.remove("alert-warning");
      alert("La película se guardó correctamente");
      
    }
  });

  formTitle.select();
};
