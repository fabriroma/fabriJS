function saludar() {
    let iniciar = "";

    while (iniciar.toLowerCase() !== "ok") {
        iniciar = prompt("Ingrese 'ok' para comenzar:").toLowerCase();
    }
}

saludar();

function compraVirtual () {
    let opcion = 0;

    while (opcion !== 1 && opcion !== 2) {
        opcion = parseInt(prompt("Elija una opción:\n1-Comprar dólares\n2-Comprar criptomonedas"));
    }

    if (opcion === 1) {
        comprarDolares();
    } else if (opcion === 2) {
        comprarCripto();
    }
}

function comprarDolares() {
    let opcion2 = 0;

    while (opcion2 !== 1 && opcion2 !== 2) {
        opcion2 = parseInt(prompt("Eligió comprar dólares. ¿Cuánto le gustaría comprar? :\n1- +100\n2- -100"));
    }

    if (opcion2 === 1) {
        alert("Ingrese el monto");
    } else if (opcion2 === 2) {
        alert("Ingrese el monto");
    }
}

function comprarCripto() {
    let opcion1 = prompt("Eligió comprar criptomoneda. ¿Está seguro/a de la operacion? (si/no)").toLowerCase();

    if (opcion1 === "si") {
        alert("Eligió sí, ingrese cuánto desea comprar");
    } else if (opcion1 === "no") {
        alert("volver a ingresar");
    }
}

let nombreCliente = prompt("Por favor, escriba su nombre");
alert("Bienvenido/a " + nombreCliente);


compraVirtual();

let valor;
let total= 0;
let continuar= "si";

while (continuar == "si"){
    valor = +prompt ("Por favor, ingrese el monto:");
    valor = +prompt ("Por favor, confirme el monto:");
    total = total + valor;
    continuar = prompt ("Desea continuar comprando? si/no");
}

alert ('El monto total es de $' + total);