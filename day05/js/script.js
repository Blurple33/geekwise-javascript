// console.log('Hello, World!');
//
// // ternary statements
// var age = prompt('What is your age?');
//
// // ternary operator syntax is exp?
// var movieRestriction = age >= 18 ?
//   console.log('Old enough') :
//   console.log('Too young');
//
// // Same as :
// /*
// if (age > 18) {
//   console.log('Old enough');
// } else {
//   console.log('Too young');
// }
// */
//
// // Another Exercise
// var age = prompt('What is your age?');
//
// var url = age >= 18 ?
//   (
//     alert('You my proceed.'),
//     'proceed.html' //opens proceed.html`
// ):
// (
//   alert('Sorry, you\'re not old enough for the movies'),
//   'stop.html' //opens up stop.html
// );
//
// window.location.assign(url);

// Switch statements - Zero Based
/*
var today = new Date().getDay();

switch(today) {
  case 0:
    console.log("Happy Sunday!");
    break;
  case 1:
    console.log("Sounds like a case of the Mondays.");
    break;
  case 2: //Cases are used USUALLY when you know how many cases there are
    console.log('Tuesday Morning');
    break;
  case 3:
    console.log('Wednesday Afternoon');;
    break;
  case 4:
    console.log('Today is Thursday');
    break;
  case 5:
    console.log("It's Friday");
    break;
  case 6:
    console.log("Saturday Weekend");
    break;
}

switch(today) {
  case 1:
    console.log("It's Monday");
    break;

  default:
    console.log("It's not Monday");
}

var list = [
  'left',
  'right',
  'straight'
]

var direction = prompt('left, right, or straight')

switch(direction) {
  case list [0]:
    console.log("You go Left");
    break;
  case list [1]:
    console.log("You go Right");
    break;
  case list [2]: //Cases are used USUALLY when you know how many cases there are
    console.log("You go Straight");
    break;
}

*/
//Cluttering the Global namespace. BAD!
// var coffee = 'Dutch Bros';
//
// function myCoffee(){ //scopes
//   var coffee = 'Starbucks'; //Only exists inside of the function
//   console.log(coffee);
//
//   coffee = 'Peets'
//   console.log(coffee)//looks for the nearest instance of the var = Starbucks
//
//   otherCoffee = 'Dunkin';
//
// }
//
// myCoffee();
//
// console.log(coffee);
// console.log(otherCoffee);

//for loop
// for(let i = 0; i < 5; i++){ //block, not a function
  // console.log(i);
// }

// console.log(i);

// let coffee;
//
// function myCoffee(){
//   let coffee = 'Dutch Bros'; //cannot create global let unless intentional
//   console.log(coffee);
// }
//
// myCoffee();
//
// coffee = 'Dunkin'
// console.log(coffee);


//var is function scope
//let is block scope

// Const = Constant - cannot be changed
// const newCoffee = 'Lanna';
//
// console.log(newCoffee);

//Variable Hoisting - moves the variable up
var x;
console.log(x); //undefined (hasn't read the variable)
x = 1; //x now = 1
console.log(x); //x = 1

myFunct();

function myFunct(){
  //stuff and things
  console.log('stuff and things');
}




























//END
