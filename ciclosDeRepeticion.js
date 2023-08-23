/* 

Bucles y repeticiones

1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.
2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.
5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.

*/

//1.
function siguientes10(limite) {
  for (let i = 0; i <= 10; i++) {
    console.log(limite + i);
  }
}

siguientes10(50);

//2.
for (let i = 5; i <= 20; i += 3) {
  console.log(i);
}

//3.
function mostrarSumatoria() {
  let sumatoria = 0;
  for (let i = 0; i <= 100; i++) {
    sumatoria += i;
  }
  return sumatoria;
}

let resultado = mostrarSumatoria();
console.log("La sumatoria de los numeros del 0 al 100 es: " + resultado);

//4.
function calcularFactorial(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado = resultado * i;
  }
  return resultado;
}

let factorial = calcularFactorial(3);
console.log("El factorial de 3 es: " + factorial);

//5.
//        Forma de resolverlo número 1       //

function fibonacci1(num) {
  let primerNum = 0;
  let segundoNum = 1;
  let resultado = 0;

  while (resultado <= num) {
    /*Este if se coloca solo para evitar que la primer suma
        se muestre dos veces, de otro modo por la logica implementada
        quedará:
        0 + 1 = 1
        1 + 0 = 1
        (Comprobar por consola sin el if en caso de ser necesario)
        */
    if (primerNum == 1 && segundoNum == 0) {
      primerNum = 1;
      segundoNum = 1;
      resultado = primerNum + segundoNum;
    } else {
      resultado = primerNum + segundoNum;
    }
    console.log(primerNum + " + " + segundoNum + " = " + resultado);
    segundoNum = primerNum;
    primerNum = resultado;
  }
}

let numero = parseInt(prompt("Ingrese el numero seleccionado: "));
fibonacci1(numero); //esta misma variable se repite para la segunda forma de resolverlo. EN caso de querer ejecutar esta forma copiar y pegar las dos lineas de codigo.

//        Forma de resolverlo número 2       //

function fibonacci2(num) {
  let numeros = [0, 1];

  for (let i = 2; i <= num; i++) {
    numeros[i] = numeros[i - 1] + numeros[i - 2];
    console.log(
      "\n" + numeros[i - 1] + " + " + numeros[i - 2] + " = " + numeros[i]
    );
  }
}

Buenas chicos, para los que realizaron las actividades de la clase de arreglos, les dejo los ejercicios realizados en el archivo!