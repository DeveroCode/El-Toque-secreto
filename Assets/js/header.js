import data from '../../Assets/js/food.json' assert { type: "json" };

document.addEventListener('DOMContentLoaded', function () {
    startApp();
});

function startApp() {
    scrollHeader();
    scrollNav();
    getFoods();
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function scrollHeader() {
    const header = document.querySelector('#header');
    const enlaces = document.querySelectorAll('.link');
    const logo = document.querySelector('.logo');
    const guest = document.querySelector('#second-block');

    window.addEventListener('scroll', function () {
        // console.log(guest.getBoundingClientRect());
        if (guest.getBoundingClientRect().bottom < 832) {
            header.classList.add('stick', 'fixed-top', 'w-100', 'shadow', 'bg-white', 'text-warning');
            header.classList.remove('py-4');
            logo.classList.add('tag');
            logo.classList.remove('text-white');
            enlaces.forEach(enlace => {
                enlace.classList.add('tag');
                enlace.classList.remove('text-white');
            });
        } else {
            header.classList.remove('stick', 'fixed-top', 'w-100', 'shadow', 'bg-white', 'text-warning');
            logo.classList.remove('tag');
            logo.classList.add('text-white');
            enlaces.forEach(enlace => {
                enlace.classList.remove('tag');
                enlace.classList.add('text-white');
            });
        }
    });
}

export function getFoods() {
    const arrayFood = Object.values(data.comidas);

    arrayFood.forEach(element => {
        if (element.nombre === 'Pizza Italiana' || element.nombre === 'Ensalada griega' || element.nombre === 'Ensalada de mariscos' || element.nombre === 'Ensalada de salmon') {
            const card = document.createRange().createContextualFragment(`
            <div class="images text-center mt-6">
                <img src="${element.imagen}" alt="comida ${element.nombre}" class="img-fluid">
                <p class="mt-2 fs-2 fw-bold">${element.nombre}</p>
                <a href="#" class="mb-2 fs-4 text-uppercase text-primary">Ordena ahora!</a>
            </div>
            `)
            const main = document.querySelector('.container-foods   ');
            main.appendChild(card);

        }

    });
}