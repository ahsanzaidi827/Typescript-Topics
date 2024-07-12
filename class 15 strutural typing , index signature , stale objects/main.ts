
//**************************** OPTIONAL PARAMETER FUNCTION***********************
//It allow function to be called without arguments



let TypescriptQuiz = (totalmarks:number , obtainedmarks:number , passingmarks?:number)  =>{

    if (totalmarks | obtainedmarks) {
    
        console.log(`Your total marks is ${obtainedmarks} out of ${totalmarks}`);
        
    }else{
        console.log(`You have to score at least ${passingmarks} for passing quiz of typescript`);
        
    }
    }

    TypescriptQuiz(100, 80) //Your total marks is 80 out of 100    //passingmarks argument is optional   

TypescriptQuiz(100, 80, 50) //You have to score at least 50 for passing quiz of typescript





//*******************************OPTIONAL TYPE ALIAS*******************

interface perfume  {
    name:string,
    brand?:string, //This is optional 
    price:number, 

}
let Perfume : perfume = {
    name : "Axe",
    //brand : "Dove",  //This is optional 
    price : 2000, 
    
}

console.log(Perfume);



//*******************************EXPLICIT CASTING OR TYPE ASSERTION**************************
//Jab apko kisi variable ki data type nh pata ho or aagey jakar apne change krni ho type


//Use as "as"
let value : unknown  = "Hello Ahsan";

let stringvalue = value as string //Now the data type of value is string 

console.log(stringvalue.toUpperCase()); //HELLO AHSAN
console.log(stringvalue.toLowerCase()); //hello ahsan

let value2 : unknown = 2000

console.log((value2 as number).toFixed(7)); //2000.0000000



//*******************************STRUCTURE TYPIGN/OBJECT STRUCTURE**************************
//It compares multiple object data types and data 

interface ball {
    diameter:number
}
interface sphere {
    diameter:number
    
}
interface tube {
    diamter: number,
    length : number
}
let Ball : ball  = {
    
       diameter:  90
}
let Sphere : sphere  = {
       
       diameter:  100,
       
}
//let Tube : tube  = {
      // diamter : 40,
       //length : 100
//}

 Ball = Sphere //It is valid qk jo property Ball mein h wo Sphere mein bhi h 
 //Tube = Ball  //Error because the property of Tube is not same as Ball
 Sphere  = Ball //It is valid 
 //Ball = Tube 



 //********************************INDEX SIGNATURE  ******************************/
 //Jab apko advance property nh pata ho 

 interface x  {
    id : number 
    [x : string] : any   //Index Signature
 }

 let X : x = {
    id : 6565656565,
    
    name :"George", //The type of name is not mention above but it runs by index signature
    age : 20,       //The type of age is not mention above but it runs by index signature
    address : "Karachi", //The type of address is not mention above but it runs by index signature
 }

 console.log(X.name); //George
 console.log(X.address);


 //*******************************STALE OBJECT***********************//
 //It is the object which is created and then modified later

 let MySelf = {
    name : "Ahsan",
    age : 20
 } //It is fresh object 

 //Fresh object become stale object by 3 ways

 // 1 Modifying value

 MySelf.name = "John"; //Modifying value of name

 console.log(MySelf.name); //John

 //Ab MySelf ab stale object hogaya h means old hogaya h qk humne is object ko modified krliya h


 // 2 Reassign value

 let myself = MySelf 
 //Ab ye stale object hogaya 

 //2 By function arguments


 function MYSELF() {

    console.log(`Give me the name of object like ${myself.name}`);
    
 }

 MYSELF ();


 //fresh object 
 type person1type = {
    name:string,
    profession: string , 
    age: number
    
 }

 type person2type = {
    name: string,
    profession: string,
    age: number,
    team: string
 }

  
  let person1 : person1type = {
    
    name:"Steve Smith",
    profession: "Cricketer", 
    age:  35,
    
  }
 
  let person2 : person2type = {
    name: "Glenn Maxwell",
    profession: "Cricketer",
    age: 32,
    team: "Australia"
  }

   person1  = person2//Valid
   //person2 = person1 // Right hand side pe property value missing nh honi chaiye wrna error aega

   person2 = {
    name:"Steve Smith",
    profession: "Cricketer", 
    age:  35,
    team: "Australia"  
   }
    
 person1= person2 
   
   
   type ordertype  = {
           customerName: string,
           productName: string, 
           price: number, 
           
           totalPrice: number,
   }

   let order = {
    customerName:"John Doe",
    productName: "Shoes", 
    price:  500,
    quantity: 2,
    totalPrice: 1000,

   }

   let order2 : ordertype = order //Not error ignoring quantity thats called structural typing
    

type mybio  = {
    name: string,
    age: number,
    address: number
}

let myBio : mybio = {
    name : "AHSAN",
    age : 20,
    address : 1234567890
   
}
 type mybio2 = {
    name: string,
    age: number,
    address: number
    city: string
 }

 let myBio2 : mybio2 = {
    name: "AHSAN",
    age: 20,
    address: 1234567890,
    city: "KARACHI"

 }

 //myBio2 = myBio //Error
 //Right hand side par city value missing h or agr right side pe value miss hogi toh error aega


 myBio = myBio2 //Valid qk  right hand side pe value miss nh h or isne "city"  property ko ignore krdia 

  




 
 
 














