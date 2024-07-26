
const carrito = [];


const contenedorProductos = document.getElementById('listaProductos');
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");



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




verCarrito.addEventListener("click", () =>{
    modalContainer.innerHTML = " ";
    modalContainer.style.display = "flex";

    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML= `
       <h1 class="modal-header-title">Carrito</h1>
    `;

    modalContainer.append(modalHeader)

    const modalbutton = document.createElement ("button")
    modalbutton.innerText = "X"
    modalbutton.className = "modal-header-button"

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);

    const modalContentContainer = document.createElement ("div")
    modalContentContainer.className = "modalContentContainer"

    modalContainer.append(modalContentContainer);



    carrito.forEach((producto) => {

        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
           <img src="${producto.img}">
           <h3>${producto.nombre}</h3>
           <p>Precio: $${producto.precio}</p>

        `;

        modalContentContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-container";
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    
    modalContainer.append(totalCompra);
});








