//ENUMS

enum direction {
    North  = "NORTH",
    South  = "SOUTH",
    East   = "EAST",
    West   = "WEST",
    West1   = "",
}

console.log(direction.East); //EAST


// ************************************   "TUPLES" *****************************************
//To get data respectively or sequence wise 

let employeeInfo : [string , string , number| string , boolean] 

 employeeInfo = ["Muhammad" , "muhammad42@gmail.com" , 333333333 , true]

 console.log(employeeInfo); //[ 'Muhammad', 'muhammad42@gmail.com', 333333333, true ]


 //*******************Nested array in Tuple********************

 let LaptopInfo : [string , number , string] []

 LaptopInfo = [ ["DELL" , 25000 , "New Version" ] ]
 //LaptopInfo = [["LENOVO" , 30000 , 23234]]   //Error the value is not written respectively

 console.log(LaptopInfo); //[ [ 'DELL', 25000, 'New Version' ] ]





  
 
 //*********************************** MODULE*******************************
 //Export is used for resuable code in any file

 

 

 import  {addition} from "./module"   //addition is arrow function that is store in module file  and calling in this current file by importing
 //When you have to execute code from any file by targeting file and mentioned import 

 addition(8) //10




 //***************************************** NARROWING*******************

 //Narrowing is used to narrow down actual value of variable like string | number 

 let age : string | number

 age = 30.55 //narrowing the actual value should be number

 console.log(age.toFixed()); //31 It give the number function like toFixed which is used only for number
 
 age = "Thirty point five five"  //narrowing the actual value should be string

 console.log(age.toUpperCase()); //THIRTY POINT FIVE FIVE It gives the string function like toUppercase which is used for string


//  let price : string | number = 2000

//  if (typeof price === "number") {
//     console.log(price.toFixed());
    
//  }else{
//     console.log(price.toUpperCase());
//  }
    

let price = (p:number | string):void =>{
if (typeof p === "number") {
    console.log(p.toFixed());
    
}else{
    console.log(p.toUpperCase());
    
}
}

price(1.982) //2
price("one point nine eight two") //ONE POINT NINE EIGHT TWO

//**************************************REST PARAMETER IN FUNCTION ******************* 

//Infinite argument
//Rest parameter is always in array
//Zaroori nh apne jitne parameter diye hain utne hi arguments bhi dein
//It is always written in end of parameter
//Multiple number of arguments

function wallet(color:string , ...args:string[] ) {

    console.log(`My wallet color is ${color} and there are multiple things like ${args}`);
    
}

wallet("Black" , "currency" , "credit card" , "NIC" , "receipt" , "dollars")


let FileUpload =(...files:string[]) =>{
console.log(`Please upload your picture in different format like ${files}`);

}

FileUpload("PDF" , "PNG" , "JPEG")//Multiple arguments in one parameter





 
 
 






