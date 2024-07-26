
const contenedorProductos = document.getElementById('listaProductos');
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const contadorCarrito = document.getElementById("contadorCarrito");

let carrito = JSON.parse(localStorage.getItem("compra")) || [];


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

        /* Verifico si el producto ya esta en el carrito */

        const productoRepetido = carrito.find(prod => prod.id === producto.id);
        
        if (productoRepetido){
            carrito.map((prod) => {
                if (prod.id === producto.id){
                    prod.cantidad++;
                }
            });

        }else{
            carrito.push({
                id : producto.id,
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
        }

        carritoCounter();
        guardadoLocal();
    }) ; 
}); 



/* //////// LOCAL STORAGE///////////// */

/* set */
const guardadoLocal = () =>{
    localStorage.setItem("compra", JSON.stringify(carrito))
}

/* get = se guarda lo que tengo en el local storage directamente en el carrito PRIMERA LINEA*/











