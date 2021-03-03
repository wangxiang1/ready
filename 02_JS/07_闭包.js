// 闭包
// function foo() {
//   var a = 2;
//   function bar() {
//     console.log(a);
//   }
//   return bar;
// }

// var baz = foo();
// baz();
// 循环和闭包
// for (var i = 0; i < 6; i++) {
//   setTimeout(function timer(){
//     console.log(i);
//   }, i*1000)
// }

// 立即执行函数
for (var i = 0; i < 6; i++) {
  (function(j) {
    setTimeout(function timer(){
      console.log(j);
    }, j*1000)
  })(i);
}

// 块作用域
// for (var i = 0; i < 6; i++) {
//   let j = i; // 闭包的块作用域
//   setTimeout(function timer(){
//     console.log(j);
//   }, j*1000)
// }

for (let i = 0; i < 6; i++) {
  setTimeout(function timer(){
    console.log(i);
  }, i*1000)
}