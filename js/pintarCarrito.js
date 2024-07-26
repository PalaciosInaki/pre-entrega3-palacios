const pintarCarrito = () => {
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

        let eliminar= document.createElement("span");
        eliminar.innerText = "🗑️"
        eliminar.className = "eliminar-producto";
        carritoContent.append(eliminar);

    });

    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-container";
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    
    modalContainer.append(totalCompra);
}

verCarrito.addEventListener("click", pintarCarrito);
