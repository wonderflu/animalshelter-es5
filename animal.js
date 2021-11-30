// parent class constructor
function Animal(name, yearOfBirth) {
  this._name = name;
  this._yearOfBirth = yearOfBirth;

  // generating unique id for each object based on current data and adding 1-2 random numbers to make it more unique
  this._id = Date.now() + Math.floor(Math.random() * 100);
  this._hungry = false;
}
// adding methods to the object prototype so they will be available to all other instances
// getting and setting name for the animal
Animal.prototype.getName = function () {
  return this._name;
};
Animal.prototype.setName = function (value) {
  this._name = value;
};

// calculating age by subtracting the provided year of birth from the current year
Animal.prototype.getAge = function () {
  var currentYear = new Date().getFullYear();
  if (this._yearOfBirth === currentYear) {
    return 1;
  } else {
    return currentYear - this._yearOfBirth;
  }
};

// getting unique id for each object, id was generated in the constructor
Animal.prototype.getID = function () {
  return this._id;
};

// getting animal's hunger status, if it is hungry(true) owner goes to feed it
Animal.prototype.getHungry = function () {
  return this._hungry;
};
Animal.prototype.hungry = function () {
  this._hungry = true;
};
Animal.prototype.full = function () {
  this._hungry = false;
};
