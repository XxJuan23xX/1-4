
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class ListaProductos {
    constructor() {
        this.productos = [];
        this.productosRetirados = [];
    }

    agregarProducto(nombre) {
        const precioAleatorio = this.generarPrecioAleatorio();
        const nuevoProducto = new Producto(nombre, precioAleatorio);
        this.productos.push(nuevoProducto);
        this.mostrarProductos();
    }
    generarPrecioAleatorio() {
        return Math.floor(Math.random() * (100 - 10 + 1)) + 10; 
    }

    retirarProducto(index) {
        const productoRetirado = this.productos.splice(index, 1)[0];
        this.productosRetirados.push(productoRetirado);
        this.mostrarProductos();
        this.mostrarProductosRetirados();
    }

    mostrarProductos() {
        const lista = document.getElementById('listaProductos');
        lista.innerHTML = ''; 

        this.productos.forEach((producto, index) => {
            const li = document.createElement('li');
            li.innerHTML = `Producto: ${producto.nombre}, Precio: $${producto.precio} 
                            <button class="retirar-btn" onclick="listaProductos.retirarProducto(${index})">Retirar</button>`;
            lista.appendChild(li);
        });
        document.getElementById('cantidadDisponibles').textContent = `Cantidad de productos disponibles: ${this.productos.length}`;
    }

    mostrarProductosRetirados() {
        const listaRetirados = document.getElementById('listaProductosRetirados');
        listaRetirados.innerHTML = ''; 

        this.productosRetirados.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `Producto: ${producto.nombre}, Precio: $${producto.precio}`;
            listaRetirados.appendChild(li);
        });

        
        document.getElementById('cantidadRetirados').textContent = `Cantidad de productos retirados: ${this.productosRetirados.length}`;
    }
}

const listaProductos = new ListaProductos();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("agregarBtn").addEventListener("click", () => {
        const nombre = document.getElementById('nombreProducto').value;

        if (nombre) {
            listaProductos.agregarProducto(nombre);
        } else {
            alert('Por favor, ingrese un nombre de producto.');
        }
    });
});
