document.addEventListener("DOMContentLoaded", function () {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const contadorCarrito = document.getElementById("contador-carrito");
    const galeria = document.querySelector(".galeria");
    const mensaje = document.getElementById("mensaje");
    const limpiarCarritoBtn = document.getElementById("limpiar-carrito");

    galeria.addEventListener("click", function (event) {
      if (event.target.classList.contains("btn")) {
        const producto = event.target.parentElement.querySelector(".product-name").textContent;
        const precio = parseFloat(event.target.parentElement.querySelector(".product-price").textContent.replace("$", ""));
        agregarProductoAlCarrito(producto, precio);
        mostrarMensaje(`"${producto}" agregado al carrito`);
      }
    });

    limpiarCarritoBtn.addEventListener("click", function () {
      carrito.length = 0; 
      actualizarCarrito();
      mostrarMensaje("Carrito limpiado");
    });

    function agregarProductoAlCarrito(nombre, precio) {
      const productoEnCarrito = carrito.find((item) => item.nombre === nombre);
      if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
      } else {
        carrito.push({ nombre, precio, cantidad: 1 });
      }

      actualizarCarrito();
    }

    function actualizarCarrito() {
      const mensajesDiv = document.getElementById("mensajes");
      mensajesDiv.innerHTML = "";
      let totalCarrito = 0; 

      contadorCarrito.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);

      carrito.forEach((item) => {
        const itemHTML = document.createElement("div");
        itemHTML.classList.add("carrito-item");
        itemHTML.innerHTML = `
            <span class="carrito-nombre">${item.nombre}</span>
            <div class="carrito-precio">Precio Unitario: $${item.precio.toFixed(2)}</div>
            <div class="carrito-cantidad">Cantidad: ${item.cantidad}</div>
            <div class="carrito-cantidad">Total ${item.nombre}: $${item.precio.toFixed(2)*item.cantidad}</div>
        `;
        mensajesDiv.appendChild(itemHTML);

        const subtotal = item.precio * item.cantidad;
        totalCarrito += subtotal;
      });

      const totalCarritoElement = document.createElement("div");
      totalCarritoElement.classList.add("carrito-total");
      totalCarritoElement.innerHTML = `
        <span>Total General:</span>
        <span class="carrito-precio">$${totalCarrito.toFixed(2)}</span>
      `;
      mensajesDiv.appendChild(totalCarritoElement);

      localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function mostrarMensaje(mensajeTexto) {
      mensaje.textContent = mensajeTexto;
      setTimeout(() => {
        mensaje.textContent = "";
      }, 3000);
    }

    actualizarCarrito();
  });


