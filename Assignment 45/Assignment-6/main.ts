//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// save name with whitespace
let name_1 : string = "\t\n Noreen \t\n";

//show name with whitespace
console.log(name_1);

//show the name wiyhout whitespace
console.log(name_1.trim());