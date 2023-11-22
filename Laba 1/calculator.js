do {
    let num1 = parseFloat(prompt("Введіть перше число: "));
    let num2 = parseFloat(prompt("Введіть друге число: "));
    let operator = prompt("Введіть операцію (+, -, *, /): ");
    let result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Невірна операція");
        continue;
    }
  
    console.log(`Результат: ${result}`);
  } while (confirm("Бажаєте вирішити ще один приклад?"));
  