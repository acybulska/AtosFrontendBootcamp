import Client from './client.class';
import sales from './sales';

export const generateTable = (arr) => {
    return `<tbody>
    ${arr.map(item => item.listItem())
            .join("")}</tbody>`
};

export const addNewClient = () => {
    let clientForm= document.getElementById("newClientForm");
    let newClient = new Client(clientForm["name"].value,clientForm["street"].value,clientForm["value"].value,clientForm["contact"].value,clientForm["city"].value);
    newClient ? sales.unshift(newClient) : console.log("Something went wrong");
};

export const refresh = () => {
    let clientsList = document.getElementById("clientsList");
    clientsList.innerHTML = generateTable(sales);
    // clean form
}

