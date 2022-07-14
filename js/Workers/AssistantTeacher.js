const Teacher = require("./Teacher");

class AssistantTeacher extends Teacher {
  correctedPrecourseExercises = 0;

  constructor(name, age, bankAccountBalance) {
    super(name, age, bankAccountBalance);

    this.monthlySalary = 4000;
  }

  correctPrecourseExercises() {
    this.correctedPrecourseExercises += 1;
  }
}

module.exports = AssistantTeacher;
