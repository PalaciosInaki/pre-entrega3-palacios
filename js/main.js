
const contenedorProductos = document.getElementById('listaProductos');
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];


productos.forEach((producto) => {
    let cardProducto = document.createElement('div');
    cardProducto.className = "div-prod"
    cardProducto.innerHTML = `
        <div class="prod">
            <img src="${producto.img}">
            <h3 class="card-title">${producto.nombre}</h3>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-text">Precio: $${producto.precio}</p>
        </div>
     `;

    contenedorProductos.appendChild(cardProducto);

    let comprar = document.createElement("button")
    comprar.innerText = "COMPRAR"
    comprar.className = "comprar"

    cardProducto.append(comprar)


    comprar.addEventListener("click", () =>{
        carrito.push({
            id : producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
        });
    }) ; 
}); 












