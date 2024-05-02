// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// Define an array containing magicians name
var magician_name = ["Raza", "Rimsha", "Tariq"];
// call the function to print each magicians name
show_magicians(magician_name);
