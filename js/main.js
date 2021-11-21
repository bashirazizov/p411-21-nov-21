// "use strict";

// a = 5;
// console.log(a);

// console.log("Salam")
// alert("salam necesen")
// console.log("Sagol")

// var input = prompt("Adin Nedir?");
// alert("Salam " + input);

// var a = null;
// var a;

// console.log(a);

// a = false;

// console.log(a);

// a = 12;

// console.log(a);

// var input = prompt("Nece yasin var?");

// var res = parseInt(input);

// console.log(res);

// var a = 5;

// var a = 10;

// console.log(a);

// let b = 10;

// let b = 5;

// console.log(b);

// let i = 11;

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// console.log(i);

// let fname = "mamed";

// if(true){
//     fname = "Elnur";
//     console.log(fname);
// }

// fname = "Rasim";

// console.log(fname)

// var a = "salam";
// var a = "sagol";
// a = "necesen";

// let b = "salam";
// b = "sagol";

// const c = "salam";

// let a = 10;
// let b = 3;

// a++;
// a--;
// a*=b;

// console.log(a%b);

// let a = 5;

// let b = "3";

// console.log(isNaN(a));
// console.log(isNaN(b));

// if(isNaN(a)||isNaN(b)){
//     console.log("not ok")
// }
// else{
//     if(a>b){
//         console.log("ok")
//     }
// }

// let age = prompt();

// let canVote = (age < 18) ? "Too young":"Old enough";

// console.log(canVote);

// console.log(6+1+"16");
// console.log(6+1-"16");

// console.log("16"-6);

// let age = prompt();

// if (age>18) {
//     console.log("Xos gelmisen");
// }else if(age == 18){
//     console.log("Birazda gozle");
// }else{
//     console.log("Yox");
// }

// let a = 3;

// switch (a) {
//   case 1:
//     console.log("qis");
//     break;
//   case 2:
//     console.log("yaz");
//     break;

//   case 3:
//     console.log("yay");
//     break;

//   case 4:
//     console.log("payiz");
//     break;
// }

// for (let a = 0; a < 10; a++) {
//     console.log(a);
// }

// let a = 1;

// while (a<10) {
//     console.log(a);
//     a++;
// }

// let a = 1

// do {
//     console.log(a);
// } while (a>1);

// let person = {
//     fname:"mamed",
//     lname:"aliyev",
//     age:21,
//     isMarried: false
// }

// for (const key in person) {
//     console.log(key+" : "+person[key])
// }

// let arr = [1, 3, "salam", false, "a"];

// arr[7] = 10

// console.log(arr[5]);

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     console.log(element)
// }

// for (let item of arr) {
//     console.log(item);
// }

// arr.forEach((item) => {
//     if (isNaN(item)) {
//         console.log(item);
//     }
// });

// for (let i = 0; i < 11; i++) {
//     debugger;
//     console.log(i);
// }

// while (true) {
//   let score = prompt("Please, enter your score.");

//   switch (true) {
//     case score > 100 || score < 0:
//       alert("Not valid score.");
//       break;
//     case score > 90:
//       alert("A");
//       break;
//     case score > 80:
//       alert("B");
//       break;
//     case score > 70:
//       alert("C");
//       break;
//     case score > 60:
//       alert("D");
//       break;
//     case score > 50:
//       alert("F");
//       break;
//     default:
//       alert("Failed");
//       break;
//   }
// }

// let salary = prompt("Enter your salary.");
// let loan = prompt("Enter desired loan amount.");

// if ((salary*12*6/10)>loan) {
//     alert("Okay")
// }else{
//     alert("Decline")
// }

// let num = prompt("Enter num.");
// let result = 1;

// while (num>=10) {
//     num/=10;
//     result++;
// }

// alert(result);

// let arr = [11, 12, 412, 5123, 15, 7, 23];

// let min = arr[0];
// let max = arr[0];

// arr.forEach((elem) => {
//     if (elem>max) {
//         max = elem;
//     }

//     if (elem<min) {
//         min = elem;
//     }
// });

// alert(min + max);

// let base = prompt("eded daxil edin");
// let pow = prompt("quvvet daxil edin");

// let result = 1;

// for (let i = 0; i < pow; i++) {
//     result *= base;
// }

// alert(result);


// let base2 = prompt("eded daxil edin");
// let pow2 = prompt("quvvet daxil edin");

// let result2 = 1;

// for (let i = 0; i < pow; i++) {
//     result2 *= base2;
// }

// alert(result2);


function getPower(base, power=1) {
    let result = 1;  

    for (let i = 0; i < power; i++) {
        result *= base;
    }

    return result;
}


console.log(getPower(10));