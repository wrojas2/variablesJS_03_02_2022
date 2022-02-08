console.log("Mensaje");
console.warn("Advertencia")
console.error("Error");
console.group("Agrupar Mensaje");

    let datos = [
        {nombre: "William", Edad: 45},
        {nombre: "Miguel", Edad: 23},
        {nombre: "Raul", Edad: 33},
        {nombre: "Juan Carlos", Edad: 36},
        {nombre: "Oscar", Edad: 29},
    ]
console.table(datos);
console.groupEnd();

console.log ("%c Personalizado", "color:blue;font-family:cursive;font-size:20px");


   