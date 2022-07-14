const AssistantTeacher = require("./Workers/AssistantTeacher");
const LeadTeacher = require("./Workers/LeadTeacher");
const TechnicalCoach = require("./Workers/TechnicalCoach");

const mario = new LeadTeacher("Mario", 23, 300000);
const facu = new AssistantTeacher("Facu", 22, 300001);
const gerard = new TechnicalCoach("Gerard", 24);

console.log(mario);
console.log(facu);

gerard.sound = "Piquen, piquen, trabajen, no paren";
console.log(gerard);
console.log(gerard.sayHerHisLittleThings());
console.log(gerard.sayHi());
