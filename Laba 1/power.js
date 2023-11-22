let s = parseInt(prompt("Введіть число S: "));
let k = parseInt(prompt("Введіть цифру K: "));

let digit = s.toString()[k];
let result = Math.pow(parseInt(digit), 2);

console.log(`Результат: ${result}`);
