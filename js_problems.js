var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];

var largestValue = numbers.reduce(function (prev, curr) {return prev > curr ? prev : curr} });
console.log('largest number: ' + largestValue);

var longest = strings.reduce(function (prev, curr) {return prev.length > curr.length ? prev : curr} });
console.log('longest word: ' + longest);

var evens = numbers.filter(function(el) {return el%2 === 0});
console.log('even numbers: ' + evens);

var odds = numbers.filter(function(el) {return el%2 !== 0});
console.log('odds numbers: ' + odds);

var wordsWithIs = strings.filter(function(el){return el.indexOf('is') !== -1});
console.log('words containing is: ' + wordsWithIs);

var squared = numbers.map(function(el) {return el * el;});
console.log('squared array: ' + squared);

var divisibleByThree = numbers.filter(function(el) {return el%3 == 0});
console.log('All numbers divisible by three: ' + divisibleByThree);

var joined = even.concat(odds);
console.log('joined even and odd arrays: ' + joined);

var sorted = numbers.sort(function(a,b) {return a - b;});
console.log('sorted array ' + sorted);

var lastWord = strings.pop();
console.log('popped word: ' + lastWord);

strings.push("yeah");
console.log('strings: ' + strings);

var word = strings.shift();
console.log('removed from start: ' + word);
console.log('strings: ' + strings);

strings.unshift("this");
console.log('added to start: ' + 'this');
console.log('strings: ' + strings);

var sliced = strings.slice(0,3);
console.log('subset: '  + sliced);
console.log('strings: ' + strings);

var x = strings.splice(0,3,"test","123");
console.log('removed: ' + x + ' and replaced with test, 123');
console.log(strings);

var customers = [
    { firstname : 'Joe',  lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

var result = customers
              .filter(function(el) {return el.firstname.indexOf('J') !== -1})
              .map(function(el) {return {name : el.firstname + " " + el.lastname}})
              .sort(sortAlph);

function sortAlph(a,b){
  return a.name == b.name ? 0 : (a.name < b.name ? -1 : 1);
};

console.log(result);


