let student1 = {
  name: "kishanth",
  age: 20,
  login() {
    console.log("hello", this.name);
    console.log("you are logged in");
  },
  logout() {
    console.log("you are logged out");
  },
};
let student2 = {
  name: "Gavaskar",
  age: 25,
  login() {
    console.log("hello", this.name);
    console.log("you are logged in");
  },
  logout() {
    console.log("you are logged out");
  },
};
// student1.login();
// student2.logout();

class User {
  static count = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    User.count++;
  }
  login() {
    console.log("hello", this.name);
    console.log("you are logged in");
  }
  logout() {
    console.log("you are logged out");
  }
}
let userone = new User("kishanth", 20);
let usertwo = new User("Gavaskar", 25);
// let userthree = new User("Kavya",21)

userone.login();
usertwo.login();
// userthree.login()
console.log("Number of users Logged in: ", User.count);
