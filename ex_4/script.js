let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// Не нашел
alert( lazy.stomach ); // пусто

// Добавил массив stоmach для каждого хомяка свой 
// теперь т к есть свое свойство у каждого массива, то значение падает туда