"use strict";
//TYPE INTERFACE
//It creates new type by combining multiple existing types
//There is no = in it 
{
    let course = [{
            session: {
                session1: "9 to 12",
                session2: "2 to 5",
                session3: "6 to 9",
            },
            ClassTopic: ["Typescript", "Nodejs", "Nextjs"],
            Teachername: "Ali Jawwad",
        }];
    console.log(course[0].session.session1); //9 to 12009997543222``Zzxcv./f';ukimjk;'fdhjl;    2
    //                                      "LOOPS"
    //Loop allow code to be executed repeatedly based on a condition
    //if you want to run the same code over and over again, each time with a different value.
    //1 FOR LOOP:
    //It repeatedly execute a block of code a specific number of times
    //There are 3 expressions in for loop
    //1 starting point
    //2 ending point 
    //3 steps to reach starting point from ending point 
    //syntax    for () {7    
}
for (let n = 0; n <= 10; n++) {
    //starting point        //ending point      steps of reaching ending point
    console.log(n); //0 1 2 3 4 5 6 7 8 9 10
    console.log(n); //0 1 2 3 4 5 6 7 8 9 10 10
}
//Make table of 2 
let n1 = 2;
for (let n = 1; n <= 10; n++)
    console.log(`${n1} * ${n} = ${n1 * n}`);
//I want to make addition of 5 from 25 to 50
for (let x = 25; x <= 50; x = x + 5) {
    console.log(x); //25 30 35 40 45 50
    console.log(x); //25 30 35 40 45 50 50
}
for (let m = 0; m <= 5; m++) {
    console.log("My name is Ahsan");
    //My name is Ahsan
    //My name is Ahsan
    //My name is Ahsan
    //My name is Ahsan
    //My name is Ahsan
}
//WHILE LOOP
//This type of loop through a block of code while a specified condition is true
//syntax
//let variable = 0                 => Starting point
//while (  ending point   )  {
// ++ steps to reach ending point
// console.log
let aa = 0; //starting point
while (aa <= 10) {
    // (ending point)
    console.log(aa);
    aa++; //step to reach at ending point
}
//Make table of 2 using while loop
let n2 = 2;
let n3 = 1;
while (n3 <= 10) {
    console.log(`${n2} * ${n3} = ${n2 * n3}`);
    n3++;
}
//I want to make addition of 5 from 25 to 50
let x = 25;
while (x <= 50) {
    console.log(x);
    x = x + 5;
}
//I want to print my name five time
let m = 0;
while (m <= 5) {
    console.log("My name is Ahsan");
    m++;
}
let persons = ["Babar", "Kohli", "Shaheen"];
for (let p = 0; p < persons.length; p++) {
    console.log(persons[p]); //Babar Kohli Shaheen
}
//FOR OF LOOP:
//It is always used with array
let persons2 = ["Babar", "Kohli", "Shaheen"];
for (let p of persons2) {
    console.log(p); //Babar Kohli Shaheen
}
let names = ["Ahsan", "Hasan", "Mohsin"];
for (let n of names) {
    console.log(n);
    console.log(n);
}
