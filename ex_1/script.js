let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // true, берет у rabbit, т к не было бы своего, взял бы у animal, но есть свое
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // null, свое удалил, теперь берет у animal
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // теперь и у animal удалил, теперь будет undefined