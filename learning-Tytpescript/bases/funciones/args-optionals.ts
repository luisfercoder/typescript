(()=>{
  const fullName=(fisrtName:string,lastName?:string):string=>{
    return `${fisrtName} ${lastName ||"No hay lastName"}`;
  }

  const name=fullName("Tony")
  console.log({name})
})()