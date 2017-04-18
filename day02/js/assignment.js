var rand = Math.random() * 100; //gives a random # 0-1
var roundNum = Math.round(rand);
console.log(roundNum)

var rand = Math.random() * 100; //gives a random # 0-1
var roundNum = Math.floor(rand);
console.log(roundNum)

var firstName = prompt('Please insert your first name.')
    lastName = prompt('Please insert your last name.');

console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase());

// var age = prompt('What is your age?'); FIX
//
// if (age < 16) {
//   alert('you cannot drive');
//   else {
//     alert('you can drive');
//   }
// }
