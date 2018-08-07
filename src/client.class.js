import uuid from 'uuid-v4';

export default class Client {
    constructor(name, street, value, contact, city) {
        this.name = name;
        this.street = street;
        this.value = value;
        this.contact = contact;
        this.city = city;
        this.id = uuid();
    }

    listItem() {
        return `<tr id="${this.id}">
            <th scope="row">${this.name}</th>
            <td>${this.street}</td>
            <td>${this.value}</td>
            <td>${this.city}</td>
            <td>${this.contact}</td>
        </tr>`
    }
}