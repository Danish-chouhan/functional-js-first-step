// function pureFunc(a, b) {
//   return a + b;
// }

// console.log(pureFunc(10, 20));

// external state par koi effect nhi dhalta hai

// impure

// let result = 0;

// function impureFunc(a,b) {
//   result += a + b;
//   return result;
// };
// console.log(impureFunc(10,10));

// heigher Ordered function

// const a  = [1,2,3,4,5]

// console.log(a.map((n)=>n + n));

// function fn1(n) {
//   function fn2(m) {
//     return n + m;
//   }
//   return fn2;
// }

// const cal = fn1(90);
// console.log(cal(10));

// currying

// function currying(wrapper) {
//     return function (first_name) {
//       return function (last_name) {
//         return wrapper(first_name,last_name);
//       }
//     }
//   };

//   function combine(fname,lname) {
//     return fname + lname;
//   }
//   const val = currying(combine);
//   console.log(val('Danish')('chouhan'));

// function fn(n){
//     if(n === 10){
//         return
//     }else{
//         console.log(n);
//         return fn(n + 1)
//     }
// }
// fn(0)
// let a

// function fn(b) {
//   return (a = a + b);
// }

// console.log(fn(10));
// function fn(a){
//     function fn2(b){
//        return a + b
//     }
//     return fn2
// }

// const cal = fn(10)
// console.log(cal(20));

// call aply and bind

// const obj1 = {
//     fname : 'Danish',
//     lname : "Chouhan"
// };
// const obj2 = {
//     fname : "Hamza",
//     lname : "Chouhan"
// }
// const brothers ={
//     fullName : function(){
//         return this.fname + this.lname
//     }
// }

// console.log(brothers.fullName.call(obj1));
// console.log(brothers.fullName.call(obj2));

// function fn1(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(fn1(10)(10)(10));

// const double = x => x * 2
// const square = x => x * x
// // Tradition approach
// var output1 = double(2);
// var output2 = square(output1);
// console.log(output2);
// // variant two
// var output_final = square(double(2));
// console.log(output_final);

// let fname = prompt("Enter your fname");
// let lname = prompt("Enter your lname");
// let age = prompt("enter your age")

// function fn(){
//     return [fname,lname,age]
// }
// var [...arg] = fn();
// let fullname = `${fname} ${lname}`
// document.write(`NAME IS ${fullname} and year is ${arg.at(-1)}`)
// console.log(arg);

// const a = x => x * x;
// const b = x => x * x;
// const c = x => x * x;

// console.log(c(b(a(2))));

// const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// const double = x => x * 2
// const square = x => x * x

// // function pipe
// var output_final = pipe(square, double)(2);
// console.log(output_final);

// let a = x => x * 1
// let b = x => x * x
// let c = x => x * x
// let d = x => x * x
// let e = x => x * x

// console.log((e(d(c(b(a(5)))))));

// function fn(n){
//     function fn2(m){
//       function fn3(o){
//         return n + m + o
//     }
//     return fn3
// }
//     return fn2
// }
// console.log(fn(10)(20)(30));

// function fn(arri) {
//   let index = 0;
//   return {
//     nextVal: function () {
//       if (index < arri.length) {
//         return {
//           val: arri[index++],
//           done: false,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// }
// let arr = [1, 2, 3, 4, , 5];

// let cal = fn(arr);

// console.log(cal.nextVal());
// console.log(cal.nextVal());
// console.log(cal.nextVal());
// console.log(cal.nextVal());
// console.log(cal.nextVal());
// console.log(cal.nextVal());
// console.log(cal.nextVal());
// console.log(cal.nextVal());

// const obj1 = {
//     fName : [1,2,3,4,5],
//     lname : "Chouhan"
// }
// const obj2 = {
//     fName : "Hamja",
//     lname : "Chouhan"
// }

// function cal(){
//     return `the first Name is ${this.fName} and the last is ${this.lname} when we concatinate these the ans is ${this.fName}-${ this.lname}`
// }

// console.log(cal.call(obj1));
// console.log(cal.call(obj1));

// --------------------------

// const obj1 = {
//   fName: [1,2,3,4,5],
//   lname: "Chouhan",
// };
// const obj2 = {
//   fName: "Hamja",
//   lname: "Chouhan",
// };

// function binnd(a, b) {
//   return `${a} ${this.fName}-${this.lname} ${b}`;
// }

// console.log(binnd.call(obj1, "Hey", "DIF"));
// console.log(binnd.apply(obj2, ["he is a", "and he is a brother of Danish"]));

// const bonding = binnd.bind(obj1);
// console.log(bonding("Dif", "Owner"));

// function multiply(a, b, c) {
//     return a * b * c;
//   }

//   // Partial application
//   const multiplyByTwo = multiply.bind(null, 2);
//   console.log(multiplyByTwo(10,50));

// ---------------------

// itteration
// partial appliation
// recursion

// -------------------- -

// function fn(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a + b + c + d
//             }
//         }
//     }
// }

// let an1 = fn(20)
// console.log(an1(10)(10)(10));

// let a = (x) => x + x;
// let b = (x) => x + x;
// let c = (x) => x + x;
// let d = (x) => x + x;
// let e = (x) => x + x;
// let f = (x) => x + x;

// console.log(f(e(d(c(b(a(10)))))));

// getWorkshopDate = f();
// function getWorkshopDate() {
//     return new Date(2020, 11, 4).toDateString();
// }

// function computeTruthTable(operator) {
//     const truthValues = prompt("")
//     const table = [];
//     for (const A of truthValues) {
//         for (const B of truthValues) {
//             const value = operator(A, B);
//             table.push({ A, B, value });
//         }
//     }
//     return table;
// }

// function sum(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//     }
//     return total;
// }

// console.log(sum(10));

// function fn(arr) {
//   if (arr.length == 1) return arr[0];
//   else {
//     return ;
//   }
// }
// console.log(fn([1, 2, 3, 4, 5]));

// function sumR(numbers) {
//     if (numbers.length === 1) {
//         // base case
//         return numbers[0];
//     } else {
//         // recursive case
//         return numbers[0] + sumR(numbers.slice(1));
//     }
// }

// console.log(sumR([1,2,3,4,5]));

// get lest element without using .length -1
// const arr = [1, 2, 3, 4, 5];
// const myString = "Hello";
// function getLastElement(myString) {
//   // write here...
// //   return arr.pop()
// //  return myString.at(-1)

// }
// console.log(getLastElement(myString));

// reverse arr
// const arr = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
//   // write here...
//   return arr.reverse()
// }
// console.log(reverseArray(arr));

// what if we have string, how we can reverse?
// const strMyName = [1,2,3,4,5];

// function reverseStr(str){
// //      let reverseing = ""
// //     for(let i = 0 ; i < str.length ; i++){
// //       reverseing += str[i]
// //    }
// //    return reverseing
// return str.split('').reverse().join('');
// }
// console.log(reverseStr(strMyName));

// const array1 = [1, 1, 1, 1];

// function areAllElementsEqual(arr){
//     return arr.every((element) => element === arr[0]);
// }

// console.log(areAllElementsEqual(array1));
// Output: true

// const array2 = [1, 2, 1, 1];

// console.log(areAllElementsEqual(array2));
// Output: false

function search(arr, inde) {
  if (arr !== inde) {
    return -1;
  } else {
    arr === search(inde);
    return arr.indexOf(inde);
  }
}

// console.log(search([1, 2, 3, 4], 3)) // 2
// console.log(search([2, 4, 6, 8, 10], 8)) // 3
// console.log(search([1, 3, 5, 7, 9], 11)) // -1

// function sum(n) {
//   let summing = 0;
//   if (n == 01) {
//     return 1;
//   } else {
//     return n + sum(n - 1);
//   }
// }

// console.log(sum(5)) // 15
// // 1 + 2 + 3 + 4 + 5 = 15
// console.log(sum(1)) // 1
// console.log(sum(12)) // 78

// ---

function addUp(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + addUp(n - 1);
  }
}

// console.log(addUp(4)) // 10
// console.log(addUp(13)) // 91
// console.log(addUp(600) )// 180300

function numberSquares(n) {
  if (n === 0) {
    return 0;
  } else {
    return n * n + numberSquares(n - 1);
  }
}

// console.log(numberSquares(2)) // 5
// console.log(numberSquares(4)) // 30
// console.log(numberSquares(5)) // 55

function multiSum(n, ten = 10) {
  if (n === 0) return 0;
  let recurstion = multiSum(ten - 1);
  return n + recurstion;
}

// console.log(multiSum(1)) // 55
// // 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55
// console.log(multiSum(6)) // 330
// // 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330
// console.log(multiSum(10)) // 550
// console.log(multiSum(8)) // 440
// console.log(multiSum(2)) // 110

function repetition(str, num) {
  if (num === 1) {
    return str;
  } else {
    return str + repetition(str, num - 1);
  }
}

// console.log(repetition("ab", 3)) // "ababab"
// console.log(repetition("kiwi", 1)) // "kiwi"
// console.log(repetition("cherry", 2) )// "cherrycherry"KO

// --------------------------

let a = [1, 2, 3, 4, 5];
let b = a.map((ele) => ele + ele);
// console.log(a);
// console.log(b);

// ------------------------------

// 4.  Write a function that uses reduce to count the occurrences of each element in an array.

function occurrences(arr) {
  return arr.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

// console.log(occurrences([1, 2, 3, 2, 2, 2, 1, 4, 3, 3,"Danish","Danish","Danish"]));

// ---------------------------------------------
// 5. Write a function that uses reduce to flatten an array of arrays.

// function fn(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     array2.push(array1[i]);
//   }
// }

// function flatten(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i],newArr)
//   }
//   return newArr
// }
// console.log(flatten([1,2,3,[5,[6,[7]]]]));

// [1,2,3,4]
// *

// function fn(arr){
//   arr = [1,2,3,4,5]
//   let b = []
//   for(let i = 0 ; i < arr.length ; i++){
//    b.push(arr[i] + arr[i])
//   }
//   return b
// }
// function fn2(arr2){
//   return arr2()
// }

// console.log(fn2(fn));

// -----------------------------

// let an = (a) => {
//   let b = 10;
//   let c = () => {
//     return a + b
//   }
//   return c()
// };
// console.log(an(10))

// ---------------------------

function db(name,lname,username,pass){
  return `hey ${name}-${lname} check again you username and passord to confirm (${username} and ${pass})`
}

let obj1 = {
  name : "Danish",
  lname : "chouhan",
  username : "danuuu",
  pass : 123321
}

let obj2 = {
  name : "fayyaz",
  lname : "ur-rehman",
  username : "fazuu",
  pass : 56712
}
let obj3 = {
  name : "vajeela",
  lname : "chouhan",
  username : "vajooo",
  pass : 120987
}
const details = db.bind(obj1,obj1.name,obj1.lname)
console.log(details(obj1.username,obj1.pass));

const details2 = db.bind(obj2,obj2.name,obj2.lname)
console.log(details2(obj2.username,obj2.pass));

const details3 = db.bind(obj3,obj3.name,obj3.lname)
console.log(details3(obj3.username,obj3.pass));