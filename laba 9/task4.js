function findHexColor(text) {
    const hexColorRegex = /#([0-9a-fA-F]{3}){1,2}\b/g;
  
    const match = text.match(hexColorRegex);
  
    return match ? match[0] : null;
  }
  
  const textWithColors = "The page background color is #123456 and the text color is #abc.";
  const foundColor = findHexColor(textWithColors);
  console.log(foundColor);
  