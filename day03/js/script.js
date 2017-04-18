console.log('Hello, World!');

//  Array
var colors = ['red', 'orange', 'blue', 'green', 'yellow', 'pink'];

// console.log(colors);

//access element by index 1
// console.log(colors[1])

// .length()
// console.log(colors.length);

// getting the last of an array
var lastColor = colors[colors.length - 1];
// console.log(lastColor);

//.forEach()
colors.forEach(function(item, index){
  // console.log(index + ' : ' + item);
});

// Array.isArray()
var trueOrFalse = Array.isArray(colors);
// console.log(trueOrFalse);

var oneItemArray = ['one'];
// console.log(Array.isArray(oneItemArray));

// .push()
oneItemArray.push('two');
// console.log(oneItemArray);

oneItemArray.push(3);
// console.log(oneItemArray);

// .pop()
oneItemArray.pop();
// console.log(oneItemArray);

// .pop() returns last item
var returnedItem = oneItemArray.pop();
// console.log(returnedItem);

// .unshift() - moves to beginning of array
colors.unshift('greenish');
// console.log(colors);

//.shift()
colors.shift();
// console.log(colors);

// .shift() returns the first item from the array
var shiftedColor = colors.shift(1);
// console.log(shiftedColor);
// console.log(colors);

// .indexOf()
var colorPosition = colors.indexOf('blue');
// console.log(colorPosition);

// .lastIndexOf()
colors.push('green', 'violet', 'blue', 'pink');
// console.log(colors);

var lastBlue = colors.lastIndexOf('blue');
// console.log(lastBlue);

// .splice()
// console.log(colors);
var removeItem = colors.splice(2, 1); //spliced one item
// console.log(colors);
// console.log(removeItem);

// console.log(colors);
var removeItems = colors.splice(3, 2); //splice(start, #of items)
// console.log(colors);
// console.log(removeItems);

// adding items to an array using .splice()
// console.log(colors);
var addItems = colors.splice(1, 0, 'orange', 'yellow', 'green');
// console.log(colors);
// console.log(addItems);

// remove + adding items to/from an array using splice`
// console.log(colors);
var removeAndAdd = colors.splice(5, 1, 'purply');
// console.log(colors);
// console.log(removeAndAdd);


// E X E R C I S E
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// Assume you don't know the index position of 'green'
colors.indexOf('green');//cut + paste in place of > below
// Using a combination of the methods we've learned, remove green + blue & in their place put indigo
//colors.splice(?, 2, 'indigo');

// console.log(colors);
var exerciseOne = colors.splice(colors.indexOf('green'), 2, 'indigo');
// console.log(colors);
// console.log(exerciseOne);

//Rocky

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// slice()
// console.log(colors);
// var newColors = colors.slice();
// console.log(newColors);

var colorSlice = colors.slice(1, 3);
// console.log(colorSlice);

// .reverse()
var reversed = colors.reverse();
// console.log(reversed);

// .sort()
var numbers = [1, 20, 10, 2, 01, 22, 3, 4.5];
// console.log(numbers.sort());

var words = ['word', 'w0rd', '1 Word', '2 Words', 'apple', 2];
// console.log(words.sort());
//first is numbers, then uppercase letters, then lowercase letters.

// comparison sorting
var numbers = [2, 4, 5, 1, 3];
numbers.sort(function(a, b){
  return a - b;
});
// console.log(numbers);
// document.write('hello world');

var images = [
'http://planetoftheweb.com/i/8ball/19.png',
'http://planetoftheweb.com/i/8ball/18.png',
'http://planetoftheweb.com/i/8ball/17.png',
'http://planetoftheweb.com/i/8ball/16.png',
'http://planetoftheweb.com/i/8ball/15.png',
'http://planetoftheweb.com/i/8ball/14.png',
'http://planetoftheweb.com/i/8ball/13.png',
'http://planetoftheweb.com/i/8ball/12.png',
'http://planetoftheweb.com/i/8ball/11.png',
'http://planetoftheweb.com/i/8ball/10.png',
'http://planetoftheweb.com/i/8ball/9.png',
'http://planetoftheweb.com/i/8ball/8.png',
'http://planetoftheweb.com/i/8ball/7.png',
'http://planetoftheweb.com/i/8ball/6.png',
'http://planetoftheweb.com/i/8ball/5.png',
'http://planetoftheweb.com/i/8ball/4.png',
'http://planetoftheweb.com/i/8ball/3.png',
'http://planetoftheweb.com/i/8ball/2.png',
'http://planetoftheweb.com/i/8ball/1.png',
'http://planetoftheweb.com/i/8ball/0.png'
];

var eightBall = images[Math.floor(Math.random() * images.length)];
document.write("<img src='"+ eightBall + " '>");











































//End
