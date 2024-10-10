
class ListaAlumnos {
    constructor() {
        this.alumnosAprobados = [];
        this.alumnosReprobados = [];
    }

    agregarAlumno(nombre, calificacion) {
        if (calificacion >= 7) {
            this.alumnosAprobados.push({ nombre, calificacion });
        } else {
            this.alumnosReprobados.push({ nombre, calificacion });
        }
        this.mostrarAlumnos();
    }

    mostrarAlumnos() {
        const listaAprobados = document.getElementById('listaAprobados');
        const listaReprobados = document.getElementById('listaReprobados');
        
        listaAprobados.innerHTML = '';
        listaReprobados.innerHTML = '';

        this.alumnosAprobados.forEach(alumno => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${alumno.nombre}, Calificación: ${alumno.calificacion}`;
            listaAprobados.appendChild(li);
        });

        this.alumnosReprobados.forEach(alumno => {
            const li = document.createElement('li');
            li.textContent = `Nombre: ${alumno.nombre}, Calificación: ${alumno.calificacion}`;
            listaReprobados.appendChild(li);
        });
    }
}

const listaAlumnos = new ListaAlumnos();

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("agregarBtn").addEventListener("click", () => {
        const nombre = document.getElementById('nombreAlumno').value;
        const calificacion = parseFloat(document.getElementById('calificacionAlumno').value);

        if (nombre && !isNaN(calificacion)) {
            listaAlumnos.agregarAlumno(nombre, calificacion);
        } else {
            alert('Por favor, ingrese un nombre y una calificación válida.');
        }
    });
});
