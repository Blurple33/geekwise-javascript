//Ask for first name, last name, age, and place
var firstName = prompt('What is your first name?'),
    lastName = prompt('What is your last name?'),
    age = prompt('What is your age?'),
    place = prompt('What is your favorite place?');

// Ask the user to confirm the place
confirm('You said your favorite place was '+place+'.  Is that correct?');

// Alert user's first name and last name.
console.log(firstName + ' ' + lastName);

//Log user's age.
console.log(age);
