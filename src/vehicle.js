import fleet from './fleet';
import Car from './car.class';
import Motorcycle from './motorcycle.class';
import Truck from './truck.class';

export const generateList = (arr) => {
    // this.engineCap < 125 ? document.getElementById(this.id).style.border = '1px green solid' : '';

    return `<div style="display: grid; grid-template-columns: 33% 33% 33%;">
    ${arr.map(item => item.listItem())
            .join("")}</div>`
};

export const addNewVehicle = () => {
    let vType = document.getElementById("vehicleType");
    let newVehicle = null;
    switch (vType.value) {
        case "1": // car
            newVehicle = new Car(
                document.getElementById("brand").value,
                document.getElementById("model").value,
                document.getElementById("price").value,
                document.getElementById("year").value,
                document.getElementById("condition").value,
                document.getElementById("color").value,
                document.getElementById("engineCap").value);
            break;
        case "2": // truck
            newVehicle = new Truck(
                document.getElementById("brand").value,
                document.getElementById("model").value,
                document.getElementById("price").value,
                document.getElementById("year").value,
                document.getElementById("condition").value,
                document.getElementById("color").value,
                document.getElementById("capacity").value);
            break;
        case "3": // motorcycle
            newVehicle = new Motorcycle(
                document.getElementById("brand").value,
                document.getElementById("model").value,
                document.getElementById("price").value,
                document.getElementById("year").value,
                document.getElementById("condition").value,
                document.getElementById("color").value,
                document.getElementById("engineCap").value);
            break;
        default:
            console.log("No vehicle type picked");
    }
    newVehicle ? fleet.unshift(newVehicle) : console.log("Something went wrong");
    clearInputs();
    refresh();
};

export const refresh = () => {
    let main = document.getElementById("main");
    main.innerHTML = generateList(fleet);
    let total = fleet.reduce((a, b) => a.price + b.price, 0)
    document.getElementById("totalPrice").innerText = total.value;

    deleteVehicles();
    toggleSettings();
}

export const deleteVehicles = () => {
    fleet.map(vehicle => {
        let button = document.getElementById(vehicle.deleteButtonId);
        button.addEventListener("click", () => deleteVehicle(vehicle.id) + refresh())
    });
};

export const deleteVehicle = id => {
    fleet.splice(fleet.findIndex(vehicle => vehicle.id === id), 1);
}

export const clearInputs = () => {
    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("price").value = "";
    document.getElementById("year").value = "";
    document.getElementById("condition").value = "";
    document.getElementById("color").value = "#000000";
    document.getElementById("engineCap").value = "";
    document.getElementById("capacity").value = "";
};

export const toggleSettings = () => {
    fleet.map(vehicle => {
        let button = document.getElementById(vehicle.settingsButtonId);
        button.addEventListener("click", () => vehicle.toggleSettings())
    });
}
