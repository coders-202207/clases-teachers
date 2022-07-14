class Worker {
  name;
  age;
  bankAccountBalance;
  monthlySalary;
  entryHour;

  constructor(name, age, bankAccountBalance = 0) {
    this.name = name;
    this.age = age;
    this.bankAccountBalance = bankAccountBalance;
  }

  cobrateNomin() {
    this.bankAccountBalance += this.monthlySalary;
  }

  sayHi() {
    return `Hi, my name is ${this.name}.`;
  }

  static sayBye() {
    return `Bye!`;
  }
}

module.exports = Worker;
