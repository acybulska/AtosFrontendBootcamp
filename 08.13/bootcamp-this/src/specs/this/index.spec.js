describe('casting this to a temporary variable', () => {
    it('should call the most outer context object property', function () {
        // create the outerSayName function based on any of the below inner functions to return the "name" variable from the "outerContext" function context
        function outerSayName() {
            return this.sayName;
        }

        function outerContext() {
            function sayName() {
                return this.name;
            }
            var person1 = {
                name: "John",
                sayName: sayName
            }

            var person2 = {
                name: "Zakk",
                sayName: sayName
            }

            var name = "Freddie";

            expect(person1.sayName()).toEqual("John");
            expect(person2.sayName()).toEqual("Zakk");
            //expect(this.outerSayName()).toEqual("Freddie");
        }

        outerContext();
    })
})

describe('casting this to a temporary variable', () => {
    it('should belong to the most outer context', function () {
        // declare a variable myNumber of type number in the most outer "this" context object
        var myNumber = 3;
        this.myNumber = 5;
        expect(this.myNumber).toEqual(5);

    })
    it('should be able to call the outer context from another context', function () {
        // declare a variable myNumber of type number in the most outer "this" context object
        // cast the context to a variable named "that" in a correct place, so it refers to the most outer "this" context object, when called from another context

        this.myNumber = 45;
        var that = this;

        expect(this.myNumber).toEqual(45);

        var myObj = {
            delayedOutput: function () {
                expect(this.myNumber).toEqual(undefined);
                expect(that.myNumber).toEqual(45);
            }
        }

        myObj.delayedOutput();
    })
})

describe('using the call(), apply() and bind() methods to change the context', () => {
    it('should use the call() method to change the context', function () {
        function tellMeAboutYourself(name) {
            if (this.alive) {
                return name + " is " + this.age + " years old";
            }
            else {
                return name + " would be " + this.age + " years old";
            }
        }

        var person1 = {
            name: "John",
            age: 78,
            alive: false,
            tellMeAboutYourself: tellMeAboutYourself
        }

        var person2 = {
            name: "Zakk",
            age: 51,
            alive: true,
            tellMeAboutYourself: tellMeAboutYourself
        }

        this.name = "Freddie";
        this.age = 72;
        this.alive = false;

        // use object identifiers and object methods only
        expect(tellMeAboutYourself.call(person1, person1.name)).toEqual("John would be 78 years old");
        expect(tellMeAboutYourself.call(person2, person2.name)).toEqual("Zakk is 51 years old");
        expect(tellMeAboutYourself.call(this, this.name)).toEqual("Freddie would be 72 years old");
        expect(tellMeAboutYourself.call(person1, person2.name)).toEqual("Zakk would be 78 years old");
        expect(tellMeAboutYourself.call(this, person1.name)).toEqual("John would be 72 years old");
        expect(person1.tellMeAboutYourself.call(this, this.name)).toEqual("Freddie would be 72 years old");
        expect(person1.tellMeAboutYourself.call(person2, person2.name)).toEqual("Zakk is 51 years old");
        expect(person2.tellMeAboutYourself.call(this, person2.name)).toEqual("Zakk would be 72 years old");
    })

    it('should use the apply() method to change the context', function () {
        function tellMeAboutYourself(name) {
            if (this.alive) {
                return name + " is " + this.age + " years old";
            }
            else {
                return name + " would be " + this.age + " years old";
            }
        }

        var person1 = {
            name: "John",
            age: 78,
            alive: false,
            tellMeAboutYourself: tellMeAboutYourself
        }

        var person2 = {
            name: "Zakk",
            age: 51,
            alive: true,
            tellMeAboutYourself: tellMeAboutYourself
        }

        this.name = "Freddie";
        this.age = 72;
        this.alive = false;

        // use object identifiers and object methods only
        expect(tellMeAboutYourself.apply(person2, [person1.name])).toEqual("John is 51 years old");
        expect(tellMeAboutYourself.apply(this, [person2.name])).toEqual("Zakk would be 72 years old");
        expect(tellMeAboutYourself.apply(this, [this.name])).toEqual("Freddie would be 72 years old");
        expect(tellMeAboutYourself.apply(person1, [person2.name])).toEqual("Zakk would be 78 years old");
        expect(tellMeAboutYourself.apply(this, [person1.name])).toEqual("John would be 72 years old");
        expect(person1.tellMeAboutYourself.apply(person2, [person1.name])).toEqual("John is 51 years old");
        expect(person1.tellMeAboutYourself.apply(person2, [person2.name])).toEqual("Zakk is 51 years old");
        expect(person2.tellMeAboutYourself.apply(person1,[person1.name])).toEqual("John would be 78 years old");
    })

    it('should use the bind() method to change the context', function () {
        function tellMeAboutYourself(name) {
            if (this.alive) {
                return name + " is " + this.age + " years old";
            }
            else {
                return name + " would be " + this.age + " years old";
            }
        }

        var person1 = {
            name: "John",
            age: 78,
            alive: false
        }

        var person2 = {
            name: "Zakk",
            age: 51,
            alive: true
        }

        this.name = "Freddie";
        this.age = 72;
        this.alive = false;

        // use object identifiers and object methods only

        var myCallers = {
            callerFunction1: tellMeAboutYourself.bind(person1),
            callerFunction2: tellMeAboutYourself.bind(this),
            callerFunction3: tellMeAboutYourself.bind(person2),
            callerFunction4: tellMeAboutYourself.bind(this, person2.name),
            callerFunction5: tellMeAboutYourself.bind(person1, this.name),
            callerFunction6: tellMeAboutYourself.bind(person2, person2.name)
        }

        expect(myCallers.callerFunction1.call(person1, person2.name)).toEqual("Zakk would be 78 years old");
        expect(myCallers.callerFunction2.call(this, person1.name)).toEqual("John would be 72 years old");
        expect(myCallers.callerFunction3.call(person2, this.name)).toEqual("Freddie is 51 years old");
        expect(myCallers.callerFunction4.call(this, person2.name)).toEqual("Zakk would be 72 years old");
        expect(myCallers.callerFunction5.call(person1, this.name)).toEqual("Freddie would be 78 years old");
        expect(myCallers.callerFunction6.call(person2, person2.name)).toEqual("Zakk is 51 years old");
    })
})
