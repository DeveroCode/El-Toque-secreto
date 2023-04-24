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
        console.log(element);
    });
}
