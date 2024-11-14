(()=>{
const addNumber=(a:number,b:number)=>a+b;
const greet=(name:string)=>`Hola ${name}`;
const saveTheWorld=()=>`El mundo esta salvado` ;

//using this for greet function
//let myFunction:(a:string) => string;

//it works for saveTheWorld function because it just return a string
//let myFunction:() => string;

let myFunction:(a:number,b:number) => number;

myFunction=addNumber;
console.log(myFunction(1,2));

// myFunction=greet;
// console.log(myFunction("Fernando"));

// myFunction=saveTheWorld;
// console.log(myFunction());



})()