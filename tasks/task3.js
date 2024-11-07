// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  const result = people.find((stud) => stud.name === name);
  return result;
}

module.exports = findByName;