import fleet from './fleet';
import Car from './car.class';

export const  generateList = (arr) => {
    return `<div style="display: grid; grid-template-columns: 33% 33% 33%;">
    ${arr.map(item => item.listItem())
        .join("")}</div>`
};

export const addNewCar = () => {
    let newCar = new Car(
        document.getElementById("brand").value,
        document.getElementById("model").value,
        document.getElementById("price").value,
        document.getElementById("year").value,
        document.getElementById("condition").value,
        document.getElementById("color").value
    );
    fleet.unshift(newCar);
    clearInputs();
    refresh();
};

export const refresh = () => {
    let main = document.getElementById("main");
    main.innerHTML = generateList(fleet);
    deleteCars();
    // changeYear();
    toggleSettings();
}

export const deleteCars = () => {
    fleet.map(car => {
        let button = document.getElementById(car.deleteButtonId);
        button.addEventListener("click", () => deleteCar(car.id) + refresh())
    });
};

export const deleteCar = id => {
    fleet.splice(fleet.findIndex(car => car.id === id), 1);
}

export const clearInputs = () => {
    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("price").value = "";
    document.getElementById("year").value = "";
    document.getElementById("condition").value = "";
    document.getElementById("color").value = "";
};

export const toggleSettings = () => {
    fleet.map(car => {
        let button = document.getElementById(car.settingsButtonId);
        button.addEventListener("click", () => car.toggleSettings())
    });
}

// export const changeYear = () => {
//     fleet.map(car => {
//         let button = document.getElementById(car.buttonYearId);
//         button.addEventListener("click", () => car.changeYear() + refresh());
//     });
// };
