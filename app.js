
function saludar() {
    let iniciar = "";

    while (iniciar.toLowerCase() !== "ok") {
        iniciar = prompt("¡Bienvenido a nuestra tienda de ropa en línea! Ingrese 'ok' para comenzar:").toLowerCase();
    }
}

function comprarRopa() {
    let carrito = [];
    let continuarComprando = "si";

    while (continuarComprando === "si") {
        let producto = prompt("Seleccione un producto:\n1- Camisa\n2- Pantalón\n3- Zapatos\n4- Chaqueta");

        switch (producto) {
            case "1":
                carrito.push({ nombre: "Camisa", precio: 20 });
                break;
            case "2":
                carrito.push({ nombre: "Pantalón", precio: 30 });
                break;
            case "3":
                carrito.push({ nombre: "Zapatos", precio: 50 });
                break;
            case "4":
                carrito.push({ nombre: "Chaqueta", precio: 40 });
                break;
            default:
                alert("Opción no válida. Por favor, seleccione un producto válido.");
        }

        continuarComprando = prompt("¿Desea agregar más productos al carrito? (si/no)").toLowerCase();
    }

    return carrito;
}

function calcularTotal(carrito) {
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }

    return total;
}

function actualizarContadorCarrito() {
    const carritoGuardado = localStorage.getItem("carrito");
    const carrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];
    contadorCarrito.textContent = carrito.length;
}

function limpiarCarrito() {
    localStorage.removeItem("carrito");
    actualizarContadorCarrito();
    mensajeElement.textContent = "El carrito ha sido limpiado.";
}

function tiendaDeRopa() {
    saludar();
    let carrito = comprarRopa();

    if (carrito.length === 0) {
        alert("No ha seleccionado ningún producto. Gracias por visitarnos.");
    } else {
        alert("Productos seleccionados: ");
        for (let i = 0; i < carrito.length; i++) {
            alert(`${carrito[i].nombre} - Precio: $${carrito[i].precio}`);
        }

        let total = calcularTotal(carrito);
        alert(`El monto total de su compra es de $${total}. ¡Gracias por comprar en nuestra tienda de ropa en línea!`);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    const contadorCarrito = document.getElementById("contador-carrito");
    const limpiarCarritoBtn = document.getElementById("limpiar-carrito");
    const mensajeElement = document.getElementById("mensaje");


    limpiarCarritoBtn.addEventListener("click", limpiarCarrito);


    actualizarContadorCarrito();
}

tiendaDeRopa();



