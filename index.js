var animal = 'dog'

function myAnimal() {
  return animal
}

var wanimal = 'cat'

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return wanimal
}

function add2(n) {
  const two = 2
    return n + two
  // Feel free to move things around!
}

var funkyFunction = function() { // funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!" // funkyFunction()()
  }
}

// We want this to return "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
