console.log("hello world");

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const abc = new Person("Tammy", 56);
console.log("person", abc);

Person.prototype.occupation = "Physician";

console.log(Person);
