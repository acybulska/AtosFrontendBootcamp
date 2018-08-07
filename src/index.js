import { refresh, addNewClient } from './client';

const main = () => {
    let submit = document.getElementById("submit")
    submit.addEventListener("click", () => addNewClient());
    refresh();
}

main();
