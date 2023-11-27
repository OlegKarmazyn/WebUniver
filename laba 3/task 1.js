function numberToText(num) {
    const units = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
    const teens = ["", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
    const tens = ["", "десять", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];

    if (num < 10) {
        return units[num];
    } else if (num < 20) {
        return teens[num - 10];
    } else {
        const digit = num % 10;
        const ten = Math.floor(num / 10);
        return `${tens[ten]} ${units[digit]}`;
    }
}


console.log(numberToText(35));  
console.log(numberToText(89));
console.log(numberToText(12)); 
