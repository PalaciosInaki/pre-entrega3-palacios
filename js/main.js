
/* const mostrarProductos = () => {
    let listaProductos = "Productos Disponibles:\n";
    productos.forEach(producto => {
        listaProductos += `${producto.id}: ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(listaProductos);
};

const agregarAlCarrito = (idProducto, cantidad) => {
    // Busco producto por id
    const productoEncontrado = productos.find(producto => producto.id === idProducto);

    if (productoEncontrado && cantidad > 0) {
        carrito.push({
            id: productoEncontrado.id,
            nombre: productoEncontrado.nombre,
            precio: productoEncontrado.precio,
            cantidad: cantidad
        });
        if(cantidad > 1){
            console.log(`Se añadio ${cantidad} unidades de ${productoEncontrado.nombre} al carrito.`);
        }else{
            console.log(`Se añadio ${cantidad} unidad de ${productoEncontrado.nombre} al carrito.`);
        }
    } else {
        console.log("El producto no existe o cantidad invalida.");
    }
};


const calcularTotal = () => {
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });

    return total;
};


const seleccionProductos = () => {

    let continuar = true;

    while (continuar) {
        mostrarProductos();

        //Entrada del usuario
        const idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));
        const cantidad = parseInt(prompt("Ingrese la cantidad de unidades:"));

        agregarAlCarrito(idProducto, cantidad);

        continuar = confirm ("Desea agregar mas productos al carrito?");
    }

    alert(`Total de su compra: $${calcularTotal()}`);

};  */


/* seleccionProductos(); */

const carrito = [];


const contenedorProductos = document.getElementById('listaProductos');
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");



productos.forEach((producto) => {
    let cardProducto = document.createElement('div');
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
    comprar.innerText = "comprar"
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

    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML= `
       <h1 class="modal-header-title">Carrito</h1>
    `;

    modalContainer.append(modalHeader)

    const modalbutton = document.createElement ("button")
    modalbutton.innerText = "X"
    modalbutton.className = "modal-header-button"

    modalHeader.append(modalbutton);


    carrito.forEach((producto) => {

        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
           <img src="${producto.img}">
           <h3>${producto.nombre}</h3>
           <p>Precio: $${producto.precio}</p>

        `;

        modalContainer.append(carritoContent);
    });

});






