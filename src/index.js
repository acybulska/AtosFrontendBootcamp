import { refresh, addNewVehicle } from './vehicle';

const main = () => {
    let submit = document.getElementById("submit")
    submit.addEventListener("click", () => addNewVehicle());    
    // let engineCap = document.getElementById("engineCap")
    // let vehicleType = document.getElementById("vehicleType")
    // vehicleType.addEventListener("change", () => { (vehicleType === "1" || vehicleType === "3") ? engineCap.disabled = false : engineCap.disabled = true });
    refresh();
}

main();
