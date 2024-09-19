const modelosJSON = `[
    {"make": "Ford", "model": "Ka", "price": 350},
    {"make": "Fiat", "model": "Palio", "price": 500},
    {"make": "Renault", "model": "Clio", "price": 700},
    {"make": "Citroen", "model": "C3", "price": 950}
]`;

const modelos = JSON.parse(modelosJSON);
const mensajeDiv = document.getElementById('mensaje');
const autosDiv = document.getElementById('autos');

function mostrarMensaje(mensaje) {
    mensajeDiv.textContent = mensaje;
}
function mostrarAutos(autos) {
    autosDiv.innerHTML = ''; 
    if (autos.length === 0) {
        mostrarMensaje("Su capital no es suficiente para comprar ningún auto.");
        return;
    }
    autos.forEach(auto => {
        const autoDiv = crearElementoAuto(auto);
        autosDiv.appendChild(autoDiv);
    });
}
function crearElementoAuto(auto) {
    const autoDiv = document.createElement('div');
    autoDiv.textContent = `${auto.make} ${auto.model} (${auto.price} USD)`;
    
    const botonCompra = document.createElement('button');
    botonCompra.textContent = "Comprar";
    botonCompra.onclick = () => transferencia(auto);
    
    autoDiv.appendChild(botonCompra);
    return autoDiv;
}
function transferencia(auto) {
    const opcion = prompt("¿Desea calcular la transferencia?\n1. Sí\n2. No");
    switch (opcion) {
        case "1":
            calcularImpuesto(auto.price);
            break;
        case "2":
            mostrarMensaje("No se calculará el impuesto.");
            break;
        default:
            mostrarMensaje("Opción no válida.");
    }
}

function calcularImpuesto(precio) {
    const impuesto = Math.round(precio * 0.05);
    mostrarMensaje(`El valor de la transferencia sería de ${impuesto} dólares.`);
}
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const usuario = document.getElementById('nombre').value;
    const plata = parseFloat(document.getElementById('capital').value);
    
    if (isNaN(plata) || plata <= 0) {
        mostrarMensaje("El capital ingresado no es válido.");
    } else {
        mostrarMensaje(`Bienvenido ${usuario}, su capital es de ${plata} dólares.`);
        const autosDisponibles = modelos.filter(auto => auto.price <= plata);
        mostrarAutos(autosDisponibles);
    }
});

