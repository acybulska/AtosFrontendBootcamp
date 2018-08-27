/* 
(number) lastIndexOf(needle(string), haystack(string) [,fromIndex(number)]) - 
sprawdzanie pozycji ostatniego wystąpienia stringa w innym stringu. 
fromIndex to opcjonalny parametr, kóry wskazuje od której pozycji ma zacząć przeszukiwanie 
(info: jeżeli przekazana jest wartość mniejsza od 0, szukanie ma rozpocząć się od 0. 
    Jeżeli zostanie przekazana wartość większa od długości stringa - również należy rozpocząć szukanie 
    od początku stringa). Jeżeli podłańcuch nie występuje w łańcuchu, należy zwrócić wartość -1
     (słownie: minus jeden).
*/

function lastIndexOf(needle, haystack, fromIndex) {

    if (fromIndex < 0 || isNaN(fromIndex) || fromIndex >= haystack.length || typeof fromIndex !== "number") {
        fromIndex = 0;
    }
    if (! typeof needle === "string") {
        needle.toString();
    }

    if (! typeof haystack === "string") {
        haystack.toString();
    }

    for (var i = haystack.length; i > fromIndex; i--) {
        if (haystack.substr(i, needle.length) == needle) return i;
    }
    return 0;
}

var haystack = "I see a red door and I want it painted black" +
    " No colors anymore I want them to turn black" +
    " I see the girls walk by dressed in their summer clothes" +
    "I have to turn my head until my darkness goes";
var needle = "black";

lastIndexOf(needle, haystack, -1);

/*
(any) findLast(findFunction(Function), array(Array)) - zwrócenie ostatniego elementu w tablicy,
 który spełnia warunek przekazany w funkcji findFunction.
*/

function findLast(findFunction, array) {
    for (var i = array.length; i > 0; i--) {
        if (findFunction(arr[i])) {
            return arr[i];
        }
    }
}

var arr = [1, 2, 3, 4, 5, 5, 5, 6, 3, 2, 1];
var foo = function (arrayVal) { return arrayVal === 2; }

findLast(foo, arr);
