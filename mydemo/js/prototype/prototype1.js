function Person(){
}

Person.prototype = {
  constructor: Person,
  name: 'wangxiang',
  age: 18,
  friends: ['Tom', 'Jack'],
  sayName: function(){
    alert(this.name);
  }
}

var person1 = new Person();
var person2 = new Person();

person1.friends.push('May');

console.log(person1.friends); // [ 'Tom', 'Jack', 'May' ]
console.log(person2.friends); // [ 'Tom', 'Jack', 'May' ]
console.log(person1.friends === person2.friends)// true
