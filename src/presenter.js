import saludar from "./Saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const edad = Number.parseInt(edad_input.value);
  if(edad>=30){
    div.innerHTML = "<p> Hola Sr." + saludar(nombre) + "</p>";
  }else{
    div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";
  }

});
