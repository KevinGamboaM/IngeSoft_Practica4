import saludar, { horario } from "./Saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const genero_input = document.querySelector("#genero");
const idioma_input = document.querySelector("#idioma");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombre_input.value;
  const genero = genero_input.value;
  const idioma = idioma_input.value;
  const edad = Number.parseInt(edad_input.value);

  if(edad>=30 && genero == 'masculino'){
    if(idioma == "spanish"){
      div.innerHTML = "<p>"+ horario(idioma) + " Sr. " + saludar(nombre) + "</p>";
    }else
      div.innerHTML = "<p>"+ horario(idioma) + " Mister " + saludar(nombre) + "</p>";


  }else if(genero == 'masculino'){
    if(idioma == "spanish"){
      div.innerHTML = "<p>"+ horario(idioma) + " querido amigo " + saludar(nombre) + "</p>";
    }else
      div.innerHTML = "<p>"+ horario(idioma) + " dear friend " + saludar(nombre) + "</p>";
    

  }if(edad>=30 && genero == 'femenino'){
    if(idioma == "spanish"){
      div.innerHTML = "<p>"+ horario(idioma) + " Srta. " + saludar(nombre) + "</p>";
    }else
      div.innerHTML = "<p>"+ horario(idioma) + " Miss " + saludar(nombre) + "</p>";

    
  }else if(genero == 'femenino'){
    if(idioma == "spanish"){
      div.innerHTML = "<p>"+ horario(idioma) + " querida amiga " + saludar(nombre) + "</p>";
    }else
      div.innerHTML = "<p>"+ horario(idioma) + " dear friend " + saludar(nombre) + "</p>";
    
  }



});
