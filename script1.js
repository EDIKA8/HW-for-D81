// HW D81
function manualMap(func, array) { // 1
  return array.map(func);
}

let numbers = [1, 2, 3, 4];

function double(x) {
  return x * 2;
}

let result = manualMap(double, numbers);
console.log(result); 



function manualFilter(func, array) { // 2
  return array.filter(func);
}

let numbers = [1, 2, 3, 4, 5, 6];

function isEven(x) {
  return x % 2 === 0;
}

let result = manualFilter(isEven, numbers);
console.log(result); 



function capitalizeNames(names) { // 3
  return manualMap(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(), names);
}

let names = ["alice", "bob", "charlie"];
let capitalizedNames = capitalizeNames(names);
console.log(capitalizedNames); 



function filterNames(names) { // 4
  return manualFilter(name => name.length <= 5 && name[0] === name[0].toUpperCase(), names);
}

let names = ["Alice", "bob", "Charlie", "David", "Eve"];
let filteredNames = filterNames(names);
console.log(filteredNames);



function filterMultiplesOf5(numbers) { // 5
  return manualFilter(num => num % 5 === 0 && num > 20, numbers);
}

let numbers = [10, 15, 25, 30, 35];
let filteredNumbers = filterMultiplesOf5(numbers);
console.log(filteredNumbers);
