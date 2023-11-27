function calculator(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Помилка виразу";
    }
}

console.log(calculator("2 + 3"));  
console.log(calculator("10 / 2"));   
console.log(calculator("3 * 4"));    
console.log(calculator("8 - 5"));  
console.log(calculator("10 / 0"));
