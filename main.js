const carrito = [];

const mostrarProductos = () => {
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

};


seleccionProductos();




