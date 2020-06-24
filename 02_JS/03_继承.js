function Parent(name) {
  this.name = name;

  this.sayName = function() {
    console.log(this.name);
  }
}

Parent.prototype.sayParentName =  function () {
  console.log('sayParentName:', this.name);
}

function Child(name, age) {
  Parent.call(this, name);

  // this.name = name;
  this.age = age;
  this.sayAge = function () {
    console.log('sayAge:',this.age);
  }
}

Child.prototype = Object.create(Parent.prototype); // 将父类的原型赋值给子类，并将原型的constructor修改为子类
Child.prototype.constructor = Child;

Child.prototype.sayChildName = function () {
  console.log('sayChildName:', this.name);
}

const child = new Child('wangxiang', 26);
const child1 = new Child('wangxiang', 26);
child.name = 'heofsdinfio'
console.log('0000000000000', child1, child.name, child1.name);
// child.sayAge();
// child.sayChildName();
// child.sayParentName();