 
function toKebabCase(camelCase) {
    return camelCase.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

console.log(toKebabCase("fontSize"));       
console.log(toKebabCase("backgroundColor")); 
console.log(toKebabCase("textAlign"));     