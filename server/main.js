import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {
  class Person {
    constructor(name = 'Anoynymous', age = 0) {
      this.name = name;
      this.age = age;
    }

    getGreeting() {
      return `Hi I'm ${this.name}, ${this.age} year(s) old.`;
    }

    getPersonDescription() {
      return `My name is ${this.name}, ${this.age} year(s) old.`;
    }
  }

  class Employee extends Person {
    constructor(name, age, title) {
      super(name, age);
      this.title = title;
    }

    getGreeting() {
      if (this.title) {
        return `${this.name} is ${this.age} year(s) old. I'm a ${this.title}`;
      } else {
        return super.getGreeting();
      }
    }

    hasJob() {
      return !!this.title;
    }
  }

  // Programmer -> extends from Person
  // name, age, preferredLanguage defaults to 'assembly'
  // Override getGreeting
  // Hi! I am Andrew. I am a assemly developer

  class Programmer extends Person {
    constructor(name, age, preferredLanguage = 'assembly') {
      super(name, age);
      this.preferredLanguage = preferredLanguage;
    }
    getGreeting() {
      if (this.preferredLanguage) {
        return `Hi! I am ${this.name}. I am a ${
          this.preferredLanguage
        } developer`;
      } else {
        super.getGreeting();
      }
    }
  }

  let me = new Programmer('Tuan', 22, 'Javacript');
  console.log(me.getGreeting());
});
