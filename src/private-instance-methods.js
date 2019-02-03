class Person {
    #age = 19;
  
    #increaseAge () {
      this.#age++;
    }
  
    birthday() {
      this.#increaseAge();
      console.log("Happy Birthday! You are " + this.#age);
    }
  }

var person = new Person()
person.birthday()
