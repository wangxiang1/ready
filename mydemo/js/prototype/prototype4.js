// 寄生构造函数模式
function Person(name, age){
  var o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function () {
    console.log(this.name);
  }

  return o;
}


var person1 = new Person('wangxiang', 18);
person1.sayName()

function SpecialArray(...args) {
  // 创建数组
  var values = new Array();
  console.log('__proto__:',values.__proto__, Array.prototype);
  // 添加值
  values.push.apply(values, args);
  // 添加方法
  values.toPipedString = function () {
    return this.join('+')
  }

  // 返回数组
  return values;
}

var animals = new SpecialArray('dog','pig','cat');
console.log(animals.toPipedString());
console.log(animals);
console.log(animals.__proto__);