// 原型链继承（实践中很少单独使用）
// 重写原型对象
// 问题：1、包含引用类型的原型属性会被所有实例共享。2、在创建子类型的实例时，不能像超类构造函数传参。

function Parent() {
  this.property = true;
}

Parent.prototype.getPropertyValue = function () {
  return this.property;
}

function Child() {
  this.childProperty = false;
}

// 继承Parent
Child.prototype = new Parent();

var instance = new Child();
console.log(instance.getPropertyValue());
console.log(instance.childProperty);
