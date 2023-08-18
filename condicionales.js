/* 

Agregá Caminos:

Revisá el siguiente código y asegúrate de entenderlo para poder avanzar con el ejercicio. 


let edad=20 //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas) 
if(edad<18) { 
console.log("No puede pasar al bar.") 
} 
else if(edad<21){ 
console.log("Puede pasar al bar, pero no puede tomar alcohol.") 
} 
else{ 
console.log("Puede pasar al bar y tomar alcohol.") 
} 


Sin repetirte, modificá tu código de forma tal que cumpla con estas consignas: 
● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad inválida. Por favor ingrese un número válido." 
Importante: No se deberá mostrar ningún otro mensaje. 
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad. 
● Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad es impar?". 

*/

let edad = 0; //(el número es a modo de ejemplo, podes cambiarlo o crear otras para tener varias pruebas)

if (edad <= 0) { //verificamos que la edad no sea menor o igual a 0
  console.log("Error, edad inválida. Por favor ingrese un número válido."); //si es menor o igual a 0 descartamos
} else if (edad < 18) { //luego verificamos que no sea menor a 18
  console.log("No podes pasar!!");
} else { //si no se cumplen ninguna de ambas quiere decir que edad es mayor a 18
  if (edad < 21) { //consultamos que a pesar de ser mayor a 18, tenga menos de 21, en caso de ser verdad no puede tomar alcohol
    console.log("Podes pasar pero no podes tomar alcohol!");
  } else { //si no se cumple la anterior, quiere decir que tiene 21 o más
    if (edad % 2 !== 0) { //verificamos que el número sea impar (si el módulo de 2 de edad nos da 0 seria par, por lo que verificamos con !== que sea distinto de 0)
      console.log("Sabías que tu edad es impar??");
      console.log(
        "Podes pasar, felicidades por haber llegado a la mayoría de edad!!"
      );
    } else { //si entra en este else quiere decir que la edad es par, solo lo felicitamos por alcanzar la mayoría de edad (y superarla si es mayor a 21)
      console.log(
        "Podes pasar, felicidades por haber llegado a la mayoría de edad!!"
      );
    }
  }
}

/* -------------------------------------------------------------------------- */
/* 
totalAPagar()

Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y  litrosConsumidos. 
A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en cuenta las siguientes consideraciones.
Si el vehículo es “coche”, el precio por litro es de $86,
Si es “moto” ha de ser $70.
Si es “autobús” ha de ser $55.
Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
Si los litros consumidos es mayor  a 25 se ha de añadir $25 al total a pagar.
 */

function totalAPagar(vehiculo, litrosConsumidos) {
  //declaramos el nombre de nuestra función, y los parámetros necesarios
  let total = 0; //creamos la variable en la que iremos guardando nuestro resultado
  //creamos el condicional contemplando los 3 tipos de vehículo, y al final retornando en caso de que no sea ninguno de los 3 tipos de vehículos
  if (vehiculo === "coche") {
    //en caso de corresponder a coche, guardamos en nuestra variable total, el producto de los litros consumidos y el precio por litro, lo mismo con los otros casos
    total = litrosConsumidos * 86;
  } else if (vehiculo === "autobus") {
    total = litrosConsumidos * 55;
  } else if (vehiculo === "moto") {
    total = litrosConsumidos * 70;
  } else {
    return "por favor ingrese un tipo de vehiculo valido";
  }
  //luego que tenemos el producto realizado, verificamos cuántos fueron los litros consumidos para sumarle al total.
  if (litrosConsumidos >= 0 && litrosConsumidos <= 25) {
    total = total + 50;
  } else {
    //no necesitamos una segunda verificación porque si no se cumple la de arriba inferimos que si o si deberá ser mayor a 25 (no contemplamos el caso de que litrosConsumidos sea menor a 0, pero podríamos realizarlo en ese caso si consultando que sea mayor a 25, y dejando un último else para pedir que por favor ingrese un número mayor a 0 en litrosConsumidos)
    total = total + 25;
  }
  return "El total a pagar es de: $" + total; //retornamos el mensaje concatenado con el total a pagar
}


console.log(totalAPagar("coche", 55));

/* -------------------------------------------------------------------------- */

/* 
Local de sándwiches


Necesitamos armar el sistema para un local de venta de sandwiches. Los clientes eligen el sandwich base que tiene un precio, y por cada seleccion siguiente se le suma el valor de su seleccion al precio, por ej, un sadwich base vegetariano con un precio x, despues selecciona pan negro con un precio y, por lo que su total a pagar seria x+y, y asi sucecivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros recibiremos los datos de la siguiente manera:
Nos llega un string indicando el tipo de sándwich base. los mismos tienen un valor base diferente por cada selección:
Pollo = $150 
Carne = $200
Vegetariano (verduras asadas) = $100
Luego de eso el sistema les pregunta qué tipo de pan querrán, tienen para elegir entre otras 3 opciones, por lo que recibiremos también otro string con el tipo de pan deseado:
Blanco c/orégano y parmesano = $50
Negro c/avena = $60
Sin gluten = $75
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes adicionales:
Queso = $20
Tomate = $15
Lechuga = $10
Cebolla = $15
Mayonesa = $5
Mostaza = $5
Cada uno de estos adicionales están representados por booleanos, es decir true o false, dependiendo de si aceptan o no cada uno de los adicionales (nos llegan un total de 6 valores booleanos, uno por cada adicional).
Nuestro trabajo es crear una función que reciba estos 8 parámetros (un string para el sandwich base, uno para el pan, y los 6 booleanos de los adicionales). La función deberá consultar primero que tipo de sándwich base se seleccionó, luego el tipo de pan, y por último deberá verificar que adicionales se seleccionaron. Por último deberá retornar el valor numérico del total a pagar del cliente.

 */


// creamos la función con los parámetros
function creadorSandwich(
  base,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) {
  // generamos nuestra variable resultante, el total a pagar. inicializada en 0 para evitar problemas.
  let total = 0;
  // comenzamos con las verificaciones, por orden el orden lógico, el enunciado y como nos presenta la info.
  if (base === "carne") {
    total += 200; //esto es exactamente lo mismo que hacer total = total + 200 el operador += mantiene lo que había en la variable y le suma lo que haya a su derecha.
  } else if (base === "pollo") {
    total += 150;
  } else if (base === "veggie") {
    total += 100;
  } else {
    //en caso de que no sea un sandwich que corresponda a alguno de los 3, o haya errores, salimos del programa
    return "Por favor ingrese un tipo de sandwich correcto.";
  }
  //continuamos con la selección del pan. similar a como realizamos la selección anterior
  if (pan === "blanco") {
    total += 50;
  } else if (pan === "negro") {
    total += 60;
  } else if (pan === "s/gluten") {
    total += 75;
  } else {
    return "Por favor ingrese un tipo de pan correcto.";
  }
  //ahora comenzamos con la selección de adicionales
 //al ser los adicionales todos booleanos, no necesitamos hacer una comparación de adicional === true, ya que la condición dentro de nuestro if resuelve todo a true o false, por lo tanto con ingresar simplemente el parámetro alcanzara para que nuestro código sepa si debe o no agregar el monto correspondiente a cada adicional.
  //al ser 6 adicionales que todos deben verificarse y pueden o no estar en simultáneo, lo mejor es verificar cada uno por separado y que nuestro código analice una por una, pero lo haga con todas, en caso de que alguna de las 6 sea false, simplemente no ingresara al bloque de código de esa sentencia.
  if (queso) {
    total += 20;
  }
  if (tomate) {
    total += 15;
  }
  if (lechuga) {
    total += 10;
  }
  if (cebolla) {
    total += 15;
  }
  if (mayonesa) {
    total += 5;
  }
  if (mostaza) {
    total += 5;
  }
  //finalmente retornamos nuestro mensaje de salida con el valor final.
  return "El total a pagar es de: $" + total;
}
console.log(creadorSandwich("pollo", "blanco", true, false, true, true, false, true));

/* -------------------------------------------------------------------------- */

//Extra Bonus

/* 
¿Cual es el número secreto?

Creemos una función que reciba un parámetro numérico, y verifique si el mismo es el número secreto. El número secreto deberá ser seleccionado de manera random de entre 1 y 10 (investiga que hace la función Math.random()), en caso de ser correcto retorna un mensaje felicitando al usuario, y en caso de que no acierte, retorna un mensaje de aliento junto con el número ingresado y el secreto.


Math.random(): elige de manera aleatoria un numero entre los numeros que nosotros le pasemos como argumento.

 */

function numeroSecreto(miNumero) {
  let secretNum = Math.floor(Math.random() * 10) + 1;
  //generamos un nuemro secreto de manera random
  //Math.random() elige de manera aleatoria un numero entre 0 y 1, como hay infinitos y nosotros necesitamos que sea entre 1 y 10
  //utilizamos Math.floor() para redondear el nuemero y que sea un numero entero, y lo multiplicamos por 10 para que sea un entero entre 0 y 9, luego le sumamos uno para que finalmente sea entre 1 y 10
  if (typeof miNumero !== "number") {
    // typeof seguido de alguna variable o valor, nos va a devolver un string, indicando de que tipo es el valor a la derecha de typeof
    //nos aseguramos de que sean numeros ingresados, retornando un mensaje de error en caso de que no lo sea
    return "Error, el elemento debe ser de tipo numero, por favor reintente.";
  } else if (miNumero === secretNum) {
    //si el numero coincide con el secreto, lo felicitamos.
    return "Felicidades, adivino el numero secreto!!";
  } else {
    //si el numero no coincide, generamos el mensaje de aliento con los numeros concatenados
    //los parentesis al lado del return se utilizan cuando por ejemplo en este caso retornamos una sola linea de texto pero la tenemos escrita en varias lineas de codigo para tener un formato mas ordenado. (suele generarse automaticamente con algun code formatter como el "prettier")
    return (
      "Lo sentimos, su numero ingresado: " +
      miNumero +
      " difiere del numero secreto: " +
      secretNum +
      ". Intentelo nuevamente!!"
    );
  }
}

/* 
abrirParacaidas()

Crea una función llamada abrirParacaidas(), la cual recibe dos parámetros: velocidadEnKm y alturaEnMetros. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo siguiente:
La velocidad debe ser menor a 1000 km/h
La altura debe ser mayor o igual a 2000m y menor a 3000m
 */

function abrirParacaidas(velocidad, altura) {
  if (velocidad < 1000) {
    //verificamos primero la velocidad ya que deben cumplirse ambos vasos, si la velocidad no corresponde ya no nos importa el resto.
    if (altura >= 2000 && altura < 3000) {
      //dentro de la velocidad correcta ahora si verificamos que coincida la altura con la que corresponde, caso contrario salimos del programa
      return "Abriendo Paracaídas...";
    } else {
      return (
        "La altura debe encontrarse entre 2000 y 3000 metros de altura. Actual: " +
        altura +
        "m"
      );
    }
  } else {
    return (
      "la velocidad debe ser menor a 1000 km/h. velocidad actual: " +
      velocidad +
      " km/h"
    );
  }
}

//Estructura switch

/* Traductor Condicional

Usando la estructura switch, crea un programa en el que, si un usuario ingresa "casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés. 
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe que la palabra ingresada es incorrecta.
 */

function traductorCondicional(str) {
  switch (str) {
    case "casa":
      return "house";
    //en el caso de switch cases en funciones no es necesario utilizar break, ya que el return cumple la misma función
    case "perro":
      return "dog";
    case "arbol":
      return "tree";
    case "pelota":
      return "ball";
    case "genio":
      return "genie";


    default:
      return "Por favor ingrese una palabra válida en español";
  }
}
/* 
Valoración de Películas

Usando la estructura switch, pedile al usuario que valore la película que acaba de ver en:
Muy Mala.
Mala.
Mediocre.
Buena.
Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras por su valoración.
Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor inválido".
Cuando el usuario haya valorado la película, agradecele su visita.
 */

function valoracionDePeliculas(valoracion) {
  switch (valoracion) {
    //cuando los casos a evaluar son distintos pero tienen la misma resolución podemos agruparlos de la siguiente manera.
    case "muy mala":
    case "mala":
    case "mediocre":
      return `Calificaste a la película como ${valoracion}, lo sentimos mucho. Gracias por habernos visitado, que tengas buen dia!!`;
    //una forma mas practica de concatenar código dentro de strings, se utilizan las comillas literales `` y cada vez que se quiere ingresar codigo, ya sea variables o cualquier otra cosa se utiliza el signo $ seguido de llaves {}, y dentro de las mismas van las variables o código.
    case "buena":
    case "muy buena":
      return `Calificaste a la película como ${valoracion}, nos alegra que la hayas disfrutado!!. Gracias por habernos visitado, que tengas buen dia!!`;
    default:
      return "Ingresaste un valor inválido";
  }
}
