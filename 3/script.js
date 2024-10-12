
class NodoAlumno {
    constructor(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
        this.siguiente = null; 
    }
}

class ListaAlumnos {
    constructor() {
        this.inicio = null; 
    }

    agregarAlumno(nombre, calificacion) {
        const nuevoAlumno = new NodoAlumno(nombre, calificacion);

        if (this.inicio === null) {
            this.inicio = nuevoAlumno; 
        } else {
            let actual = this.inicio;
            while (actual.siguiente !== null) {
                actual = actual.siguiente; 
            }
            actual.siguiente = nuevoAlumno; 
        }
    }

    mostrarAlumnos(elementoDOM) {
        elementoDOM.innerHTML = ''; 

        let actual = this.inicio;
        while (actual !== null) {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${actual.nombre}, Calificación: ${actual.calificacion}`;
            elementoDOM.appendChild(li);
            actual = actual.siguiente;
        }
    }
}

const listaAprobados = new ListaAlumnos();
const listaReprobados = new ListaAlumnos();

function agregarAlumno() {
    const nombre = document.getElementById('nombreAlumno').value;
    const calificacion = parseFloat(document.getElementById('calificacionAlumno').value);

    if (nombre && !isNaN(calificacion)) {
        if (calificacion >= 7) {
            listaAprobados.agregarAlumno(nombre, calificacion); 
        } else {
            listaReprobados.agregarAlumno(nombre, calificacion); 
        }

        listaAprobados.mostrarAlumnos(document.getElementById('listaAprobados'));
        listaReprobados.mostrarAlumnos(document.getElementById('listaReprobados'));
    } else {
        alert('Por favor, ingrese un nombre válido y una calificación.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("agregarBtn").addEventListener("click", agregarAlumno);
});
