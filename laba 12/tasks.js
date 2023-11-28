// Завдання 1: Реалізація класу Student
class Student {
    constructor(lastName, firstName, grades) {
      this.lastName = lastName;
      this.firstName = firstName;
      this.grades = grades;
    }
  }
  
  // Завдання 2: Реалізація класу ListOfStudents
  class ListOfStudents {
    constructor(students) {
      this.students = students;
    }
  
    getTableList() {
      let table = '<table border="1"><tr><th>Last Name</th><th>First Name</th><th>Grades</th></tr>';
      for (const student of this.students) {
        table += `<tr><td>${student.lastName}</td><td>${student.firstName}</td><td>${student.grades.join(', ')}</td></tr>`;
      }
      table += '</table>';
      return table;
    }
  }
  
  // Завдання 3: Реалізація класу StylesTable
  class StylesTable extends ListOfStudents {
    getStyles() {
      return 'table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid black; padding: 8px; text-align: left; }';
    }
  
    getTableList() {
      const parentTable = super.getTableList();
      const styles = this.getStyles();
      return `<style>${styles}</style>${parentTable}`;
    }
  
    getAvg(grades) {
      const sum = grades.reduce((total, grade) => total + grade, 0);
      return sum / grades.length;
    }
  
    getTotalAvg() {
      let totalSum = 0;
      for (const student of this.students) {
        const avg = this.getAvg(student.grades);
        totalSum += avg;
        student.avg = avg.toFixed(2);
      }
      const groupAvg = (totalSum / this.students.length).toFixed(2);
      return `Group Average: ${groupAvg}`;
    }
  }
  
  const studentsArray = [
    new Student('Doe', 'John', [90, 85, 92]),
    new Student('Smith', 'Alice', [78, 92, 88]),
    new Student('Johnson', 'Bob', [85, 88, 95]),
  ];
  
  const listOfStudents = new ListOfStudents(studentsArray);
  console.log(listOfStudents.getTableList());
  
  const stylesTable = new StylesTable(studentsArray);
  console.log(stylesTable.getTableList());
  console.log(stylesTable.getTotalAvg());
  