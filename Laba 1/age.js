let age = parseInt(prompt("Введіть вік (1-69): "));
let ageString = "";

if (age >= 10 && age <= 20) {
  ageString = age + " років";
} else {
  let lastDigit = age % 10;
  switch (lastDigit) {
    case 1:
      ageString = age + " рік";
      break;
    case 2:
    case 3:
    case 4:
      ageString = age + " роки";
      break;
    default:
      ageString = age + " років";
  }
}

console.log(ageString);
