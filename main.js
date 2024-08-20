// Se piden los datos del usuario
let usuario = prompt("Bienvenido, ingrese su nombre");
let plata = parseFloat(prompt("Ingrese su capital de dinero en dólares")); // Convertir a número
alert("Bienvenido " + usuario + ", su capital es de " + plata + " dólares. A continuación, se le mostrarán los autos en función de su capital disponible.");
let auto = 0;
let salto = false

function menuauto() { 
    // Verificar si plata está en el rango de 350 a 700
    if (plata > 350 && plata < 701) {
        let autoelegido = parseInt(prompt("Debido a su capital se le ofrecen los siguientes vehículos:\n1. Ford Ka(350 USD)\n2. Fiat Palio(500 USD)\n3. Renault Clio(700 USD)\n4. Volver al menú"));
        if (autoelegido === 1) {
            auto = 350;
        } else if (autoelegido === 2) {
            auto = 500;
        } else if (autoelegido === 3) {
            auto = 700;
        } else if (autoelegido === 4 || isNaN(autoelegido)) {
            alert("Volverás al menú");
            salto = true
        }  
            
        } else { (plata <350)
            alert("Su capital no es suficiente");
            salto = true}
             }
         
      

function transferencia() { 
    while (plata >350) { 
// Se calcula el valor de la transferencia del auto
let opcion = prompt("¿Desea calcular la transferencia?\n1. Sí\n2. No");
if (opcion === "1") {
    let impuesto = auto * 0.05; // Calcula el 5% del valor del auto
    impuesto = Math.round(impuesto);
    alert("El valor de la transferencia sería de " + impuesto + " dólares.");
} else {
    alert("No se calculara el impuesto.");
}
}
 }

while (salto) {
    menuauto() 
    if (salto === true) { 
    alert("Su capital no es suficiente")
   
         } else (salto === false) 
         { 
            transferencia()
          }
        
}

menuauto();
transferencia();
