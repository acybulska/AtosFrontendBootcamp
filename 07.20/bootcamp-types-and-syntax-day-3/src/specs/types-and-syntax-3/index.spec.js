describe('coercion - types and syntax - day 3', () => {
    it('explicit coercion', function(){
        var a = 42, b = 0, c = true, d = undefined, e = "John Lennon", f = [1,2,3], g = {name: "John"};

        expect(typeof String(a)).toEqual( "string" );
        expect(typeof Boolean(a)).toEqual( "boolean" );
        expect(typeof Number(a)).toEqual( "number" );

        expect(typeof String(b)).toEqual( "string" );
        expect(typeof Boolean(b)).toEqual( "boolean" );
        expect(typeof Number(b)).toEqual( "number" );

        expect(typeof String(c)).toEqual( "string" );
        expect(typeof Boolean(c)).toEqual( "boolean" );
        expect(typeof Number(c)).toEqual( "number" );

        expect(typeof String(d)).toEqual( "string" );
        expect(typeof Boolean(d)).toEqual( "boolean" );
        expect(typeof Number(d)).toEqual( "number" );

        expect(typeof String(e)).toEqual( "string" );
         expect(typeof Boolean(e)).toEqual( "boolean" );
        expect(typeof Number(e)).toEqual( "number" );

        expect(typeof String(f)).toEqual( "string" );
         expect(typeof Boolean(f)).toEqual( "boolean" );
        expect(typeof Number(f)).toEqual( "number" );


        expect(typeof String(g)).toEqual( "string" );
         expect(typeof Boolean(g)).toEqual( "boolean" );
        expect(typeof Number(g)).toEqual( "number" );

    });
    it('implicit coercion', function(){
        expect(4 * "5").toEqual( 20 );
        expect(3 + "5" + 1).toEqual( "351" );
        expect("42" + 5).toEqual( "425" );
        expect(true + true).toEqual( 2 );
        expect("John" ? 4 : 1).toEqual( 4 );
        expect(undefined ? 4 : 1).toEqual( 1 );
        expect(1 + 2 + "1").toEqual( "31" );
        expect((1 + "2") + 1).toEqual( "121" );
        expect(4 * "Lennon").toEqual( NaN );
    });
})

describe('arithmetic operators - types and syntax - day 3', () => {
    var a, b = 23;

    beforeEach(function(){
        a = 10;
    })

    it('prefixed incrementation', function(){
        function Add(){
            return ++a;
        }

        expect(Add(a)).toEqual( 11 );
    });

    it('suffixed incrementation', function(){
        function Add(){
            return a++;
        }

        expect(Add(a)).toEqual( 10 );
    });

    it('prefixed decrementation', function(){
        function Dec(){
            return --a;
        }

        expect(Dec(a)).toEqual( 9 );
    });

    it('suffixed decrementation', function(){
        function Dec(){
            return a--;
        }

        expect(Dec(a)).toEqual( 10 );
    });

    it('modulo', function(){
        expect(a % 2).toEqual( 0 );
        expect(b % 2).toEqual( 1 );
        expect(a % b).toEqual( 10 );
        expect(b % a).toEqual( 3);
    });
})

describe('comparison operators - types and syntax - day 3', () => {
    var a = "23", b = 23, c = 0, d = false, e = undefined;

    it('loose equality', function(){
        expect(a == b).toEqual( true );
        expect(b == c).toEqual( false );
        expect(c == d).toEqual( true );
        expect(d == e).toEqual( false );
    });

    it('strict equality', function(){
        expect(a === b).toEqual( false );
        expect(b === c).toEqual( false );
        expect(c === d).toEqual( false );
        expect(d === e).toEqual( false );
    });

    it('ternary operator (elvis)', function(){
        function Add(a, b){
            return a + b;
        }

        function Dec(a, b){
            return a - b;
        }

        expect(a ? true : false).toEqual( true );
        expect(b ? true : false).toEqual( true );
        expect(c ? true : false).toEqual( false );
        expect(d ? true : false).toEqual( false );

        expect(Add(5,10) > 10 ? true : false).toEqual( true );
        expect(Dec(5,10) > 10 ? true : false).toEqual( false );
        expect(Add(3,2) > 10 ? true : false).toEqual( false );
        expect(Dec(3,2) > 10 ? true : false).toEqual( false );
    });
})

describe('logical operators - types and syntax - day 3', () => {
    var a = "38", b = 38, c = 0, d = false, e = undefined;

    it('logical or', function(){
        expect(a || b).toEqual("38" );
        expect(b || c).toEqual( 38 );
        expect(c || d).toEqual( false );
        expect(d || e).toEqual( undefined );
    });

    it('logical and', function(){
        expect(a && b).toEqual( 38 );
        expect(b && c).toEqual( 0 );
        expect(c && d).toEqual( 0 );
        expect(d && e).toEqual( false );
    });

    it('combined expressions', function(){
        expect(a || b || c).toEqual( "38" );
        expect(b || c && d).toEqual( 38 );
        expect(c && d && e).toEqual( 0 );
        expect((d || e) && c || (a || b)).toEqual( "38" );
    });
})