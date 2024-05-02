//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Guest List
var guestList = ["Mehwish", "Sana", "Shumaila"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print Guest list who cant come
console.log(dontCome, "Nahi Ahh Sakhty han");
//Add or remove values from guest list array
guestList.splice(0, 1, "Ali");
//Message print for bigger Table
console.log("Good News ! We have found a Bigger Table For Dinner");
//Adding a new value at starting index of array
guestList.unshift("Semina");
//Adding a new value at ending index of array
guestList.push("Saima");
// Get a middle index of array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Shazia");
console.log("Updated List of our Guest");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to Dinner with me?")); });
// Inform only two guest dinner
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner, and you have space for only two guests.");
//Using while loop to remove guest from the array untill only two guest
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry,".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending Invitation for last two guest
console.log("Invitations to the last two Guests");
guestList.forEach(function (Lasttwo) { return console.log("Luckly ".concat(Lasttwo, ", you are still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty List");
