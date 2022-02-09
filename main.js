
/* *** TIPO DE DATO NULL Y UDIFINED ***
let variableExistente= null; // tipo Objeto
let variableNoExistente = undefined;    // tipo indefinido

console.log(typeof (variableExistente));
console.log(typeof (variableNoExistente));*/

/* *** TIPO DE DATO BOOLEAN ***
let soySuProfesor = true;
let soyUnEstudiante = false;

console.log (`Verdadero: ${soySuProfesor} Falso: ${soyUnEstudiante}`) 
*/

/* *** TIPO DE DATOS NUMBER ***
let edad = 45;
let altura = 1.75;
let moneda = Intl.NumberFormat("de-DE", {style: "currency", currency: "COP"}).format(1000);
console.log(`
    Edad:${edad},
    Altura:${altura},
    Moneda:${moneda}
\n`);  */

/* *** TIPO DE DATOS STRING  ***
let primerNombre = "William";
let segundoNombre = '';
let apellidos = `Rojas Rojas`;

console.log(primerNombre,segundoNombre,apellidos);
console.log(primerNombre+""+segundoNombre+' "'+apellidos+"\n'"+'"');
console.log(primerNombre+' "'+"'"+toString(555).value+"\\n'"+'"')
console.log(primerNombre.concat(apellidos)); // solo para string
console.log(`${primerNombre} "'${apellidos}'"`);

-/- Dato almacenado en la cache del navegador 'localstorage' ***
localStorage.setItem("Dato","libro de cocina");
let recuperar = localStorage.getItem("Dato");
console.log(recuperar); 

-/- Contantes en JS
const libros = "Libro de Cocina";
let libros = "Matemática";
console.log(libros);

-/- Declaracion de tipo de datos heredado del objeto
let numero = new Number (1000000);
let nombre = new String ('Hola');
console.log (numero);
console.log (nombre);

*/



   