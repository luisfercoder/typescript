(()=>{
const error =(message:never)=> {
  throw new Error(message)
}
console.log(error)
})()