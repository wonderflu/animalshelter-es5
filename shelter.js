// Shelter class
function Shelter(name) {
  this._name = name;
  this._cages = [];
}

// getting shelter name info
Shelter.prototype.getName = function () {
  return this._name;
};

// checking how many cages in the shelter
Shelter.prototype.getCages = function () {
  return this._cages;
};

// getting all dirty Cages
Shelter.prototype.getDirtyCages = function () {
  var dirtyCages = this._cages.filter(function (cage) {
    return cage.getDirty();
  });
  return dirtyCages;
};

// getting all dirty Cages Async
Shelter.prototype.getDirtyCagesAsync = function (callback) {
  setTimeout(
    function () {
      var error;
      var dirtyCages = this._cages.filter(function (cage) {
        return cage.getDirty();
      });
      if (!dirtyCages.length) {
        error = new Error(
          "There are no cages to clean, all of them are already clean."
        );
      }
      callback(error, dirtyCages);
    }.bind(this),
    1000
  );
};

// getting cage by ID
Shelter.prototype.getCageByID = function (id) {
  var cageByID;
  this._cages.forEach(function (cage) {
    if (cage.getID() === id) {
      cageByID = cage;
    }
  });
  return cageByID;
};

// getting cage by ID via filter
// Shelter.prototype.getCageByID = function (id) {
//   var cageByID = this._cages.filter(function (cage) {
//     return cage.getID() === id;
//   });
//   return cageByID[0];
// };

// adding cage to the shelter
Shelter.prototype.addCage = function (cage) {
  this._cages.push(cage);
};

// delete cage by id
// Shelter.prototype.deleteCageByID = function (id) {
//   var cageIndex;
//   this._cages.forEach(function (cage) {
//     if (cage.getID() === id) {
//       cageIndex = cage;
//     }
//   });
//   this._cages.splice(cageIndex, 1);
// };

// delete cage by id with index param in for each
Shelter.prototype.deleteCageByID = function (id) {
  var cageIndex;
  this._cages.forEach(function (cage, index) {
    if (cage.getID() === id) {
      cageIndex = index;
    }
  });
  this._cages.splice(cageIndex, 1);
};

// delete cage by id via filter
Shelter.prototype.deleteCageByID = function (id) {
  var cageIndex = this._cages.filter(function (cage, index) {
    if (cage.getID() === id) {
      cageIndex = index;
    }
  });
  this._cages.splice(cageIndex, 1);
};

// getting all hungry animals
Shelter.prototype.getHungryAnimals = function () {
  var hungryAnimals = [];
  this._cages.forEach(function (cage) {
    cage.getAnimals().forEach(function (animal) {
      if (animal.getHungry()) {
        hungryAnimals.push(animal);
      }
    });
  });
  return hungryAnimals;
};

// getting animal by ID
Shelter.prototype.getAnimalByID = function (id) {
  var animalByID;
  this._cages.forEach(function (cage) {
    cage.getAnimals().forEach(function (animal) {
      if (animal.getID() === id) {
        animalByID = animal;
      }
    });
  });
  return animalByID;
};
