// 函数会首先被提升，然后才是变量
foo();

var foo;

function foo() {
  console.log(1);
}

foo = function(){
  console.log(2);
}

// 等同于
// function foo() {
//   console.log(1);
// }

// foo();

// foo = function(){
//   console.log(2);
// }

// var foo 尽管出现在foo(){...} 声明之前，但是它是重复声明（因此会被忽略），因为函数声明会被提升到普通变量之前。

// 块作用域 声明函数
var flag = true
// fn(); // TypeError   fn = undefined
if (flag) {
  function fn(){
    console.log(1);
  }
}else {
  function fn(){
    console.log(2);
  }
}