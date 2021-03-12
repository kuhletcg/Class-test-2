// var array = [2, 3, 5] * 2 * 3 * 5;
// console.log(array);

var numbers = [2, 3, 5];
var multiplied = [];
for (var i = 0; i < numbers.length; i++) {
  multiplied.push(numbers[i] * 2 * 3 * 5);
}
console.log(multiplied);
