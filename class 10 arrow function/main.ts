//                         "ARROW FUNCTION"

//Direct function ko variable mein add krna

//Storing a value in variable and then calling a function
let hello2 = (purpose:string ) =>{
    let classtopic = "arrow function" 
    console.log(`${classtopic} is used for ${purpose} `);
    
}
hello2("shorter syntax"); //arrow function is used for shorter syntax 


//Direct print a value through log and calling a function
function hello() {
    //let topic = "Arrow Function"
    console.log("ARROW FUNCTION");
    
}
hello();


// Make a calculator using arrow function =>
    let calculator = (num1: number , num2: number , operator: string) =>{
                      //ye apke parameter hain jiski category ap batate hain call krte huwe or inki value bhi dete hain call krte huwe 
       if (operator == "+") {
        console.log(num1 + num2);
        
       }else if (operator == "-") {
        console.log(num1 - num2);
        
       }else if (operator == "*") {
        console.log(num1 * num2);
        
       }else{
        console.log("Invalid");
        
       }
    }
    calculator(3 , 6 , "-") //3-6 = -3
    calculator(7 , 7 , "*") //7*7 = 49


    //Now making a function of square root of any number through arrow function
    let SquareRoot = (num3: number , num4: number) =>{
        console.log(num3 * num4);
        
    }
    SquareRoot(2 , 2); //2*2 = 4


//Now creating a direction through function arrow
let uber = (from: string , to: string) => {
    let direction = (`I am ready to pick you from ${from} and drop you ${to}`)
    console.log(direction);
    
}
uber("Gulshan" , "DHA");

//                    PRINT SINGLE LINE RETURN STATEMENT IN ARROW FUNCTION WITHOUT {} AND WITHOUT PRINTING RETURN
//It is only possible for single retrun statement without {} bracket and without written return 
let interview = (course:string):string =>  `Why you choose this course ${course}?`

let question1 = interview("Generative AI");
console.log(question1);

let substraction  = (sub:number)             :number =>  sub - 10

let subtractionanswer = substraction(15)
console.log(subtractionanswer); //5


//If we have to return multiple or single  statment we can do it through {} and return function and then console 

let interview2 = (course2:string) :string =>{

    return (`Why you choose ${course2}`);
    return (`Tell me about ${course2} `);

}

let question2 = interview2("Generative AI");
console.log(question2);  //Why you choose Generative AI

//Now changing just an argument
question2 = interview2("Digital Marketing")
console.log(question2); //Why you choose Digital Marketing




