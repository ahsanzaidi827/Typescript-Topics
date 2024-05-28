"use strict";
//If you want print single return statement through arrow function but you do not write return and give {} bracket so you print like this
let Multiply = () => 900 + 100;
console.log(Multiply()); //1000
//                                             "ARRAY" []
//To store multiple values only in one variable like let courses:string = ["Generative AI" , "Metaverse" , Blockchain]
//Agr yahi courses mein store krta toh in courses ko separate variable mein store krta but in  array it give advantage to store multiple value in one variable
let AsiaCupTeams = ["Pakistan", "India", "Bangladesh", "Srilanka"];
//All teams are store in AsiaCupTeams
console.log(AsiaCupTeams); //[ 'Pakistan', 'India', 'Bangladesh', 'Srilanka' ]
//                                 
//                                            "INDEXING IN ARRAY"
//let AsiaCupTeams: string[] = ["Pakistan" , "India" , "Bangladesh" , "Srilanka"]
//                                   0          1            2             3
//To call a specific value from variable like I want to call only  Pakisatn that I have store above, so I can call through indexing
//Indexing always start from 0
console.log(AsiaCupTeams[0]); //Pakistan
console.log(AsiaCupTeams[3]); //Srilanka
console.log(AsiaCupTeams[5]); //Undefined
//                          "UPDATE/REPLACE VALUE IN ARRAY OR TO CHANGE VALUE IN ARRAY IF YOUR ALREADY STORED"
//If I want to   replace India with Afghanistan but through indexing
AsiaCupTeams[1] = "Afghanistan"; //Updated value
console.log(AsiaCupTeams); //[ 'Pakistan', 'Afghanistan', 'Bangladesh', 'Srilanka' ]
//                                              "BUILT IN FUNCTION OF ARRAY"
// 1 Pop () 
//Pop  is used to remove last element from array
let courses = ["Generative AI", "Metarverse", "Blockchain", "Web3.0"];
courses.pop(); // last element Web3.0 will be remove by this function
console.log(courses); //[ 'Generative AI', 'Metarverse', 'Blockchain' ]
// 2 Push ();
//Push is used to add last element in array 
courses.push("Digital Marketing"); //Digital Marketing will be added in last 
console.log(courses); //[ 'Generative AI', 'Metarverse', 'Blockchain', 'Digital Marketing' ]
// 3 shift ();
//Shift is used to remove first element from array
courses.shift(); //Generative AI will be remove from first
console.log(courses); //[ 'Metarverse', 'Blockchain', 'Digital Marketing' ]
// 4 unshift ();
//Unshift is used to add element at first in array
courses.unshift("Generative AI"); //Generative AI will added at first in array
console.log(courses); //[ 'Generative AI', 'Metarverse', 'Blockchain', 'Digital Marketing' ]
let fruits = ["Apple"];
fruits.push("Mango"); //Mango added in last                   [ 'Apple', 'Mango' ]
fruits.pop(); // Mango remove from last                [ 'Apple' ]
fruits.push("Mango", "Strawberry"); //Mango and Strawberry  added in last     [ 'Apple', 'Mango', 'Strawberry' ]
fruits.shift(); //Apple remove                [ 'Mango', 'Strawberry' ]
fruits.unshift("Cherry"); //Cherry added in first            [ 'Cherry', 'Mango', 'Strawberry' ]
console.log(fruits);
let fruits2 = ["Banana", "Grapes", "Watermelon"];
fruits2.pop();
fruits2.pop();
fruits2.pop();
console.log(fruits2); //[] empty array because all 3 fruits remove respectively from last
//                                      "NESTED ARRAY/ARRAY UNDER ARRAY [ [] ]"
let colddrink = ["Pepsi", "Coke", "7up", "Soda", ["Sting", "Dew"], ["fanta"]];
//                  0         1        2       3       4                    5
console.log(colddrink); //[ 'Pepsi', 'Coke', '7up', 'Soda', [ 'Sting', 'Dew' ], [ 'fanta' ] ]
console.log("Index 0", colddrink[0]); //Index 0 Pepsi
console.log("Index 1", colddrink[1]); //Index 1 Coke
console.log("Index 2", colddrink[2]); //Index 2 7up
console.log("Index 3", colddrink[3]); //Index 3 Soda
console.log("Index 4", colddrink[4]); //Index 4 [ 'Sting', 'Dew' ] 
console.log("Nested array index 0", colddrink[4][0]); //Nested array index 0 Sting
console.log("Nested array inedx 1", colddrink[4][1]); //Nested array inedx 1 Dew
console.log("Index 5", colddrink[5]); //Index 5 [ 'fanta' ]
console.log(colddrink[5][0]); // fanta
console.log(colddrink[5][1]); //undefined
let answer = (`"Here is your second index of coldrink"  ${colddrink[2]}`);
console.log(answer); //"Here is your second index of coldrink"  7up
//                                      "NESTED ARRAY WITH DATA TYPES"
let nestedarray = ["ahsan", "Ul haq", [12, 23, 45], [true, false]];
let nestedarray2 = [4, 47, ["a"], [true]];
let nestedarray3 = ["AHSAN", ["ahsan"]];
//5 SLICE ();
//The slice array return selected element in an array, as a new array
//It depends on 2 argument 
//argument 1 = starting point (inclusive)
//argument 2 = Ending point (exclusive) This point not added after running
// It will not change original array
let FavPlaces = ["Dubai", "Maldive", "Seoul", "Baali", "Azad Kashmir",];
//                           0          1           2         3          4            
console.log(FavPlaces.slice(1, 4)); //[ 'Maldive', 'Seoul', 'Baali' ]  The value range from 1 to 4 has print here but 4 value like above Azad Kashmir will not consider
console.log(FavPlaces); //[ 'Dubai', 'Maldive', 'Seoul', 'Baali', 'Azad Kashmir' ]      Original Array
//6 SPLICE
//To add or remove value from middle of array
//Overwrites the original array
let myFAVcar = ["COROLLA", "VIGO", "AUDI", "THUNDRA"];
let changingmyfavcar = myFAVcar.splice(1, 2, "V8");
//                                      start with 1      remove 2 item           Add V8
console.log(myFAVcar); //[ 'COROLLA', 'V8', 'THUNDRA' ]
console.log();
//                                          "OBJECT"
//Object is used for well structured data 
// syntax  let obj = {}
//It start from { and end at}
let userInfo = {
    name: "Sam Altman",
    founderof: "Chat GPT",
    launched: 2022
    //name , founderof , launchedof are the key of objects
};
console.log(userInfo.name); //Sam Altman
console.log(userInfo.founderof); //Chat GPT
console.log(userInfo.launched); //2022 
//If I want to change value of founderof
userInfo.name = "Bill Gates"; //Updated Value of founderof
console.log(userInfo.name); //Bill Gates
console.log(userInfo); //{ name: 'Bill Gates', founderof: 'Chat GPT', launched: 2022 }
//                    "MULTIPLE OBJECT IN ARRAY" [{}]
let cricketers = [
    {
        name: "Muhammad Hafeez",
        team: "Pakistan",
        ShirtNO: 8,
        BattingStyle: "Right-Hand",
        called: "Professor",
    },
    {
        name: "Imran Khan",
        team: "Pakistan",
        ShirtNO: 14,
        BattingStyle: "Right-Hand",
        called: "Kaptaan",
    },
    {
        name: "Virat Kohli",
        team: "India",
        ShirtNO: 18,
        BattingStyle: "Right-Hand",
        called: "Run Machine",
    }
]; //array end
//Now we called it through calling variable of objects and then indexing in array and then access it with .with their key
console.log(cricketers[1].name); //Imran Khan
//                                 ARROW FUNCTION IN OBJECT
let car = {
    make: "Toyota",
    model: 2023,
    color: "Black",
    Brand: "Corolla",
    start: (started) => {
        console.log(`My car is ${started}`);
    }
};
console.log(car.start("start right now")); //Hurray!My car is start right now
//                                  "NESTED OBJECTS   
let product = {
    name: "Laptop",
    color: {
        color1: "Black",
        color2: "Grey",
    },
    price: 50000
};
console.log(product.color.color1); //black
console.log(product.color.color2); //Grey
console.log(product.price); // 50000
