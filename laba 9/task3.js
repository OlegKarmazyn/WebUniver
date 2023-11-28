function toSnakeCase(variableName) {
    const snakeCaseName = variableName.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`);
  
    return snakeCaseName;
  }
  
  const camelCaseVariable = "newBrandProduct";
  const snakeCaseResult = toSnakeCase(camelCaseVariable);
  console.log(snakeCaseResult);
  