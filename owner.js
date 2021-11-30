// Owner class
function Owner(name, yearOfBirth) {
  this._name = name;
  this._yearOfBirth = yearOfBirth;
  this._shelter = null;
}

// getting owner's name info
Owner.prototype.getName = function () {
  return this._name;
};

// calculating age by subtracting the provided year of birth from the current year
Owner.prototype.getAge = function () {
  var currentYear = new Date().getFullYear();
  if (this._yearOfBirth === currentYear) {
    return 1;
  } else {
    return currentYear - this._yearOfBirth;
  }
};

Owner.prototype.getShelter = function () {
  return this._shelter;
};

Owner.prototype.setShelter = function (shelter) {
  this._shelter = shelter;
};

Owner.prototype.feedHungryAnimals = function () {
  this._shelter.getHungryAnimals().forEach(function (animal) {
    animal.full();
  });
};

Owner.prototype.cleanDirtyCages = function () {
  this._shelter.getDirtyCages().forEach(function (cage) {
    cage.clean();
  });
};
