let student1 = {
  name: "kishanth",
  age: 20,
  login() {
    console.log("Hello", this.name);
    console.log("You are logged in");
  },
  logout() {
    console.log("You are logged out");
  },
};
let student2 = {
  name: "Gavaskar",
  age: 25,
  login() {
    console.log("Hello", this.name);
    console.log("You are logged in");
  },
  logout() {
    console.log("You are logged out");
  },
};
student1.login();
student2.login();

class User {
  //base class,parent class,super class
  static count = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.count++;
  }
  login() {
    console.log("Hello", this.name);
    console.log("You are logged in");
  }
  logout() {
    console.log("You are logged out");
  }
  static call() {
    console.log("Number of Users", User.count);
  }
}

let userOne = new User("kishanth", 20);
let userTwo = new User("Gavaskar", 25);
let userThree = new User("Kavya", 21);

userOne.login();
userTwo.logout();
userThree.login();
User.call();
console.log("number of users", User.count);
console.log("-------------------------------------------------------");

class PaidUser extends User {
  //derived class, child class,sub class
  constructor(name, age,storage) {
    super(name, age);
    this.storage = storage;
  }
  message() {
    console.log("you have 100Gb storage");
    return this

  }
  //overriding
  login() {
    console.log("Thank you for login");
    return this
  }
}

let user1 = new PaidUser("kishanth", 20, 200);
// user1.login();
//Method chaining
user1.message().login()