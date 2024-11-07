const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  const dashboard = students.filter((stud) => stud.score > 80);
  const topStudentsName = dashboard.map((i) => i.name);
  return topStudentsName;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  let totalAge = 0;
  for (const stud of students) {
      totalAge += stud.age;
  }
  let averageAge = totalAge / students.length;
  return averageAge;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student);
  return students;
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  const result = students.filter((stud) => stud.name !== name);
  return result;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };