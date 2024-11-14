"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    //using this for greet function
    //let myFunction:(a:string) => string;
    //it works for saveTheWorld function because it just return a string
    //let myFunction:() => string;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    // myFunction=greet;
    // console.log(myFunction("Fernando"));
    // myFunction=saveTheWorld;
    // console.log(myFunction());
})();
