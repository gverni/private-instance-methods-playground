// class TestClass {
//     #internalValue = 12
//     _internalValue = 14

//     get internalValue () { return #internalValue}
// }

// testClass = new TestClass()
// console.log(testClass.internalValue)
// console.log(testClass._internalValue)

// class Person {
//   constructor () {
//     this.age = 19
//   }

//   increaseAge () {
//     this.age++
//   }

//   birthday () {
//     this.increaseAge()
//     console.log('Happy Birthday! You are now ' + this.age)
//   }
// }


// person = new Person()
// person.increaseAge()
// person.birthday()

// person2 = new Person2()
// try {
//   // this should return an error
//   person2.increaseAge()

// } catch (e) {
//   console.log('It should trigger an error that increaseAge is not a function')
//   console.log(e)
// }
// person2.birthday()


// function Person3 () {
//   this.age = 30
//   Object.defineProperties(this, {
//     params: {
//       writable: false,
//       enumerable: true
//     }
//   })
// }

// Person3.prototype.getAge = function () {
//   return this.age
// }


class Person {
  // #age

  // #increaseAge() {
  //   //this.#age++;
  // }

  
  birthday() {
    //this.#increaseAge();
    //console.log("Happy Birthday! You are " + this.#age);
  }

  rejuvinate () {
    //this.#age = 1 
    return require('./rejuvinate')
  }
}

var person = new Person()
person.birthday()
person.birthday()
person.rejuvinate()
console.log(person.age)
