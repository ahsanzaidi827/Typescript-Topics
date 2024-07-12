//                                       "TYPE ALIASES"

//It can help to simplify complex type declarations, make code more readable
//Always start from Type 

//I would like to declared type aliases with Pascal Case like PascalCase


type MyBestFriend = string //MyBestFriend is Type aliases

let mybestfriend : MyBestFriend  = "Bilal"; // mybestfriend is Javascript Variable

console.log(mybestfriend);  //Bilal


//TYPE ALIAS AND OBJECT

type MySelfDataType = {
          name:string
          age: number
          qualification:string
          passion:string
         hobbies: string[]
         height: string | number // Type union
}

    let MySelf:MySelfDataType = {
        name:"Ahsan",
        age: 25,
        qualification:"Undergraduate",
        passion:"Developer",
        hobbies: ["Cricket" , "Researching" , "Reading" ],
        height: 5.6 
    }

    console.log(MySelf.passion); //Developer

    console.log(MySelf.qualification);//Undergraduate
    
    

    //Print human and animal with type alias

    type Human = string

    type Animal = string

    let human:Human="Ahsan"                    //Human is type alias and human is javascript variable
        

    let animal:Animal="Lion"                   //animal is javascript variable and Animal is type alias
        //Javascript variable         //  Type alias

        console.log(animal); //Lion
        
        console.log(human);  //Ahsan




        //TYPE ALIAS AND  OBJECT WITH FUNCTION

    type ItCoursesSlotDatatype =[{
        session: string,
         MondayToSundaySession: (start:string , end:string) => void,
    }
]

    let ItcoursesSlot:ItCoursesSlotDatatype  = [
        {

            session: "2 Session in one day",
        
             MondayToSundaySession: (FirstSession , SecondSession:string) =>{

                console.log(` Timing of first session is ${FirstSession} and timing of second session is  ${SecondSession}`); 
                
            },
        }]

        console.log(ItcoursesSlot[0].session); //2 Session in one day
        
        console.log(ItcoursesSlot[0].MondayToSundaySession ("2 to 5pm" , "7 to 10pm"));//Timing of first session is 2 to 5pm and timing of second session is  7 to 10pm


        //TYPE ALIAS WITH SIMPLE OBJECT

        type RealmeDatatype  = [{
                name: string,
                price: number,
                color: string,
                ram: number,
              
        } 
    ]
        let Realme:RealmeDatatype  =[{
            name: "Realme",
            price: 20000,
            color: "Sea Green",
            ram: 4,
            
        }
    ]

        console.log(Realme[0].price); //20000
        Realme[0].name = "Realme5i"; //Updated Value though indexing
        console.log(Realme); //[ { name: 'Realme5i', price: 20000, color: 'Sea Green', ram: 4 } ]

        //TYPE ALIAS AND NESTED OBJECT
        type ICECREAM =[{
            name: {
                name1: string,
                name2: string,
            }
            flavor: "Chocolate" | "Vanilla" // Type literal
            price: number[],
        }
        ]
        
        let icecream:ICECREAM = [ {
            
            
             name:{
                name1: "Chocolate",
                name2: "Vanilla",
             }
             flavor: ["Chocolate" , "Vanilla"],
             price: [100, 200],
        }
        ]

        
          console.log(icecream[0].flavor); //[ 'Chocolate', 'Vanilla' ]
            
        
        
                


        //TYPE ALIAS IN ARROW FUNCTION
        type Userpassword = number;
        let userpassword =(passward:Userpassword) =>{
                console.log(`This is the password of my client ${passward}`);

        }

        userpassword(12345678);//This is the password of my client 12345678



        //                                    "TYPE UNION"
        //This feature gives multiple 
        //number | string | boolean     this mean that the datatype either will be number or string or boolean

        let digit: string | number  
        digit = 123456789;
        digit = "123456789";
        digit = true; //This will not run because we dont assign boolean above we only assign  string | number
        
        let digit2: string | string[] | boolean[]  =  ["Football" , "Cricket"]
        console.log(digit2); //[ 'Football', 'Cricket' ]
        digit2  = [true , true , false];
        console.log(digit2); //[ true, true, false ]
        // digit2 = [12 , 23] //Error

        
        //                                       "TYPE LITERAL"
        //When you know the value 
        //The value of union type literal is always in string
        let days: ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday") = "Wednesday";

        //("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday") This is union type literal 
        console.log(days); //Wednesday

        let WinterMonths : "November" | "December" | "January" | "Feb" ="December"
        
        console.log(WinterMonths); //December

    

        
        
        
        
        
        
        
        
        
        
        
        




        


        
        
       
      
    
     





















































































        // //Type Union 
        
        // type HumanOrAnimal = Human | Animal

        // let humanOrAnimal : HumanOrAnimal = "Ahsan"

        // console.log(humanOrAnimal); //Ahsan

        // let humanOrAnimal2 : HumanOrAnimal = "Lion"

        // console.log(humanOrAnimal2); //Lion

        // let humanOrAnimal3 : HumanOrAnimal = 5;

        // console.log(humanOrAnimal3); //5

        // let humanOrAnimal4 : HumanOrAnimal = true;

        // console.log(humanOrAnimal4); //true

        // let humanOrAnimal5 : HumanOrAnimal = false;

        // console.log(humanOrAnimal5); //false

        // let humanOrAnimal6 : HumanOrAnimal = 5.6;

        // console.log(humanOrAnimal6); //5.6

        // let humanOrAnimal7 : HumanOrAnimal = "Lion";
        
        
















// type MySelfDataType = {
//          name:string
//          age:number
//          number:number
//          passion:string
// }
// let MySelf:MySelfDataType ={

// }
