// Створення масиву "Сесія"
let session = [
    { discipline: "Math", points: 70, passed: true },
    { discipline: "Physics", points: 55, passed: false },
    { discipline: "English", points: 80, passed: true }
  ];
  
  // 1) Функція виведення списку дисциплін
  function displayDisciplines() {
    const passedDisciplines = session.filter(item => item.passed);
    const failedDisciplines = session.filter(item => !item.passed);
    const sortedDisciplines = passedDisciplines.concat(failedDisciplines);
  
    console.log(sortedDisciplines);
  }
  
  // 2) Додавання дисципліни в список
  function addDiscipline(name, points) {
    const existingDiscipline = session.find(item => item.discipline === name);
  
    if (existingDiscipline) {
      existingDiscipline.points += points;
  
      if (existingDiscipline.points >= 60) {
        existingDiscipline.passed = true;
      }
    } else {
      const newDiscipline = {
        discipline: name,
        points: points,
        passed: points >= 60
      };
  
      session.push(newDiscipline);
    }
  }
  
  // 3) Функція знаходження середнього балу
  function averagePoints() {
    const totalPoints = session.reduce((sum, item) => sum + item.points, 0);
    const average = totalPoints / session.length;
    return average;
  }
  
  // 4) Функція знаходження кількості незарахованих дисциплін
  function countFailedDisciplines() {
    const failedDisciplines = session.filter(item => !item.passed);
    return failedDisciplines.length;
  }
  
  // 5) Функція, що знаходить з якої дисципліни найвищий бал
  function disciplineWithHighestPoints() {
    const maxPoints = Math.max(...session.map(item => item.points));
    const discipline = session.find(item => item.points === maxPoints);
    return discipline.discipline;
  }
  
  // 6) Функція, що приймає кількість балів і виводить всі дисципліни, що здані на таку кількість балів
  function disciplinesPassedWithPoints(threshold) {
    const passedDisciplines = session.filter(item => item.passed && item.points >= threshold);
    console.log(passedDisciplines);
  }
  
  // Приклад
  displayDisciplines();
  addDiscipline("History", 55);
  console.log("Average Points:", averagePoints());
  console.log("Failed Disciplines:", countFailedDisciplines());
  console.log("Discipline with Highest Points:", disciplineWithHighestPoints());
  disciplinesPassedWithPoints(70);
  