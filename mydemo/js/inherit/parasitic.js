// 寄生式继承
// 创建一个仅用于封装继承过程的函数。
// 不能做到函数复用
function object(o) {
  function F() {}; // 临时构造函数
  F.prototype = o; // 传入对象作为构造函数的原型
  return new F(); // 返回这个临时类型的新实例
}

function createAnother(original) {
  const clone = object(original);
  clone.sayHi = function () {
    console.log('Hi');
  }

  return clone;
}

const person = {
  name: 'Flare',
  friends: ['Tom', 'Jerry']
}

const anotherPerson = createAnother(person);
anotherPerson.friends.push('May')
anotherPerson.sayHi()
console.log(anotherPerson.friends);
const anotherPerson2 = createAnother(person);
console.log(anotherPerson2.friends);