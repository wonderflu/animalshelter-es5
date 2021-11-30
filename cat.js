// child class constructor
function Cat(name, yearOfBirth, breed, amountOfLegs) {
  // constructor inherirance, the child class will have all fields from the parent class
  Animal.call(this, name, yearOfBirth);

  this._breed = breed;
  this._amountOfLegs = amountOfLegs;
}

// inheritting all the methods from the parent class
// creating a new prototype based on the parent prototype
Cat.prototype = Object.create(Animal.prototype);
// setting its own constructor for the child prototype
Cat.prototype.constructor = Cat;

// child class methods
// getting info about breed
Cat.prototype.getBreed = function () {
  return this._breed;
};

// getting and setting info about amount of legs in case of injury or amputation
Cat.prototype.getAmountOfLegs = function () {
  return this._amountOfLegs;
};
Cat.prototype.setAmountOfLegs = function (value) {
  this._amountOfLegs = value;
};
