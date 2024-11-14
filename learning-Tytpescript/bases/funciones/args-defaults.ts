(()=>{
  const fullName=(fisrtName:string,lastName?:string,upper:boolean=false):string=>{
    if(upper){
       return `${fisrtName} ${lastName ||"No hay lastName"}`.toUpperCase();
    }
    return `${fisrtName} ${lastName ||"No hay lastName"}`
   
  }

  const name=fullName("Tony","Stark",true)
  console.log({name})
})()