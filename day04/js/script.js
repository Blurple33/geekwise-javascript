console.log('Hello, World!');

for(var i = 0; i < 10; i++){
  // console.log(i);
}

for(var i = 0; i < 10; i++){
  i++;
  // console.log(i);
}

//while will keep running until it's untrue
var i = 0
while (i < 10){
  // console.log(i);
  i++
}

// do while loop - completes the loop once, then runs more to see if any other conditions are met.
var i = 0;
do {
  // console.log(i);
  i++;
}
while(i < 10)

var jeeps = ['wrangler', 'cherokee', 'grand cherokee', 'compass', 'renegade', 'patriot'];


// .foreach() loops through array , strictly for arrays
jeeps.forEach(function(item, index){
  // console.log(item)
});

// .forIn() loop - loop through objects
var jeep = {
  make: 'jeep',
  model: 'wrangler',
  year: 2014,
  color: 'black',
  doors: 2
}

for(property in jeep){
  // console.log(property);
  console.log(jeep[property]);
}

// if else statements
var getTime = new Date().getHours();
if (getTime < 12) {
  // alert("Good Morning!");
} else {
  // alert("Good Evening!!");
};

// if, else if, else;
var getTime = new Date().getHours();
if (getTime < 12) {
  // alert("good morning!");
} else if (getTime < 18) {
  // alert("good evening");
} else {
    // alert("good night!");
}

// another if statements

for (var i = 1; i < 10; i++) {
  if (i === 0){
    // console.log(i === 0)
  } else if (i % 2 ===0) {
    // console.log(i + ' is even.')
  } else {
    // console.log(i + ' is odd.')
  }
}

// == vs ===
var num = 1;
var numString = '1';
// console.log(num);
// console.log(typeof(num));
// console.log(numString);
// console.log(typeof(numString));

// == checks for value
if (num == numString) {
  // console.log('one is one');
} else {
  // console.log('one is not one');
}

// === checks for both the value and data type.
if (num === numString) {
  // console.log(' one is one');
} else {
  // console.log('one is not one');
}

// other comparison operators
var num = 5;
if (num < 6){
  // console.log("less than");
} else if (num > 6) {
  // console.log("greater than");
} else if (num <= 12) {
  // console.log("less than or equal to");
} else if (num >= 12) {
  // console.log("greater than or equal to");
} else {
  // console.log("other");
}

var firstChoice = prompt('There are 3 doors.  Choose 1, 2, or 3 ');

alert('After this point, 1 is \"yes\" and 2 is \"no\"')

if (firstChoice == '1'){
  alert('You fell in a hole.');
} else if (firstChoice == '2'){
  var jewel = prompt('You see a shining jewel on the table on the far side of the room.  Do you pick it up? Yes or No.');

    if (jewel == '1') {
      prompt('As you pick up the jewel, in the corner of your eye, shadows move.  Do you turn around?');
    } else if (jewel == '2') {
      prompt('You proceed to walk passed the jewel, spying two more doors');
    } else {
      alert('Floor collapses for being so sluggish.');
    }

} else if (firstChoice =='3'){
  var animal = prompt('A wild animal\'s gaze pierces as you cautiously enter.  Do you step closer? Yes or No.');

   if (animal == '1') {
     prompt('Oh, it\'s nothing more than a huge badger.  Do you pet it?');
   } else if (animal == '2') {
     prompt('You lock eyes with the beast as you sidestep it with your back along the wall.');
   } else {
     alert('You proceed do the time warp!');
     alert('Then fall into a hole');
   }

} else {
  alert('No choices are valid.  Please leave.')
}
































//END
