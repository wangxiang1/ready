// 借用构造函数，又叫额日早对象或经典继承
// 在子类型的构造函数内部调用超类型构造函数
// 问题：方法都在构造函数中定义，函数无法复用。

function Parent() {
  this.friends = ['Tom', 'Flare']
}

Parent.prototype.getPropertyValue = function () {
  return this.property;
}

function Child() {
  // 继承Parent
  Parent.call(this)
}

var instance1 = new Child();
instance1.friends.push('Jim');
console.log(instance1.friends); // [ 'Tom', 'Flare', 'Jim' ]
var instance2 = new Child();
console.log(instance2.friends); // [ 'Tom', 'Flare' ]