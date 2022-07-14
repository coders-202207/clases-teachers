const Teacher = require("./Teacher");

class LeadTeacher extends Teacher {
  correctedExams = 0;

  constructor(name, age, bankAccountBalance) {
    super(name, age, bankAccountBalance);

    this.monthlySalary = 850;
  }

  correctExam() {
    this.correctedExams += 1;
  }
}

module.exports = LeadTeacher;
