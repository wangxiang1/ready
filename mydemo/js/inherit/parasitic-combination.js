// 寄生组合继承（最好的继承方式）
// 组合继承的缺点：无论什么情况下，都会调用两次超类型的构造函数；一次是在创建子类型原型的时候；一次是在子类构造函数内部。
// 寄生组合继承：借用构造函数来继承属性，通过原型链混成形式来继承方法。
// 思路：不必为了子类型的原型而调用超类的构造函数，我们所需要的其实就是超类型原型的一个副本。

// 本质：object() 对传入的对象进行了浅复制
function object(o) {
  function F() {}; // 临时构造函数
  F.prototype = o; // 传入对象作为构造函数的原型
  return new F(); // 返回这个临时类型的新实例
}

function inheritPrototype(subType, superType){
  const prototype = object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 指定对象
}


function SuperType(name) {
  this.name = name;
  this.friends = ['Tom', 'Jack'];
}

SuperType.prototype.sayName = function() {
  console.log(this.name);
}

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
  console.log(this.age);
}

const sub = new SubType('wang', 18);
sub.sayAge();
sub.sayName();