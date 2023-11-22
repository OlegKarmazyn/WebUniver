let dateStr = prompt("Введіть дату (дд-мм-рррр): ");
let inputDate = new Date(dateStr);

inputDate.setDate(inputDate.getDate() - 1);
let previousDate = inputDate.toLocaleDateString();

inputDate.setDate(inputDate.getDate() + 2);
let nextDate = inputDate.toLocaleDateString();

console.log(`Попередня дата: ${previousDate}, Наступна дата: ${nextDate}`);
