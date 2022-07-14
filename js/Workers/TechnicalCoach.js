const Worker = require("./Worker");

class TechnicalCoach extends Worker {
  sound;

  constructor(name, age, bankAccountBalance) {
    super(name, age, bankAccountBalance);

    this.monthlySalary = 800;
  }

  sayHerHisLittleThings() {
    return this.sound;
  }

  sayHi() {
    return `${super.sayHi()}, my job is about doing nothing`;
  }
}

module.exports = TechnicalCoach;
