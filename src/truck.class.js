export default class Truck {
    constructor(brand, model, price, year, condition, color, capacity) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.year = year;
        this.condition = condition;
        this.color = color;
        this.capacity = capacity;
        this.id = this.brand + this.model + this.year + Math.random(2);
        this.deleteButtonId = this.brand + this.model + this.year + Math.random(2);
        this.settingsButtonId = this.brand + this.model + this.year + Math.random(2);
        this.showId = this.brand + this.model + this.year + Math.random(2);
        this.border = capacity >= 50 ? 'border: 2px solid red' : '';
        this.confirmPriceId = this.brand + this.model + this.year + Math.random(2);
    }

    listItem() {
        return `<div id="${this.id}" style="margin: 10px; border: 1px solid #ced4da; padding: 30px; 
        border-radius: 10px; display: inline-block; box-shadow: 10px 10px 29px -10px rgba(0,0,0,0.66); ${this.border}">
                    <h3 style="margin-bottom: 20px;">${this.brand} ${this.model} 
                        <div style="border-radius: 50px; width: 15px; padding: 15px; display: inline-block; 
                        background-color: ${this.color}; border: 1px solid #ced4da; float: right;"></div>
                    </h3>
                    <div class="card" style="width: 18rem">
                        <ul class="list-group-flush">
                            <li class="list-group-item">Price: ${this.price} zł</li>
                            <li class="list-group-item">Year: of production: ${this.year}</li>
                            <li class="list-group-item">Condition: ${this.condition}</li>
                            <li class="list-group-item">Capacity: ${this.capacity}</li>
                        </ul>
                    </div>
                    <button class="btn" style="margin-top: 20px;" id="${this.settingsButtonId}">Settings</button>
                    <button class="btn btn-danger" style="margin-top: 20px;" id="${this.deleteButtonId}">Delete Car</button>
                    <div id="${this.showId}" style="display: none;">
                        <div style="margin-top:20px">
                            <input class="form-control input" placeholder="Change Price">
                            <button class="btn" id="${this.confirmPriceId}">Confirm</button>               
                        </div>
                    </div>
                </div>`
    }

    toggleSettings() {
        let settings = document.getElementById(this.showId);
        let item = document.getElementById(this.id);
        settings.style.display = settings.style.display === 'none' ? '' : 'none';
        item.classList.contains("itemAll") ? item.classList.remove("itemAll") : item.classList.add("itemAll");
    }
}