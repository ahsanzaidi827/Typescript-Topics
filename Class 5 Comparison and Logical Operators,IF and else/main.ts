               //Comparison Operators
//less than <
//greater than>
//greater than or equal to >=
//less than or equal to <=
// ==  if two value is equal is true otherwise it is false
//=== if two values is equal and also their data types then it is true and otherwise its false
//if It is used use for true purpose
//else It is used for false purpose 
//ifelse It is used for multiple condition


//less than and if and else
let num1:number="100";
let num2:number="150";
if (num1>num2) {
    console.log("150 is greater");
    
}else{
    console.log("100 is smaller than 150");
    
    
}

//Greater than and if and else
let num3:number=10.5
let num4:number=99.5
if (num4>num3) {
    console.log("You are absolutely right 99.5 is greater than 10.5");
    
}else{
    console.log("10.5 is smaller than 99.5");
    
}
//greater than or equal to>=
let num5:number=1000;
let num6:number=2000;
if (num6>=num5) {
    console.log("Great! 2000 is greater ");
    
}else{
    console.log("You are wrong");
    
}
//less than or equal to
let num7:number=9.9;
let num8:number=9.9;
if (num7<=num8) {
    console.log("9.9 is equal to 9.9 ");
    
}else{
    console.log("wrong");
    
}
//==
let num9:number=70
let num10:string="70"
if (num9==num10) {
    console.log("you are right 70 is equal");
    
}else{
    console.log("You are wrong");
    
}

//===
let num11:number=70
let num12:string="70"
if (num9===num10) {
    console.log("70 is equal to 70 but there datatype is different ");
    
}else{
    console.log("You are wrong");
    
}

                      //"LOGICAL OPERATORS" it resulted in boolean like true or false

// && (And Operator) It check the condition if one is false the answer is false,all the condition have to be true for then answer will b true 
//|| (Or Operator) Atleast one condition is true for this operator then answer will be true 
// ! (Not Operator) For changing the result like x=true;then x also will be false 

// && If we want to make  all statement true we use this type of operator
let email:string="ahsan00@gmail.com"
let pass:String="12345"
if (email=="ahsan00@gmail.com" && pass=="12345") {
    console.log("Succesfully Login");
    
}else{
    console.log("Invalid"); //else condition is use for false purpose 
    
}

// || If we want to make only one statement true we use this type of operator
 let email2:string="ahsan00@gmail.com"
 let pass2:string="12345"
if (email=="ahsan00@gmail.com" || pass=="1234567") {
    console.log("Succesfully Login");
    
}else{
    console.log("Invalid"); //else condition is use for false purpose
    
}
