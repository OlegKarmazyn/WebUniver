function toCamelCase(variableName) {
    const camelCaseName = variableName.replace(/_([a-z])/g, (match, group1) => group1.toUpperCase());
  
    return camelCaseName;
  }
  
  const snakeCaseVariable = "my_variable";
  const camelCaseResult = toCamelCase(snakeCaseVariable);
  console.log(camelCaseResult);
  