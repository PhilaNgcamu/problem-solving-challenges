class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
  displayInfo() {
    return `My name is ${this._name} and I'm ${this._age} years old`;
  }
}

const person = new Person("Phila", 33);

// person.name("Ngcamu");
// console.log(person.name());
person.name = "Sande";
console.log(person.name);
