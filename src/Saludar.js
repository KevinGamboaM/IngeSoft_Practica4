function saludar(nombre) {
  
    return nombre;
  }
export function horario() {
  
 var hora = new Date().getHours();
 var saludo;
  if (hora >= 1 && hora < 12) {
      saludo = "Buenos días";
  } else if (hora >= 12 && hora < 19) {
      saludo = "Buenas tardes";
  } else {
      saludo = "Buenas noches";
  }
  return saludo;
  }
  export default saludar ; horario;