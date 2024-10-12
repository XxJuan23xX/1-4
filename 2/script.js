
class NodoNumero {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null; 
    }
}

class ListaNumeros {
    constructor() {
        this.inicio = null; 
    }

    agregarNumero(valor) {
        const nuevoNumero = new NodoNumero(valor);

        if (this.inicio === null) {
            this.inicio = nuevoNumero; 
        } else {
            let actual = this.inicio;
            while (actual.siguiente !== null) {
                actual = actual.siguiente; 
            }
            actual.siguiente = nuevoNumero; 
        }
    }

    mostrarNumeros(elementoDOM) {
        elementoDOM.innerHTML = ''; 

        let actual = this.inicio;
        while (actual !== null) {
            const li = document.createElement('li');
            li.textContent = actual.valor;
            elementoDOM.appendChild(li);
            actual = actual.siguiente;
        }
    }
}

const listaPares = new ListaNumeros();
const listaImpares = new ListaNumeros();

function generarNumeros() {
    for (let i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random() * 100); 

        if (numero % 2 === 0) {
            listaPares.agregarNumero(numero); 
        } else {
            listaImpares.agregarNumero(numero); 
        }
    }

    listaPares.mostrarNumeros(document.getElementById('listaPares'));
    listaImpares.mostrarNumeros(document.getElementById('listaImpares'));
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generarBtn").addEventListener("click", generarNumeros);
});
