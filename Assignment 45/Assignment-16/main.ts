//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//Add one new guest to the beginning of your array.

//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Guest List
let guestList = ["Mehwish","Sana","Shumaila"];

// Making variable for those guest who cant come
let dontCome = guestList[0];

// Print Guest list who cant come
console.log(dontCome,"Nahi Ahh Sakhty han");

//Add or remove values from guest list array
guestList.splice(0, 1, "Ali");

//Message print for bigger Table
console.log("Good News ! We have found a Bigger Table For Dinner");

//Adding a new value at starting index of array
guestList.unshift("Semina");

//Adding a new value at ending index of array
guestList.push("Saima");

// Get a middle index of array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex,0, "Shazia");

console.log("Updated List of our Guest");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?` ));

