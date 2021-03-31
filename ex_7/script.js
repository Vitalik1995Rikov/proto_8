Function.prototype.defer = function(ms) {
  setTimeout(f, ms);
}

function f() {
  alert("Hello!");
}

f.defer(1000); // будет хэлло через 1 сек