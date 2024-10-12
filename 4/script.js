
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class NodoProducto {
    constructor(producto) {
        this.producto = producto; 
        this.siguiente = null; 
    }
}

class ListaProductos {
    constructor() {
        this.inicio = null;
        this.inicioRetirados = null; 
    }

    agregarProducto(nombre, precio) {
        const nuevoProducto = new Producto(nombre, parseFloat(precio));
        const nuevoNodo = new NodoProducto(nuevoProducto);

        if (this.inicio === null) {
            this.inicio = nuevoNodo; 
        } else {
            let actual = this.inicio;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo; 
        }
        this.mostrarProductos();
    }

    eliminarProducto(nombre) {
        if (this.inicio === null) return;

        let actual = this.inicio;
        let anterior = null;

        while (actual !== null && actual.producto.nombre !== nombre) {
            anterior = actual;
            actual = actual.siguiente;
        }

        if (actual !== null) {

            if (anterior === null) {
                this.inicio = actual.siguiente; 
            } else {
                anterior.siguiente = actual.siguiente; 
            }
            this.agregarRetirado(actual.producto); 
            this.mostrarProductos();
            this.mostrarProductosRetirados();
        } else {
            alert('Producto no encontrado.');
        }
    }

    agregarRetirado(productoRetirado) {
        const nuevoNodo = new NodoProducto(productoRetirado);
        if (this.inicioRetirados === null) {
            this.inicioRetirados = nuevoNodo; 
        } else {
            let actual = this.inicioRetirados;
            while (actual.siguiente !== null) {
                actual = actual.siguiente; 
            }
            actual.siguiente = nuevoNodo; 
        }
    }

    mostrarProductos() {
        const lista = document.getElementById('listaProductos');
        lista.innerHTML = ''; 

        let actual = this.inicio;
        let totalCosto = 0;

        while (actual !== null) {
            const li = document.createElement('li');
            li.textContent = `Producto: ${actual.producto.nombre}, Precio: $${actual.producto.precio.toFixed(2)}`;
            lista.appendChild(li);

            totalCosto += actual.producto.precio;
            actual = actual.siguiente;
        }

        document.getElementById('totalCosto').textContent = `Costo Total: $${totalCosto.toFixed(2)}`;
    }

    mostrarProductosRetirados() {
        const listaRetirados = document.getElementById('listaProductosRetirados');
        listaRetirados.innerHTML = ''; 

        let actual = this.inicioRetirados;
        while (actual !== null) {
            const li = document.createElement('li');
            li.textContent = `Producto: ${actual.producto.nombre}, Precio: $${actual.producto.precio.toFixed(2)}`;
            listaRetirados.appendChild(li);
            actual = actual.siguiente;
        }

        document.getElementById('cantidadRetirados').textContent = `Cantidad de productos retirados: ${this.contarRetirados()}`;
    }
    contarRetirados() {
        let actual = this.inicioRetirados;
        let contador = 0;
        while (actual !== null) {
            contador++;
            actual = actual.siguiente;
        }
        return contador;
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
