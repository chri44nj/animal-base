const animalData = [
  { fullname: "Bliz the Best Dog", age: 14, alive: false },
  { fullname: "Tumle the Queen Cat", age: 17, alive: false },
  { fullname: "Tiger the Villain Cat", age: 17, alive: false },
  { fullname: "Monty the Giant Dog", age: 2, alive: true },
  { fullname: "Kovu the Happy Dog", age: 5, alive: true },
  { fullname: "Smaug the Firebreathing Dragon", age: 150, alive: false },
  { fullname: "ScoobyDoo the Puzzle-Solving Dog", age: 50, alive: true },
  { fullname: "Meinert the Maniac Cat", age: 10, alive: false },
  { fullname: "Rofus the Naked Rat", age: 8, alive: true },
  { fullname: "Felix the Chill Cat", age: 11, alive: false },
  { fullname: "Charlie the Horny Dog", age: 12, alive: true },
  { fullname: "Cirkeline the Old Cat", age: 16, alive: false },
  { fullname: "Muffe the Upstairs Cat", age: 4, alive: true },
  { fullname: "Valborg the Biscuit-Stuffed Whale", age: 69, alive: false },
  { fullname: "Mandu the Amazing Cat", age: 9, alive: true },
  { fullname: "Eggo the Bloodclat Dog", age: 7, alive: true },
];

export function getData() {
  return animalData.map((animal) => {
    const [name, , trait, species] = animal.fullname.split(" ");
    return {
      name,
      trait,
      species,
      age: animal.age,
      alive: String(animal.alive),
    };
  });
}
