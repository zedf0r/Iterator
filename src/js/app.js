export class Character {
  constructor(name, type, attack, defence) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error("Неправильный ввод имени");
    }
    const typeString = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];

    if (!typeString.includes(type)) {
      throw new Error("Неправильный ввод типа");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
}

export class Team {
  constructor() {
    this.characters = [];
    this.characters.push(new Character("Wolf", "Zombie", 40, 20));
    this.characters.push(new Character("Gendalf", "Magician", 30, 30));
  }

  [Symbol.iterator]() {
    let current = 0;
    const characters = this.characters;
    let end = characters.length;

    return {
      next() {
        if (current < end) {
          return { value: characters[current++].name, done: false }
        } else {
          return { value: undefined, done: true }
        }
      }
    }
  }
}