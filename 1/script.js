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

    agregarProducto(nombre) {
        const precioAleatorio = this.generarPrecioAleatorio();
        const nuevoProducto = new Producto(nombre, precioAleatorio);
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

    generarPrecioAleatorio() {
        return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    }

    retirarProducto(nombre) {
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
        while (actual !== null) {
            const li = document.createElement('li');
            li.innerHTML = `Producto: ${actual.producto.nombre}, Precio: $${actual.producto.precio} 
                            <button class="retirar-btn" onclick="listaProductos.retirarProducto('${actual.producto.nombre}')">Retirar</button>`;
            lista.appendChild(li);
            actual = actual.siguiente;
        }

        document.getElementById('cantidadDisponibles').textContent = `Cantidad de productos disponibles: ${this.contarProductos()}`;
    }

    contarProductos() {
        let actual = this.inicio;
        let contador = 0;
        while (actual !== null) {
            contador++;
            actual = actual.siguiente;
        }
        return contador;
    }

    mostrarProductosRetirados() {
        const listaRetirados = document.getElementById('listaProductosRetirados');
        listaRetirados.innerHTML = '';

        let actual = this.inicioRetirados;
        while (actual !== null) {
            const li = document.createElement('li');
            li.textContent = `Producto: ${actual.producto.nombre}, Precio: $${actual.producto.precio}`;
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

        if (nombre) {
            listaProductos.agregarProducto(nombre);
        } else {
            alert('Por favor, ingrese un nombre de producto.');
        }
    });
});
