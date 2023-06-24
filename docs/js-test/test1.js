class Fruits {
  constructor() {
    this.colors = ["red", "green", "blue"];
  }
}

class Apple extends Fruits {
  constructor() {
    super();
  }
}

let app1 = new Apple();

console.log(app1.colors)