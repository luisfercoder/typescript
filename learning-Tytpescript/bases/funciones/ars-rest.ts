(()=>{
 const fullName=(fisrtName:string,...restArgs:string[]):string=>{
 return `${fisrtName} ${restArgs.join(" ")} ` 
 }

  const superman = fullName("Clark","Joshep","Kent");
  console.log(superman);
  
})()