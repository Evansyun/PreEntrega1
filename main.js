// Se piden los datos del usuario
let usuario = prompt("Bienvenido, ingrese su nombre");
let plata = parseFloat(prompt("Ingrese su capital de dinero en dólares"));
const modelos = [
    { make: "Ford", model: "Ka", price: 350 },
    { make: "Fiat", model: "Palio", price: 500 },
    { make: "Renault", model: "Clio", price: 700 },
    { make: "Citroen", model: "C3", price: 950 }
];
// Verificar que el capital ingresado sea un número válido

if (isNaN(plata) || plata <= 0) {
    alert("El capital ingresado no es válido.");
} else {
alert("Bienvenido " + usuario + ", su capital es de " + plata + " dólares. A continuación, se le mostrarán los autos en función de su capital disponible.");
}
function menuauto() {
let autosDisponibles = modelos.filter(auto => auto.price <= plata);
if (autosDisponibles.length === 0) {
alert("Su capital no es suficiente para comprar ningun auto.");
     return null;
    }
 let opciones = autosDisponibles.map((auto, index) => `${index + 1}. ${auto.make} ${auto.model} (${auto.price} USD)`).join("\n");
 opciones += "\n" + (autosDisponibles.length + 1) + ". Salir del menú";
 let autoElegido = parseInt(prompt("Seleccione un auto:\n" + opciones));
 if (isNaN(autoElegido) || autoElegido < 1 || autoElegido > autosDisponibles.length + 1) {
            alert("Opción no valida. Por favor, intente nuevamente");
            return "no"; // Indica que la opción elegida no es valida
    }

if (autoElegido === autosDisponibles.length + 1) {
            return null;
    }
let autoSeleccionado = autosDisponibles[autoElegido - 1];
    return autoSeleccionado;
    }
function transferencia(auto) {
        let opcion = prompt("¿Desea calcular la transferencia?\n1. Sí\n2. No");
if (opcion === "1") {
            let impuesto = auto.price * 0.05; // Calcula el 5% del valor del auto
            impuesto = Math.round(impuesto);
            alert("El valor de la transferencia sería de " + impuesto + " dólares.");
    } else if (opcion === "2") {
            alert("No se calculará el impuesto.");
    } else {
            alert("Opción no valida.");
    }
    }
let continuar = true;

while (continuar) {
        let resultado = menuauto();
        if (resultado === "no") {
            continue;
        } else if (resultado) { 
            transferencia(resultado);
            continuar = false; 
        } else {  
            continuar = false;
            alert("Gracias por usar nuestro servicio. Nos pondremos en contacto en breve");
        }
    }


