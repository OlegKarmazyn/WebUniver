let number = prompt("Введіть п'ятизначне число: ");
let modifiedNumber = number.slice(-1) + number.slice(0, -1);

console.log(`Модифіковане число: ${modifiedNumber}`);
