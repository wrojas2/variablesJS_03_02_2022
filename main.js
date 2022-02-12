
/* *** TIPO DE DATO SET *** 
const data = new Set(); // Solo acepta 5 datos
data.add("William");
data.add("Rojas")
console.log(data)
*/

/* *** TIPO DE DATO MAPS ***  
const lista = new Map ();
lista.set("Nombre","William" );
lista.set("Apellido","Rojas" );
console.log(lista.get("Nombre"));  // Nombre Variable
console.log(lista.has("Nombre"));  // Vr Verdadero o falso
console.log(lista.keys());
console.log(lista.values());
*/

/* *** TIPO DE DATO OBJETO ***
const informacion = {
    personal:{
        edad: 45,
        nombre:"William Rojas",
        altura:1.75
    },
    vivienda:
           {
        direccion: "Calle 17 # 1W -50",
        pais:"Colomnbia",
        departamento: "Santander"

    }, 
    mostrarEdad(){ 
        return `${this.personal.nombre}*${this.personal.edad}}`;
    }
};
informacion.personal.nombre = "William Rojas Rojas";
console.log(informacion.mostrarEdad());
console.log(informacion);  */

/* *** TIPO DE DATO NULL Y UNDIFINED ***
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



   