import saludar, { horario } from "./Saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const genero = genero_input.value;
  const edad = Number.parseInt(edad_input.value);
  if(edad>=30 && genero == 'masculino'){
    div.innerHTML = "<p>"+ horario() + " Sr. " + saludar(nombre) + "</p>";
  }else if(genero == 'masculino'){
    div.innerHTML = "<p>"+ horario() + "querido amigo " + saludar(nombre) + "</p>";
  }if(edad>=30 && genero == 'femenino'){
    div.innerHTML = "<p>"+ horario() + " Srta. " + saludar(nombre) + "</p>";
  }else if(genero == 'femenino'){
    div.innerHTML = "<p>"+ horario() + " querida amiga " + saludar(nombre) + "</p>";
  }



});
