document.addEventListener('DOMContentLoaded', function () {
    startApp();
});

function startApp() {
    scrollHeader();
    scrollNav();
    foods();
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

async function obtenerDatosFoods() {
    const response = await fetch('../../Assets/js/food.json');
    const data = await response.json();
    return await Promise.resolve(data);
}


function foods() {
    obtenerDatosFoods().then(data => {
        data.comidas.forEach(food => {
            if (food.nombre === 'Pizza Italiana' || food.nombre === 'Ensalada griega' || food.nombre === 'Ensalada de mariscos' || food.nombre === 'Ensalada de salmon') {
                const father = document.querySelector('.food-images');
                const div = document.createElement('div');
                const img = document.createElement('img');
                const p = document.createElement('p');
                const a = document.createElement('a');

                p.textContent = food.nombre;
                img.src = food.imagen;
                img.alt = 'Imagen de' + ' ' + food.nombre;
                a.href = '#';
                a.textContent = 'Ordena ahora';

                div.classList.add('images', 'text-center', 'mt-6');
                p.classList.add('mt-2', 'fs-2', 'fw-bold');
                a.classList.add('mb-2', 'fs-4', 'text-uppercase', 'text-primary');

                div.appendChild(img);
                div.appendChild(p);
                div.appendChild(a);
                father.appendChild(div);
            }
        });
    });
}

function menuAll() {
    obtenerDatosFoods().then(data => {
        data.comidad.forEach(food => {
            console.log(food);
        })
    })
}


