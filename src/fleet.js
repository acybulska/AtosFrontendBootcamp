import Car from './car.class';
import Motorcycle from './motorcycle.class';
import Truck from './truck.class';

let audi = new Car("Audi", "A4", 3500, "1996", "Used", "grey", 650);
let yamaha = new Motorcycle("Yamaha", "V Star", 30000, "2015", "Used", "black", 120);
let merc = new Truck("Mercedes-Benz", "ATEGO 1223", 90000, "2007", "Used", "white", 50);

let fleet = [];
fleet.push(audi, yamaha, merc);

export default fleet;