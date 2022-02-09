const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,];
const numeroprimo = (impar) => {
  if (impar.ejercicio1%2 == 0) {
    console.log (`el ${impar.ejercicio1} es par`)
  } else {
    console.log(`${impar.ejercicio1} es impar`)
  }
};

ejercicio1.forEach((impar) => {
  numeroprimo(impar);
});








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

  }; corresponde al primer intento */ 


/* Nota para Andrea: La forma correcta de hacerlo fue asignando "persona", agregar las condiciones juntas
 y hacer un foreach en funcion de la persona y del arreglo llamado "ejercicio2"


/*const admitirPaso = (nombre)=> {
  if (nombre.edad >=18){
      console.log(`puedes pasar ${nombre.edad} ${nombre.esFamiliar}`);
  } else {
      console.log(`no puedes pasar ${nombre.edad} ${nombre.esFamiliar}`);
  }
}; segundo intento

admitirPaso(ejercicio2) */
