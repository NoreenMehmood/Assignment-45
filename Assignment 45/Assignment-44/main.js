// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want a Sandwich of ".concat(items);
}
;
var order1 = sandwich("chicken", "mayo");
var order2 = sandwich("butter", "bread");
var order3 = sandwich("lettuce", "cheese", "chilli sauce");
console.log(order1);
console.log(order2);
console.log(order3);
