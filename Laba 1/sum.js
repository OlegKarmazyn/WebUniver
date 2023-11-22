let sum = 0;
let number;

do {
  number = parseFloat(prompt("Введіть число (введення 0 завершить програму): "));
  sum += number;
} while (number !== 0);

console.log(`Сума введених чисел: ${sum}`);
