
// Cerrar ventanda
document.querySelector("#botonCerrar").addEventListener("click", (e)=>
 {
 // document.querySelector("#ventana").removeAttribute("open"); JS
   document.querySelector("#ventana").close();
 }
)
// alert("PRUEBA")
document.querySelector("#mostrarVentana").addEventListener("click", (e)=>
  {
    // document.querySelector("#ventana").removeAttribute("open"); JS
      document.querySelector("#ventana").show();
   }
  )
   