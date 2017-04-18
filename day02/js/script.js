// console.log("anystring".length);
//
// var str = "anotherstringthisoneverylong";
// console.log(str.length);

// .charAt()
// console.log(str.charAt());
// console.log(str.charAt(8));
// console.log(str.charAt(250));

// .indexOf()
// console.log(str.indexOf('t'));
// console.log(str.indexOf('T'));

// .concat()
// var hello = 'Hello';
// console.log(hello.concat(' JavaScript'));
// console.log(hello + ' JavaScript');

// .substrin() (where it starts to where it ends, not including last)
// var myName = 'Leoncio';
// console.log(myName.substring(0,3)); //0 to 3 not including 3
// console.log(myName.substring(3,6));//3 to 6 not including 6
// console.log(myName.substring(3));

// .substr()
// var myHome = 'FresnoYeah';
// console.log(myHome.substr(0,3));
// console.log(myHome.substr(3,2));
// console.log(myHome.substr(3));

// console.log(myHome.substring(6,3));//attempts @ going backawards with substring
// console.log(myHome.substring(3,6));

// .toLowerCase()
// var myDog = 'Angel';
// console.log(myDog.toLowerCase());

// .toUpperCase()
var myDog = 'AngelDog';
console.log(myDog.toUpperCase());

// .trim()
// var extraSpaces = '             stuff        and  things';
// console.log(extraSpaces);
// console.log(extraSpaces.trim());

//Number Methods
//Number.isInterger()
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5.5));
// console.log(Number.isInteger(NaN));

//Number.parseFloat() - Connverts a string into a number
// console.log(Number.parseFloat('5.2'));
// console.log(Number.parseFloat('365.1 degrees'));
// console.log(Number.parseFloat('Lex Murphy is 11'));

//Number.parseInt() VERY IMPORTANT - converts into an isInteger
// console.log(Number.parseInt(123));
// console.log(Number.parseInt('words words'));
// console.log(parseInt('word'));

// var userNum = parseInt(prompt('pick a number'));
// console.log(typeof userNum);

// Number.isNaN()
// console.log(Number.isNaN(5));
// console.log(Number.isNaN('Leoncio'));
// console.log(isNaN('Leoncio'));
// console.log(Number.isNaN(NaN));
// console.log(isNaN());
//
// var userNum = parseInt(prompt('Pick a number'));
// console.log(!Number.isNaN(userNum));

//Date Object
var newDate = new Date();
console.log(newDate);

//getDate()   //day of the month
console.log(newDate.getDate());

//getFullYear()
console.log(newDate.getFullYear());

//getDay() //day of the week !!zero based!!
console.log(newDate.getDay());

//getMonth() //month of the year !!zero based!!
console.log(newDate.getMonth());

if(newDate.getDay() == 3){
  console.log('April')
}

var fullMonth = newDate.toLocaleString('en-us', {weekday: 'short'});
// console.log(fullMonth); //'short' = shorter abbrev.

var fullMonth = newDate.toLocaleString('en-us', {month: 'long', day: '2-digit', year: 'numeric'});
// console.log(fullMonth);

// var fullMonth = newDate.toLocaleString('en-us' {month: 'long'});
// var numDate = newDate.toLocaleString('en-us', {day: '2-digit'});
// var fullYear = newDate.getFullYear();
// console.log(fullMonth + ' ' + numDate + ', ' + fullYear);
//  FIX this

var x = 5;
// console.log(x);

x--;
// console.log(x)

// for(var x = 0; x < 5; x++){
//   console.log(x)
// }

var rand = Math.random() * 10; //0 to 1
console.log(rand);

var roundUp = Math.ceil(8.3);
console.log(roundUp);

var roundDown = Math.floor(9.9);
console.log(roundDown);

var roundNum = Math.round(4.499999999);
console.log(roundNum);

//max(), min()
//pow(x,y)
//sqrt(x)

// var firstName = prompt('Please insert your first name.').toUpperCase;
//     lastName = prompt('Please insert your last name.');
//
// function capitalizeFirstLetter(firstName) {
//     return firstName.charAt(0).toUpperCase() + firstName.slice(1);
// }
//
// function capitalizeFirstLetter(lastName) {
//     return lastName.charAt(0).toUpperCase() + lastName.slice(1);
// }
//
// console.log(firstName + ' ' + lastName);



/*var
function
return
this
new
*/
