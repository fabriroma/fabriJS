// Función para saludar al usuario
function saludar() {
    let iniciar = "";

    while (iniciar.toLowerCase() !== "ok") {
        iniciar = prompt("¡Bienvenido a nuestra tienda de ropa en línea! Ingrese 'ok' para comenzar:").toLowerCase();
    }
}

// Función para mostrar la tienda y permitir al usuario seleccionar productos
function comprarRopa() {
    let carrito = []; // Array para almacenar los productos seleccionados
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

// Función para calcular el total de la compra
function calcularTotal(carrito) {
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }

    return total;
}

// Función principal
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
}

tiendaDeRopa();
