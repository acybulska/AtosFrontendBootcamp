describe('creating objects based on other objects', () => {
    it('using Object.create()', function(){
        // create a new object "personJohn" based on "personZakk" using the Object.create() method
        // update the "personJohn" properties to pass the tests
        // add a method sayName() to "personJohn" instance which should output his name

        var personZakk = { name: "Zakk", surname : "Wylde" }

        /* ... */

        expect(personZakk.isPrototypeOf(personJohn)).toEqual(true);
        expect(personJohn.hasOwnProperty("sayName")).toEqual(true);
        expect(personZakk.hasOwnProperty("sayName")).toEqual(false);
        expect(personJohn.sayName()).toEqual("John");
    })

    it('extending prototypes', function(){
        // create a new object "personZakk" and "personJohn" based on "person" using the Object.create() method
        // update the "personJohn" and "personZakk" properties to pass the tests
        // add a method sayName() to the "person" object prototype (hint: refer to person.__proto__ NOT person.prototype !!!)

        var person = { name: "Freddie", surname: "Mercury" }

        /* ... */

        expect(person.isPrototypeOf(personZakk)).toEqual(true);
        expect(person.isPrototypeOf(personJohn)).toEqual(true);

        expect(personJohn.hasOwnProperty("sayName")).toEqual(false);
        expect(personZakk.hasOwnProperty("sayName")).toEqual(false);

        expect("sayName" in personJohn).toEqual(true);
        expect("sayName" in personZakk).toEqual(true);

        expect(personJohn.sayName()).toEqual("John");
        expect(personZakk.sayName()).toEqual("Zakk");
    })
})

describe('creating objects with constructors', () => {
    it('simple constructor method', function(){
        // create a "bmw" object using the new operator and the Car constructor

        function Car(make) {
            this.make = make;
            this.getMake = function() {
                return this.make;
            }
        }

        expect(Car.isPrototypeOf(bmw)).toEqual(false);
        expect(bmw.hasOwnProperty("getMake")).toEqual(true);
        expect(bmw.getMake()).toEqual("BMW");
    })

    it('simple constructor method with prototype', function(){
        // create a "bmw" object using the new operator and the Car constructor
        // extend the Car prototype (use Car.prototype) to add the getMake method (same logic as in previous test suite)

        function Car(make) {
            this.make = make;
        }

        expect(Car.isPrototypeOf(bmw)).toEqual(false);
        expect(bmw.hasOwnProperty("getMake")).toEqual(false);
        expect("getMake" in bmw).toEqual(true);
        expect(bmw.getMake()).toEqual("BMW");
    })
})
