// Cage class
function Cage(size) {
  this._size = size;

  // generating unique id for each object based on current data and adding 1-2 random numbers to make it more unique
  this._id = Date.now() + Math.floor(Math.random() * 100);
  this._dirty = false;
  this._animals = [];
}

// getting info about cage size: small, medium, large
Cage.prototype.getSize = function () {
  return this._size;
};

// getting unique id for each object, id was generated in the constructor
Cage.prototype.getID = function () {
  return this._id;
};

// getting cage dirtiness status, if it is dirty(true) owner goes to clean it
Cage.prototype.getDirty = function () {
  return this._dirty;
};
Cage.prototype.dirty = function () {
  this._dirty = true;
};
Cage.prototype.clean = function () {
  this._dirty = false;
};

// checking how many animals in the cage
Cage.prototype.getAnimals = function () {
  return this._animals;
};

// adding an animal to the cage, in parameter we pass an object that has already been created
Cage.prototype.addAnimal = function (animal) {
  this._animals.push(animal);
};

// removing an animal from the cage by ID, in parameter we pass an object that has already been created
Cage.prototype.removeAnimalByID = function (id) {
  var animalIndex;
  this._animals.forEach(function (animal) {
    if (animal.getID() === id) {
      animalIndex = animal;
    }
  });
  this._animals.splice(animalIndex, 1);
};
