document.addEventListener('DOMContentLoaded', () => {
    pintarProductos();
});

function pintarProductos() {
    const contenedorProductos = document.getElementById('lista-productos');
    contenedorProductos.innerHTML = ''; // Limpiamos el contenido actual del contenedor

    productos.forEach(producto => {
        let cardProducto = document.createElement('div');
        cardProducto.classList.add('col', 'mb-4');

        cardProducto.innerHTML = `
            <div class="card">
                <img src="imagen_del_producto.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
                </div>
            </div>
        `;

        contenedorProductos.appendChild(cardProducto);
    });
}