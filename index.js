var meu = new Cat("Tetris", 2012, "homeless", 4);
var meu2 = new Cat("Murzik", 2015, "persian", 4);
var meu3 = new Cat("Tolik", 2003, "siberian", 4);
var meu4 = new Cat("Dorik", 2004, "shorthair", 4);
var meu5 = new Cat("Pusik", 2005, "ragdoll", 4);
var meu6 = new Cat("Lisik", 2006, "sphynx", 4);
var meu7 = new Cat("Murlo", 2007, "british", 4);
var meu8 = new Cat("Murlidze", 2005, "scottish", 4);
var meu9 = new Cat("Mint", 2021, "homeless", 4);
var meu10 = new Cat("Noris", 2007, "siamese", 4);

var cague = new Cage("large");
var cague2 = new Cage("small");
var cague3 = new Cage("medium");
var cague4 = new Cage("medium");

cague.addAnimal(meu);
cague.addAnimal(meu2);
cague2.addAnimal(meu3);
cague2.addAnimal(meu4);
cague3.addAnimal(meu5);
cague3.addAnimal(meu6);
cague3.addAnimal(meu7);
cague4.addAnimal(meu8);
cague4.addAnimal(meu9);
cague4.addAnimal(meu10);

meu.hungry();
meu3.hungry();
meu5.hungry();
meu6.hungry();
meu10.hungry();

cague.dirty();
cague2.dirty();
cague4.dirty();

var natahinDom = new Shelter("Natahin Dom");
natahinDom.addCage(cague);
natahinDom.addCage(cague2);
natahinDom.addCage(cague3);
natahinDom.addCage(cague4);

var nataha = new Owner("Nataha", 1993);
nataha.setShelter(natahinDom);
nataha.getShelter();

natahinDom.getDirtyCagesAsync(function (error, dirtyCages) {
  if (error) {
    console.log(error);
  } else {
    console.log(dirtyCages);
    // cague.clean();
    // cague2.clean();
    // cague4.clean();
    natahinDom.getDirtyCagesAsync(function (error, dirtyCages) {
      if (error) {
        console.log(error);
      } else {
        console.log(dirtyCages);
        natahinDom.getDirtyCagesAsync(function (error, dirtyCages) {
          if (error) {
            console.log(error);
          } else {
            console.log(dirtyCages);
          }
        });
      }
    });
  }
});

// Shelter.prototype.getDirtyCages = function () {
//   var dirtyCages = this._cages.filter(function (cage) {
//     return cage.getDirty();
//   });
//     if (dirtyCages.length === 0) {
//       throw new Error("all cages are clean");
//     } else {
//   return dirtyCages;
//     }
// };
