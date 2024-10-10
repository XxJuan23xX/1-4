
class ListaNumeros {
    constructor() {
        this.numerosPares = [];
        this.numerosImpares = [];
    }

    generarNumeros() {
        this.numerosPares = [];
        this.numerosImpares = [];

        for (let i = 0; i < 10; i++) {
            let numero = Math.floor(Math.random() * 100);
            if (numero % 2 === 0) {
                this.numerosPares.push(numero);
            } else {
                this.numerosImpares.push(numero);
            }
        }
        this.mostrarNumeros();
    }
    mostrarNumeros() {
        const listaPares = document.getElementById('listaPares');
        const listaImpares = document.getElementById('listaImpares');
        
        listaPares.innerHTML = '';
        listaImpares.innerHTML = '';

        this.numerosPares.forEach(numero => {
            const li = document.createElement('li');
            li.textContent = numero;
            listaPares.appendChild(li);
        });

        this.numerosImpares.forEach(numero => {
            const li = document.createElement('li');
            li.textContent = numero;
            listaImpares.appendChild(li);
        });
    }
}

const listaNumeros = new ListaNumeros();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generarBtn").addEventListener("click", () => {
        listaNumeros.generarNumeros();
    });
});
