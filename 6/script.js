class NodoCaracter {
    constructor(caracter) {
        this.caracter = caracter;
        this.siguiente = null;
    }
}

class ListaCaracteres {
    constructor() {
        this.inicio = null;
    }

    agregarCaracter(caracter) {
        const nuevoNodo = new NodoCaracter(caracter);
        if (!this.inicio) {
            this.inicio = nuevoNodo;
        } else {
            let actual = this.inicio;
            while (actual.siguiente) actual = actual.siguiente;
            actual.siguiente = nuevoNodo;
        }
    }

    invertir() {
        let actual = this.inicio;
        let cadenaInvertida = '';

        while (actual) {
            cadenaInvertida = actual.caracter + cadenaInvertida;
            actual = actual.siguiente;
        }

        return cadenaInvertida;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("invertirBtn").addEventListener("click", () => {
        const palabra = document.getElementById('palabraInput').value;

        if (palabra) {
            const listaCaracteres = new ListaCaracteres();
            for (let i = 0; i < palabra.length; i++) {
                listaCaracteres.agregarCaracter(palabra.charAt(i));
            }
            const palabraInvertida = listaCaracteres.invertir();
            document.getElementById('resultado').textContent = `Palabra invertida: ${palabraInvertida}`;
            document.getElementById('palabraInput').value = '';
        } else {
            alert('Por favor, ingrese una palabra.');
        }
    });
});
