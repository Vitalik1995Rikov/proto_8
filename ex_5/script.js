function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}; //true
// 2. Rabbit.prototype.eats = false; // false
// 3. delete rabbit.eats; // true, т к у rabbit и не было такого свойства
// 4. delete Rabbit.prototype.eats; // undefined, удалили свойство

alert( rabbit.eats ); 