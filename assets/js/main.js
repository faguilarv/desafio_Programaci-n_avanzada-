//importamos desde las otros archivos js
import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './animales.js'
import { obtenerImagenes } from './datos.js';

(function () {
    // Función para validar el formulario antes de enviarlo
    function validarFormulario() {
        var animal = document.querySelector('#animal').value;
        var edad = document.querySelector('#edad').value;
        var comentarios = document.querySelector('#comentarios').value;

        if (!animal || animal === 'Seleccione un animal') {
            alert('Por favor, seleccione un animal antes de agregar.');
            return false;
        }

        if (!edad || edad === 'Seleccione un rango de años') {
            alert('upps , seleccione un rango de edad antes de agregar.');
            return false;
        }

        if (!comentarios.trim()) {
            alert('Recuerde ingresar comentarios antes de agregar.');
            return false;
        }

        return true;
    }
    //fin validación formulario

    //Aqui manejamos los archivos desde el DOM y validamos el form al escuchar el evento click
    document.addEventListener('DOMContentLoaded', () => {
        const btnRegistrar = document.querySelector('#btnRegistrar')
        btnRegistrar.addEventListener('click', () => {
            if (validarFormulario()) {
                registrarAnimal()
            }
        })
    });

    function registrarAnimal() {
        const nombre = document.querySelector('#animal').value
        const edad = document.querySelector('#edad').value
        const comentarios = document.querySelector('#comentarios').value

        //creamos la instancia, switchamos al animal  que seleccionemos para investigar
        let animal;
        switch (nombre) {
            case 'Leon':
                animal = new Leon(nombre, edad, './assets/img/Leon.png', comentarios, './assets/sounds/rugido.mp3')
                break;

            case 'Lobo':
                animal = new Lobo(nombre, edad, './assets/img/lobo.jpg', comentarios, './assets/sounds/aullido.mp3')
                break;

            case 'Oso':
                animal = new Oso(nombre, edad, './assets/img/oso.jpg', comentarios, './assets/sounds/gruñido.mp3')
                break;

            case 'Serpiente':
                animal = new Serpiente(nombre, edad, './assets/img/serpiente.jpg', comentarios, './assets/sounds/siseo.mp3')
                break;

            case 'Aguila':
                animal = new Aguila(nombre, edad, './assets/img/aguila.png', comentarios, './assets/sounds/chillido.mp3')
                break;

            default:
                console.error('Seleccione un animal de la lista');
                return;
        }

        //Actualizar Preview
        const preview = document.querySelector('#preview');
        preview.innerHTML = ''; // Limpiar el contenido previo del preview
        const imgPreview = document.createElement('img');
        imgPreview.src = animal.getImg();
        imgPreview.classList.add('img-fluid', 'preview-img');
        preview.appendChild(imgPreview);
        //preview

        // Agregamos el animal seleccionado a la tabla para mostrar.
        agregarAnimalTabla(animal)

        // Reproducir el sonido del animal
        reproducirSonidoAnimal(animal.getSonido());
    }

    // Función para reproducir el sonido del animal
    function reproducirSonidoAnimal(rutaSonido) {
        const player = document.getElementById('player');
        player.src = rutaSonido;
        player.play();

        //sounds
    }

    function agregarAnimalTabla(animal) {
        const animalesDiv = document.querySelector('#Animales')
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card', 'm-2')

        const img = document.createElement('img')
        img.src = animal.getImg()
        img.classList.add('card-img-top')
        img.addEventListener('click', () => mostrarDetalleAnimal(animal))

        const cardBodyDiv = document.createElement('div')
        cardBodyDiv.classList.add('card-body')

        const nombre = document.createElement('h5')
        nombre.classList.add('card-title')

        const edad = document.createElement('p')
        edad.classList.add('card-text')
        edad.textContent = `Edad: ${animal.getEdad()}`

        cardBodyDiv.appendChild(nombre);
        cardBodyDiv.appendChild(edad);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);

        animalesDiv.appendChild(cardDiv);
    }

    function mostrarDetalleAnimal(animal) {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
            <h5>${animal.getNombre()}</h5>
            <p>Edad: ${animal.getEdad()}</p>
            <p>Comentarios: ${animal.setComentarios()}</p>
        `;

        $('#exampleModal').modal('show');
    }
})();


