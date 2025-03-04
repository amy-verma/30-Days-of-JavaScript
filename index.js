// Destructing Arrays

// const fullstack=[["HTML","CSS","JS"],["NODE","EXPRESS","MONGODB"]]
// let [frontend,backend]=fullstack
// console.log(frontend)
// console.log(backend)


const names=[undefined,"Brook","David"]
let [firstoerson="Amit",
      secondperson,
      thirdperson,
      fourthperson="John"]=names;
      console.log(firstoerson,secondperson,thirdperson,fourthperson)

      // Destructuring Object

      const rectangle={
        width:20,height:10,area:30
        }
      let {width:w,height:h,area:a,perimeter:p}=rectangle
      console.log(w,h,a,a,p)