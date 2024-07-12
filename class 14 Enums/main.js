"use strict";
//ENUMS
Object.defineProperty(exports, "__esModule", { value: true });
var direction;
(function (direction) {
    direction["North"] = "NORTH";
    direction["South"] = "SOUTH";
    direction["East"] = "EAST";
    direction["West"] = "WEST";
    direction["West1"] = "";
})(direction || (direction = {}));
console.log(direction.East); //EAST
// ************************************   "TUPLES" *****************************************
//To get data respectively or sequence wise 
let employeeInfo;
employeeInfo = ["Muhammad", "muhammad42@gmail.com", 333333333, true];
console.log(employeeInfo); //[ 'Muhammad', 'muhammad42@gmail.com', 333333333, true ]
//*******************Nested array in Tuple********************
let LaptopInfo;
LaptopInfo = [["DELL", 25000, "New Version"]];
//LaptopInfo = [["LENOVO" , 30000 , 23234]]   //Error the value is not written respectively
console.log(LaptopInfo); //[ [ 'DELL', 25000, 'New Version' ] ]
//*********************************** MODULE*******************************
//Export is used for resuable code in any file
const module_1 = require("./module"); //addition is arrow function that is store in module file  and calling in this current file by importing
//When you have to execute code from any file by targeting file and mentioned import 
(0, module_1.addition)(8); //10
//***************************************** NARROWING*******************
//Narrowing is used to narrow down actual value of variable like string | number 
let age;
age = 30.55; //narrowing the actual value should be number
console.log(age.toFixed()); //31 It give the number function like toFixed which is used only for number
age = "Thirty point five five"; //narrowing the actual value should be string
console.log(age.toUpperCase()); //THIRTY POINT FIVE FIVE It gives the string function like toUppercase which is used for string
//  let price : string | number = 2000
//  if (typeof price === "number") {
//     console.log(price.toFixed());
//  }else{
//     console.log(price.toUpperCase());
//  }
let price = (p) => {
    if (typeof p === "number") {
        console.log(p.toFixed());
    }
    else {
        console.log(p.toUpperCase());
    }
};
price(1.982); //2
price("one point nine eight two"); //ONE POINT NINE EIGHT TWO
//**************************************REST PARAMETER IN FUNCTION ******************* 
//Infinite argument
//Rest parameter is always in array
//Zaroori nh apne jitne parameter diye hain utne hi arguments bhi dein
//It is always written in end of parameter
//Multiple number of arguments
function wallet(color, ...args) {
    console.log(`My wallet color is ${color} and there are multiple things like ${args}`);
}
wallet("Black", "currency", "credit card", "NIC", "receipt", "dollars");
let FileUpload = (...files) => {
    console.log(`Please upload your picture in different format like ${files}`);
};
FileUpload("PDF", "PNG", "JPEG"); //Multiple arguments in one parameter
//**************************** OPTIONAL PARAMETER FUNCTION***********************
//It allow function to be called without arguments
let TypescriptQuiz = (totalmarks, obtainedmarks, passingmarks) => {
    if (totalmarks | obtainedmarks) {
        console.log(`Your total marks is ${obtainedmarks} out of ${totalmarks}`);
    }
    else {
        console.log(`You have to score at least ${passingmarks} for passing quiz of typescript`);
    }
};
TypescriptQuiz(100, 80); //Your total marks is 80 out of 100    //passingmarks argument is optional   
TypescriptQuiz(100, 80, 50); //You have to score at least 50 for passing quiz of typescript
let Perfume = {
    name: "Axe",
    //brand : "Dove",  //This is optional 
    price: 2000,
};
console.log(Perfume);
