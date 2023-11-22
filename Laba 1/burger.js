let amountInWallet = parseFloat(prompt("Введіть суму грошей у гаманці: "));
let burgerPrice = parseFloat(prompt("Введіть ціну одного бургера: "));

let burgerCount = Math.floor(amountInWallet / burgerPrice);
let change = amountInWallet % burgerPrice;

console.log(`Ви можете купити ${burgerCount} бургерів, і у вас залишиться ${change.toFixed(2)} грн здачі.`);
