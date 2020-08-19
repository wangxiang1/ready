var myObj = {
  a: 2
}

var def = Object.getOwnPropertyDescriptor(myObj, "a")
console.log(def);

Object.defineProperty(myObj, 'b', {
  value: 3,
  writable: true,
  configurable: true,
  enumerable: true
})
console.log(myObj.b); // 3

var myObj = {}
Object.defineProperty(myObj, 'FAVORITE_NUMBER',{
  value: 42,
  writable: false,
  configurable: false
})

myObj.FAVORITE_NUMBER = 12
console.log(myObj.FAVORITE_NUMBER);

// 禁止扩展
var myObj = {a: 2}
// Object.preventExtensions(myObj)
// myObj.b = 3
// myObj.b
// console.log(myObj.b);

// 密封
Object.seal(myObj)

// 冻结
Object.freeze(myObj)

