function toCamelCase(cssStyle) {
    return cssStyle.replace(/-([a-z])/g, (_, match) => match.toUpperCase());
}



console.log(toCamelCase("font-size"));       
console.log(toCamelCase("background-color"));
console.log(toCamelCase("text-align")); 

