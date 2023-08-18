//Ejercicios resueltos!

/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. */

function pulgadasACm(pulgadas) {
  return pulgadas * 2.54;
}
pulgadasACm(5);

/* Crear una función que recibe un string y lo convierte en una URL. 
ej: “pepito” es devuelto como “http://www.pepito.com”
 */

function url(string) {
  return "http://www." + string + ".com";
}
url("pepito");

/* Crear una función que recibe un string y devuelve la misma frase pero con admiración. */

function admirador(palabra) {
  return palabra + "!!!";
}
admirador("Bienvenidos");

/* Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. */

function edadPerro(edadHumano) {
  return edadHumano * 7;
}
edadPerro(27);

let edadPerro = (edadHumano) => edadHumano * 7;
edadPerro(27);

/* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
PD: considera que tu mes de trabajo tiene 40 horas. */

function valorHora(sueldo) {
  return sueldo / 40;
}
valorHora(1500);

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores. */

function imc(peso, altura) {
  return peso / (altura * altura);
}
imc(75, 1.73);

let imc = (peso, altura) => peso / (altura * altura);
imc(75, 1.73);

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
Investiga que hace el método de strings .toUpperCase() */

function mayus(string) {
  return string.toUpperCase();
}
mayus("hola como estan?");

/* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
pista: te servirá revisar que hace la palabra reservada typeof. */

function tipoDeDato(dato) {
  return typeof dato;
}
tipoDeDato(false);
tipoDeDato(27);
tipoDeDato("Nancy");

/* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi */

function circulo(radio) {
  return Math.PI * radio * 2;
}
circulo(2);
