function saludar(nombre) {
  
    return nombre;
  }


export function horario(idioma) {
  
 var hora = new Date().getHours();
 var saludo;
  if (hora >= 1 && hora < 12) {
    if(idioma == "spanish")
      saludo = "Buenos días";
    else
      saludo = "Good morning"

  } else if (hora >= 12 && hora < 19) {
    if(idioma == "spanish")
    saludo = "Buenas tardes";
  else
    saludo = "Good afternoon"

  } else {
    if(idioma == "spanish")
    saludo = "Buenas noches";
  else
    saludo = "Good night"
  }
  return saludo;
  }

  export default saludar ; horario;