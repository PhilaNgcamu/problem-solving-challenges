class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      console.log("The name must be a string");
    }
  }

  displayInfo() {
    return `My name is ${this._name} and I'm ${this._age} years old`;
  }
}

const person = new Person("Phila", 33);

// person.name("Ngcamu");
// console.log(person.name());
person.name = true;
console.log(person.name);
