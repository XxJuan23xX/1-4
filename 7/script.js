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
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    esPalindromo() {
        let actual = this.inicio;
        let cadena = '';
        let longitud = 0;

        while (actual) {
            cadena += actual.caracter;
            longitud++;
            actual = actual.siguiente;
        }

        for (let i = 0; i < longitud / 2; i++) {
            if (cadena[i] !== cadena[longitud - 1 - i]) {
                return false;
            }
        }

        return true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const listaCaracteres = new ListaCaracteres();

    document.getElementById("verificarBtn").addEventListener("click", () => {
        const palabra = document.getElementById('palabraInput').value;

        if (palabra) {
            for (let i = 0; i < palabra.length; i++) {
                listaCaracteres.agregarCaracter(palabra.charAt(i));
            }
            const resultado = listaCaracteres.esPalindromo() ? 'Es un palíndromo' : 'No es un palíndromo';

        document.getElementById('resultado').textContent = resultado;
        document.getElementById('palabraInput').value = '';
        } else {
            alert('Por favor, ingrese una palabra.');
        }
    });
});
