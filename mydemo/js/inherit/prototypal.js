// 原型式继承
// 借助原型可以根据已有对象创建新对象，同时还不比因为创建自定义类型
// 引用类型的值会共享

// 本质：object() 对传入的对象进行了浅复制
function object(o) {
  function F() {}; // 临时构造函数
  F.prototype = o; // 传入对象作为构造函数的原型
  return new F(); // 返回这个临时类型的新实例
}

const person = {
  name: 'Flare',
  friends: ['Tom', 'Jerry']
}

var anotherPerson = object(person);
anotherPerson.name = 'Flare2'
anotherPerson.friends.push('Bob');

var anotherPerson2 = object(person);
anotherPerson2.name = 'Flare3'
anotherPerson2.friends.push('Jack');

console.log(anotherPerson.name);
console.log(anotherPerson2.name);
console.log(person.friends); // 引用类型值会共享

// es5通过新增Object.create()规范了原型式继承
const p = Object.create(person, {
  name: {
    value: 'creacteName'
  }
});
console.log(p.name, p.friends);