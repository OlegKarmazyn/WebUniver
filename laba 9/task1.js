function findDates(text) {
    const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/g;
  
    const dates = text.match(dateRegex);
  
    return dates || [];
  }
  
  const textWithDates = "Today is 2023-11-28 and tomorrow is 2023-11-29.";
  const foundDates = findDates(textWithDates);
  console.log(foundDates);
  