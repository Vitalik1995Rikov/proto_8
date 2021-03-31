function Name(name) {
  this.name = name;
}
let name1 = new Name('Alex');

let name2 = new name1.constructor('Pete');
alert(name2.name);