// Union of sets

let a=[1,2,3,4,5]
let b=[7,8,9,0]
let c=[...a,...b]
console.log(c)
let A=new Set(c)
console.log(A)
let B=new Set(b)
console.log(B)

// Intersection of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)