// 组合继承（原型链 + 构造函数）
// 使用原型链实现对原型属性和方法的集成，通过构造函数实现对实例属性的继承。
// 最常用的继承模式，可以通过instanceof和isPrototypeOf()识别对象类型。
function Parent(name) {
  this.name = name;
  this.friends = ['Tom', 'Flare']
}

Parent.prototype.sayName = function () {
  return this.name;
}

function Child(name, age) {
  // 继承属性
  Parent.call(this, name);
  this.age = age;
}

// 继承方法
Child.prototype = new Parent();
// 修改原型对象的constructor
Child.prototype.constructor = Child;

Child.prototype.sayAge = function () {
  return this.age;
}

const instance = new Child('flare', 18);
instance.friends.push('123')
console.log(instance.friends);
console.log(instance.sayName());
console.log(instance.sayAge());

const instance1 = new Child('flare2', 22);
console.log(instance1.friends);
console.log(instance1.sayName());
console.log(instance1.sayAge());