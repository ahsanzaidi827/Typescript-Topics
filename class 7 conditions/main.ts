let ramadan =  "ramadan";
if (ramadan == ramadan) {
    console.log("water bottle is not allowed");
    
}else{
    console.log("water bottle is allowed");
    
}

let age:number = 40;

if (age ==  18) {
    console.log("You can go School ");
    
}else if (age = 20) {
    console.log("You can study in College");
    
}else if ((age > 20) || (age <= 24)) {
    console.log("You can study in Universities");
    
}else{
    console.log("Age error");
    
}

let Age:number = 25;
console.log(Age>= 17 && age<= 20, "You are school student");
console.log(Age >= 21 && age<= 23, "you are college student");
console.log(Age>= 24 && Age <= 28, "You are University student");

//This show the message with true and false like
//false you are school student
//false you are collge student
//true your are University student

//Making a condition like if bill is paid then light will be on
let bill = "paid";
let light =  "Light will be on"
let bulb = (bill && light);
console.log(bulb);

let bill2:Boolean =  true  //agr mein false likdo toh ye condition ko run nh karega qk && operator mein iski value true honi chaiye
let KE = "KE light on ha";
let UPS =  "UPS on ha";
console.log( (bill2 && KE || UPS));

                                                        










