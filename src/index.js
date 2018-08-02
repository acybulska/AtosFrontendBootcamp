import { refresh, addNewCar } from './car';
import fleet from './fleet';
import Car from './car.class';

const main = () => {
    let submit = document.getElementById("submit")
    submit.addEventListener("click",() => addNewCar());
    refresh();
}

main();
