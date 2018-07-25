describe('unit testing - types and syntax - day 1', () => {
    it('defines primitive types precisely', function(){
        expect(typeof 2018).toEqual( "number" );
        expect(typeof "2018").toEqual( "string" );
        expect(typeof true).toEqual( "boolean" );
        var activity = "Bootcamp";
        expect(typeof activity).toEqual( "string" );
        expect(typeof activity.length).toEqual( "number" );
    });

    it('defines numbers precisely', function(){
        // The Number.isInteger() method checks if the number is an integer value

        // The toString() method converts a number into a string

        var amount = 19.95;

        expect(amount).toBeGreaterThan( 19.00 );
        expect(amount).toBeLessThan( 20.00 );

        expect(Number.isInteger(amount)).toEqual( false );

        expect(amount.toFixed(1)).toEqual( "19.9" );
        expect(amount.toFixed()).toEqual( "20" );

        expect(amount.toString()).toEqual( "19.95" );
    });

    it('converting to number types', function(){
        // The Number() method converts JavaScript variables into numbers
        var amount = 19.95,
            stringAmount = "19.95";

        expect(Number(stringAmount)).toEqual( amount );
        expect(Number(true)).toEqual( 1 );
        expect(Number(false)).toEqual( 0 );

        expect(parseInt(amount)).toEqual( 19 );
        expect(parseInt(stringAmount)).toEqual( 19 );

        expect(parseFloat(amount)).toEqual( 19.95 );
        expect(parseFloat(stringAmount)).toEqual( 19.95 );
    });

    it('defines strings precisely', function(){
        // The toLowerCase() method converts a string into lower case characters

        // The toUpperCase() method converts a string into upper case characters

        // The charAt() method returns the char at a given position (index)

        // The substring() method extracts a part of a string and returns the extracted part in a new string.
        // The method takes 2 parameters: the starting index (position), and the ending index (position).'

        var name = "Zakk Wylde";

        expect(name.length).toEqual( 10 );
        expect(name.toLowerCase()).toEqual( "zakk wylde" );
        expect(name.charAt(5)).toEqual( "W" );
        expect(name.substring(0,4)).toEqual( "Zakk" );

        // chaining methods

        expect(name.toLowerCase().substring(0,4)).toEqual( "zakk" );
        expect(name.toUpperCase().substring(1,2)).toEqual( "A" );
    });

    it('finding substrings in a string', function(){
        // The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.

        // The search() method searches a string for a specified value and returns the position of the match.

        // The slice() method extracts a part of a string and returns the extracted part in a new string.
        // The method takes 2 parameters: the starting index (position), and the ending index (position).'

        // The substr() method extracts a part of a string and returns the extracted part in a new string.
        // The method takes 2 parameters: the starting index (position), and the length of the desires substring (number).

        var name = "Zakk Wylde";

        expect(name.indexOf("Wylde")).toEqual( 5 );
        expect(name.search("Zakk")).toEqual( 0 );
        expect(name.slice(5,10)).toEqual( "Wylde" );
        expect(name.substr(0,4)).toEqual( "Zakk" );
    });

    it('manipulating strings', function(){
        // The replace() method replaces a specified value with another value in a string.

        // The concat() method joins two or more strings.

        // The trim() method removes whitespace from both sides of a string.

        // The split() method converts a string into an array.
        // The method takes one parameter: the separator. eg.:
        // var text = "My String";
        // text.split(" "); // Split by space, returns: ["My", "String"];
        // text.split(""); // Split by empty string, returns: ["M", "y", " ", "S", "t", "r", "i", "n", "g"];

        var name = "John Lennon",
            firstName = "Johnny",
            secondName = "Cash",
            reallyMessyText = "   Some really messy text     ",
            ringOfFire = "And it burns, burns, burns - the ring of fire, the ring of fire.";

        expect(name.replace("Lennon", "R. Cash")).toEqual( "John R. Cash");
        expect(firstName.concat(" ", secondName)).toEqual( "Johnny Cash" );
        expect(reallyMessyText.trim()).toEqual( "Some really messy text" );
        expect(ringOfFire.split(",")[2].trim()).toEqual( "burns - the ring of fire" );
        expect(ringOfFire.split("-")[1].trim()).toEqual( "the ring of fire, the ring of fire." );
        expect(ringOfFire.split(" ")[0].trim()).toEqual( "And" );
    });

    it('defines arrays precisely', function(){
        var cars = ["Saab", "Volvo", "BMW"],
            instances = [
                cars instanceof String,
                cars instanceof Number,
                cars instanceof Boolean,
                cars instanceof Symbol,
                cars instanceof Array,
                cars instanceof Object,
                cars instanceof Function
            ];

        expect(cars.length).toEqual( 3 );
        expect(cars[2]).toEqual( "BMW" );
        expect(cars.indexOf("Volvo")).toEqual( 1 );
        expect(typeof cars).toEqual( "object" );
        expect(Array.isArray(cars)).toEqual( true );

        /* SWAP THE INDEX 99 TO THE CORRECT VALUE */
        expect(instances[5]).toEqual(true);
    });

    it('array manipulations', function(){
        // The push() method adds an element as the last element of the array

        // The unshift() method adds an element as the first element of the array

        // The pop() method removes the last element of an array

        // The shift() method removes the first element of an array

        // The includes() method checks if an element exists in the array and returns true or false

        // The indexOf() method returns the index of a given element. If the element is not found, it returns -1

        // The join() method joins all array elements (separated with a comma) into a string.

        var cars = ["Saab", "Volvo", "BMW"];

        cars.push("Audi");
        cars.unshift("Porsche");
        expect(cars.length).toEqual( 5 );
        expect(cars.indexOf("Audi")).toEqual( 4 );
        expect(cars.indexOf("Porsche")).toEqual( 0 );

        cars[1] = "Ferrari";

        expect(cars.includes("Ferrari")).toEqual( true );
        expect(cars.includes("Saab")).toEqual( false );
        expect(cars.indexOf("Saab")).toEqual( -1 );

        // easy way for checking the last element of an array: Array.length - 1
        cars.pop();
        expect(cars[cars.length - 1]).toEqual( "BMW" );

        cars.shift();
        expect(cars[0]).toEqual( "Ferrari" );

        expect(cars.join()).toEqual( "Ferrari,Volvo,BMW" );
    });

    it('advanced array manipulations', function(){
        // The reverse() method reverses the order of the elements in an array

        // The sort() method sorts the items of an array
        // By default, the sort() method sorts the values as strings in alphabetical and ascending order.
        // This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, 
        // "25" is bigger than "100", because "2" is bigger than "1".
        // Because of this, the sort() method will produce an incorrect result when sorting numbers.
        // You can fix this by providing a "compare function".

        var reverseCompareFunction = function(a, b){
            return Number(b)-Number(a);
        }

        // A function that defines an alternative sort order. The function should return a negative, 
        // zero, or positive value, depending on the arguments, like:
        // function(a, b){return a-b}
        // When the sort() method compares two values, it sends the values to the compare function, 
        // and sorts the values according to the returned (negative, zero, positive) value.

        // Example:

        // When comparing 40 and 100, the sort() method calls the compare function(40,100).
        // The function calculates 40-100, and returns -60 (a negative value).
        // The sort function will sort 40 as a value lower than 100.

        var cars = ["Saab", "Volvo", "BMW", "Audi", "Porsche"],
            stringNumbers  = ["25", 8, "100", 10, 25, "42", "8"];

        expect(cars.indexOf("BMW")).toEqual( 2 );

        cars.sort();
        expect(cars.indexOf("BMW")).toEqual( 1 );

        cars.reverse();
        expect(cars.indexOf("BMW")).toEqual( 3 );

        stringNumbers.sort(reverseCompareFunction);
        expect(stringNumbers.indexOf("8")).toEqual(6);
        expect(stringNumbers.indexOf("25")).toEqual(2);
        expect(stringNumbers.indexOf(25)).toEqual(3);
    });
})
