function replaceDateFormat(text) {
    return text.replace(/(\d{4})\/(\d{2})\/(\d{2})/g, '$3.$2.$1');
}

const originalText = "Сьогоднішня дата: 2022/01/15. Минула дата: 2021/12/05.";
const newText = replaceDateFormat(originalText);
console.log(newText);  
