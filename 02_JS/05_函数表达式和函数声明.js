// var a = 2

// // 函数声明
// function foo (){
//   var a = 3;
//   console.log(a) 
// }

// foo();
// console.log(a);

// // 函数表达式
// (function foo1() {
//   var a = 3;
//   console.log(a) 
// })();
// // foo1();
// console.log(a);

// 块作用域
// var flag = true
// if(flag){
//   var a = 1;
//   if(flag){
//     var b = 2
//     console.log(b);
//   }
//   console.log(a);
// }
// console.log(a);
// console.log(b);
console.log('===================');
// let const块作用域
var flag = true
if(flag){
  let a = 1;
  if(flag){
    // console.log(b);
    const b = 2
    console.log(b);
  }
  console.log(a);
}
// console.log(a);
// console.log(b);

