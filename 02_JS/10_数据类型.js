var str = new String('3294938');
var str2 = '1232'

let s = Symbol();
s.something = 123


console.log(str, str2, typeof str, typeof str2);
console.log(s, typeof s);

var b = new Boolean()
console.log(b, typeof b);
var myObj = {
  [s.something]: 'hello word'
}
console.log(myObj[s.something]);