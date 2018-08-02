export default class Car {
    constructor(brand, model, price, year, condition, color) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.year = year;
        this.condition = condition;
        this.color = color;
        this.id = this.brand + this.model + this.year + Math.random(2);
        this.deleteButtonId = this.brand + this.model + this.year + Math.random(2);
        // this.settingsButton
    }
    
    getInfo() {
        console.log(`Auto: ${this.brand} ${this.model}, cena: ${this.price} zł`);
    }

    listItem() {
        return `<div id="${this.id}" style="margin: 10px; border: 1px solid #ced4da; padding: 30px; height: 321px; 
        border-radius: 10px; display: inline-block; box-shadow: 10px 10px 29px -10px rgba(0,0,0,0.66);">
                    <h3 style="margin-bottom: 20px;">${this.brand} ${this.model} 
                        <div style="border-radius: 50px; width: 15px; padding: 15px; display: inline-block; 
                        background-color: ${this.color}; border: 1px solid #ced4da; float: right;"></div>
                    </h3>
                    <div class="card" style="width: 18rem">
                        <ul class="list-group-flush">
                            <li class="list-group-item">Price: ${this.price}zł</li>
                            <li class="list-group-item">Year: of production: ${this.year}</li>
                            <li class="list-group-item">Condition: ${this.condition}</li>
                        </ul>
                    </div>
                </div>`
    }

    // toggleSettings() {
    //     let sellButton = document.getElementById(this.sellCarButton).disabled;
    //     sellButton.disabled = sellButton.disabled === true ? false : true;
    //     let settings = document.getElementById(this.showId);
    //     let item = document.getElementById(this.id);
    //     settings.style.display=settings.style.display === 'none' ? '' : 'none';
    //     item.classList.contains("itemAll") ? item.classList.remove("itemAll"):item.classList.add("itemAll");
    // } 

    // changeYear() {
    //     let newYear = document.getElementById(this.changeYearId).value;

    // }

    // sellCarClass() {
    //     let newPrice = Number(document.getElementById(this.sellPriceId).value);
    // }
}

/* <button class="btn btn-danger" style="margin:20px;" id="${this.deleteButtonId}">Delete Car</button>
<div id="${this.showId}" style="display: none;">
    <div style="margin-top: 20px"> 
        <input placeholder="Change Year">
        <button class="btn">Change Course</button>
    </div> */