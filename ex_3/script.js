let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// Думал, что оба объекта получат свойство full, оказалось только rabbit