
class ListaProductos {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, precio) {
        const nuevoProducto = { nombre, precio: parseFloat(precio) };
        this.productos.push(nuevoProducto);
        this.mostrarProductos();
    }

    eliminarProducto(nombre) {
        const index = this.productos.findIndex(producto => producto.nombre === nombre);
        if (index !== -1) {
            this.productos.splice(index, 1);
            this.mostrarProductos();
        } else {
            alert('Producto no encontrado.');
        }
    }

    mostrarProductos() {

        this.productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

        const lista = document.getElementById('listaProductos');
        lista.innerHTML = ''; 
        let totalCosto = 0;

        this.productos.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `Producto: ${producto.nombre}, Precio: $${producto.precio.toFixed(2)}`;
            lista.appendChild(li);

            totalCosto += producto.precio;
        });

        document.getElementById('totalCosto').textContent = `Costo Total: $${totalCosto.toFixed(2)}`;
    }
}

const listaProductos = new ListaProductos();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("agregarBtn").addEventListener("click", () => {
        const nombre = document.getElementById('nombreProducto').value;
        const precio = document.getElementById('precioProducto').value;

        if (nombre && !isNaN(precio) && precio > 0) {
            listaProductos.agregarProducto(nombre, precio);
        } else {
            alert('Por favor, ingrese un nombre válido y un precio mayor que 0.');
        }
    });

    document.getElementById("eliminarBtn").addEventListener("click", () => {
        const nombre = document.getElementById('nombreEliminar').value;

        if (nombre) {
            listaProductos.eliminarProducto(nombre);
        } else {
            alert('Por favor, ingrese el nombre del producto que desea eliminar.');
        }
    });
});
