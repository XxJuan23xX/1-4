class Palabra {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class NodoPalabra {
    constructor(palabra) {
        this.palabra = palabra;
        this.siguiente = null;
    }
}

class ListaPalabras {
    constructor(letra) {
        this.letra = letra;
        this.inicio = null;
    }

    agregarPalabra(palabra) {
        const nuevoNodo = new NodoPalabra(palabra);
        if (this.inicio === null) {
            this.inicio = nuevoNodo;
        } else {
            let actual = this.inicio;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    mostrarPalabras(elementoDOM) {
        elementoDOM.innerHTML = '';
        let actual = this.inicio;
        while (actual !== null) {
            const li = document.createElement('li');
            li.textContent = actual.palabra.nombre;
            elementoDOM.appendChild(li);
            actual = actual.siguiente;
        }
    }
}

class NodoLista {
    constructor(lista) {
        this.lista = lista;
        this.siguiente = null;
    }
}

class ListaDeListas {
    constructor() {
        this.inicio = null;
    }

    agregarPalabra(palabra) {
        const letra = palabra.charAt(0).toUpperCase();
        let actual = this.inicio;

        while (actual !== null) {
            if (actual.lista.letra === letra) {
                actual.lista.agregarPalabra(new Palabra(palabra));
                return;
            }
            actual = actual.siguiente;
        }

        const nuevaLista = new ListaPalabras(letra);
        nuevaLista.agregarPalabra(new Palabra(palabra));
        const nuevoNodo = new NodoLista(nuevaLista);

        if (this.inicio === null) {
            this.inicio = nuevoNodo;
        } else {
            actual = this.inicio;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    mostrarListas(elementoDOM) {
        elementoDOM.innerHTML = '';
        let actual = this.inicio;
        while (actual !== null) {
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            h3.textContent = `Lista de palabras que inician con "${actual.lista.letra}":`;
            div.appendChild(h3);

            const ul = document.createElement('ul');
            actual.lista.mostrarPalabras(ul);
            div.appendChild(ul);
            elementoDOM.appendChild(div);
            actual = actual.siguiente;
        }
    }
}

const listaDeListas = new ListaDeListas();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("agregarBtn").addEventListener("click", () => {
        const palabra = document.getElementById('palabraInput').value;

        if (palabra) {
            listaDeListas.agregarPalabra(palabra);
            listaDeListas.mostrarListas(document.getElementById('resultado'));
            document.getElementById('palabraInput').value = '';
        } else {
            alert('Por favor, ingrese una palabra.');
        }
    });
});
