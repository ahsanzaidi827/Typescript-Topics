"use strict";
//                                       "TYPE ALIASES"
let mybestfriend = "Bilal"; // mybestfriend is Javascript Variable
console.log(mybestfriend); //Bilal
let MySelf = {
    name: "Ahsan",
    age: 25,
    qualification: "Undergraduate",
    passion: "Developer",
    hobbies: ["Cricket", "Researching", "Reading"],
    height: 5.6
};
console.log(MySelf.passion); //Developer
console.log(MySelf.qualification); //Undergraduate
let human = "Ahsan";
//Javascript variable         // Type alias
let animal = "Lion";
//Javascript variable         //  Type alias
console.log(animal); //Lion
console.log(human); //Ahsan
let ItcoursesSlot = [
    {
        session: "3 Session in one day",
        MondayToSundaySession: (start, end) => {
            console.log(` first session of day start from${start} and end at ${end}`);
            console.log(` second session of day start from${start} and end at ${end}`);
        },
    }
];
console.log(ItcoursesSlot[0].MondayToSundaySession("2pm", "5pm"));
console.log(ItcoursesSlot[0].MondayToSundaySession("7pm", "10pm"));
// //Type Union 
// type HumanOrAnimal = Human | Animal
// let humanOrAnimal : HumanOrAnimal = "Ahsan"
// console.log(humanOrAnimal); //Ahsan
// let humanOrAnimal2 : HumanOrAnimal = "Lion"
// console.log(humanOrAnimal2); //Lion
// let humanOrAnimal3 : HumanOrAnimal = 5;
// console.log(humanOrAnimal3); //5
// let humanOrAnimal4 : HumanOrAnimal = true;
// console.log(humanOrAnimal4); //true
// let humanOrAnimal5 : HumanOrAnimal = false;
// console.log(humanOrAnimal5); //false
// let humanOrAnimal6 : HumanOrAnimal = 5.6;
// console.log(humanOrAnimal6); //5.6
// let humanOrAnimal7 : HumanOrAnimal = "Lion";
// type MySelfDataType = {
//          name:string
//          age:number
//          number:number
//          passion:string
// }
// let MySelf:MySelfDataType ={
// }
