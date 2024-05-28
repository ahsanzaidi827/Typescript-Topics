"use strict";
//                                  "DEFAULT PARAMETER"
//Jisme apne pehle hi value declared krdi hoti h parameter mein
function MyFirstGuest(Guest1 = "Ali") {
    console.log(`${Guest1} is my first guest`);
}
MyFirstGuest(); //You dont give value in argument again if you declared above
function T20WorldCup2024(WinPrediction = 75) {
    console.log(`Pakistan has ${WinPrediction}% chance to win in ICC T20 World Cup 2024`);
}
T20WorldCup2024(); //provided parameter above   //Pakisatn has 75% chance to win 
T20WorldCup2024(60); //Declared in argument     //Pakistan has 60% chance to win
// Use Undefined in Function
function addition(number1 = 2, number2 = 8) {
    console.log(number1 + number2);
}
addition(); //10        when both value defined in parameter 
addition(80, 20); //100        when you give value in argument
addition(undefined, 10); //12        If you write undefined in value 1 then automatically it will call default parameter value 1 that is 2
addition(undefined, undefined); //10      if you write undefined in argument in value 1 and 2, then automaticallt it will call default parameter value that mentioned above 2,8 
function addition2(number1, number2) {
    return (number1 + number2);
}
console.log(addition2(400, 400)); //800 
//                         OR
//let addition2answer =  addition2(800 , 200);  Iska matlab ha k jo bhi value addition2 k function mein return horhi h usko addition2answer mein store krlo
//console.log(addition2answer); 1000
