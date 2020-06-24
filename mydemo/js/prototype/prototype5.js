// 稳妥构造函数模式
function Person(name, age){
  var o = new Object();
 
  o.sayName = function () {
    console.log(name);
  }

  return o;
}


var person1 = Person('wangxiang', 18);
person1.sayName()