import Car from './car.class';

let audi = new Car("Audi", "A4", 3500, "1996", "Used", "grey");
let ford = new Car("Ford", "Focus", 12000, "2006", "Used", "blue");

let fleet = [];
fleet.push(audi, ford);

export default fleet;