import data from '../../Assets/js/food.json' assert { type: "json" };
document.addEventListener('DOMContentLoaded', () => {
    startApp();
});

function startApp() {
    getAllFoods();
}

function getAllFoods() {
    const arrayFood = Object.values(data.comidas);

    arrayFood.forEach(element => {
        const main = document.querySelector('.container-cards');

        const card = document.createRange().createContextualFragment(`
            <div class="mb-4 mb-lg-0 shadow col-md-3">
                <div class="card rounded shadow-sm border-0">
                    <img src="${element.imagen}" alt="imagen de ${element.nombre}" class="img-fluid img-size">
                    <div class="card-body p-4 text-center">
                        <h5 class="mb-2 fs-4 text-uppercase text-primary">
                            <a href="#" class="text-dark text-decoration-none">${element.nombre}</a>
                        </h5>
                        <p class="small text-muted font-italic">$${element.precio}</p>
                    </div>
                </div>
            </div>
        `);

        main.append(card);
    });
}
