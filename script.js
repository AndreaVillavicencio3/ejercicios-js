const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

/*let condicion1 = edad >= 18;

let condicion2 = esFamiliar === true;

if (condicion1 && condicion2){
   console.log(`entra a la fiesta`);
  } else{
    console.log(`no entra a la fiesta`);

  }; */


const admitirPaso = (persona)=> {
   if (persona.edad >=18) {
    console.log(`puedes pasar ${persona.nombre} && ${persona.esFamiliar}`);
}
};

ejercicio2.forEach((persona) => {
  admitirPaso(persona);
}); 




/*const admitirPaso = (nombre)=> {
  if (nombre.edad >=18){
      console.log(`puedes pasar ${nombre.edad} ${nombre.esFamiliar}`);
  } else {
      console.log(`no puedes pasar ${nombre.edad} ${nombre.esFamiliar}`);
  }
};

admitirPaso(ejercicio2) */