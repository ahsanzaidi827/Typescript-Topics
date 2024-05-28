"use strict";
//                                       "Variable"       
let age = 18;
let expiry = 10;
if (age >= 18 && expiry == 10) {
    console.log("You are eligible to NIC"); // This will run because these two is correct
}
else if (expiry == 20) {
    console.log("Your NIC is expired"); //This will also be correct but it check the first one 
}
else {
    console.log("Not valid for NIC");
}
//                               "CONCATINATION"  To write  value and string in one line 
let course = "GenAI , Metaverse and Web3.0";
let venue = "Governor House";
let initiatives = "Governor Sindh IT initiative";
let programof = "Kamran Tessori";
console.log(`Right now, I am currently enrolled in course of ${course} at ${venue} which is a great program of ${programof} and a great initiative by ${initiatives}`);
//we use backtick to use for javascipt value and string in one line 
//we use $ to target specific value of variable when we write in paragraph form or in string format type
//                                          "FUNCTION"
//Multiple line of code that make functionality or recipe that can apply everyone by making once
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Ahsan"); //Hello Ahsan
function welcome(venue, learning) {
    console.log(`Welcome to ${venue} and start learning ${learning}`);
}
welcome("Governor House", "GenAI"); // Welcome to Governor House and start learning GenAI
//                            "Placing order from function "
function orderplace(from, to) {
    console.log(`Dear! Your order place from ${from} to ${to}`);
}
orderplace("Gulshan", "DHA"); //Dear! Your order place from Gulshan to DHA
orderplace("North Karachi", "Clock Tower"); //Dear! Your order place from North Karachi to Clock Tower
//                              "Making square root through Function"
function squareroot(digit) {
    console.log(digit * digit);
}
squareroot(5); //25
squareroot(7); //49
function accessories(mob = "iphone") {
    console.log(accessories);
}
accessories();
accessories("apple watch");
