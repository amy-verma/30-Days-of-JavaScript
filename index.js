// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
  
//   for (i=0;i<=10;i++){
//     console.log(countries[i])
//   }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//   let i=0;
//   while(i<=10){
//     console.log(countries[i])
//     i++
//   }

////////////////////////////////////////////////////////////////////
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//   let j=0;
//   do{
//     console.log(countries[j])
//     j++;
//   }while(j<10)
///////////////////////////////////////////////////////////////////////////
// for(i=1;i<=5;i++){
//     console.log("*".repeat(i))
// }
///////////////////////////////////////////////////////////////////////////////////////////////
// for(i=0;i<=10;i++){
//     console.log(`${i}*${i}=${i*i}`)
// }
////////////////////////////////////////////////////////////////////////////////
// for(i=0;i<=10;i++){
//     console.log(`${i} ${i*i} ${i*i*i}`)
// }


////////////////////////////////////////////////////////////////////////////////

// for (let i = 0; i <= 100; i++) {
//     if (i < 2) {
//       console.log(`${i} is not a prime number`);
//       continue; // Skip to the next iteration
//     }
  
//     let isPrime = true; // Assume the number is prime
  
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         isPrime = false; // Found a divisor, not a prime number
//         break; // No need to check further
//       }
//     }
  
//     if (isPrime) {
//       console.log(`${i} is a prime number`);
//     } else {
//       console.log(`${i} is not a prime number`);
//     }
//   }
  /////////////////////////////////////////////////////////////////////
//   let sumEven=0;
// let sumOdd=0
// for(let i=0;i<=100;i++){
//   if(i%2==0){
//     sumEven +=i
//   }else{
//     sumOdd +=i
//   }
// }
// console.log(sumEven)
// console.log(sumOdd)

///////////////////////////////////////////////// Show   in an array/////////////////////////////////////////////////////////////////////

// let sumEven=0;
// let sumOdd=0
// for(let i=0;i<=100;i++){
//   if(i%2==0){
//     sumEven +=i
//   }else{
//     sumOdd +=i
//   }
// }
// let total=[sumEven,sumOdd]
// console.log(total)
////////////////////////////////////////////////////////////////////////////////////////////////////
// let randomNumbers=[]
// for(i=0;i<=5;i++){
//   randomNumbers.push(Math.floor(Math.random()*100))
// }

// console.log(randomNumbers)
/////////////////////////////////////////////////////////////////////////////////////////

function randomNumber(){
    return Math.random().toString(36).substring(2,8)
  }
  // let res=randomNumber()
  console.log(randomNumber())//k0yblcr

  ///////////////////////////////////////////////////////////////////////////////////////to   fin d the length///////////////////////////////////////////////

//   let arr=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let newArr=[]
// for (let i=0;i<arr.length;i++){
//    newArr.push(arr[i].length)
// }
// console.log(newArr)

/////////////////////////////////////////////////////////////////////////////////////

let arr=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newArr=arr.map((country)=>{
  let abbr= country.substring(0,4);
  let Length=country.length;
  return [country,abbr,Length]
})
console.log(newArr)