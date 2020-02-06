function generarNombre(persona){
return persona.genero + " " + persona.nombre;
}

const persona = {
  genero : 'Señor',
  nombre : 'Adrian'
  };

const elemento = "Hola, yo me llamo " + generarNombre(persona);


ReactDOM.render(
  elemento,
  document.getElementById('holamundo')
);
