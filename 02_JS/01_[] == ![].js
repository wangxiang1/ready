// 由于 ! 的优先级高于 == ，
// ![] 首先会被转换为false，
// 然后根据Boolean转换原则，false将会转换为Number类型，即转换为 0，
// 然后左侧的 [] 转换为原始类型，也为 0 ，所以最终结果为 true

// [] == ! []   ->   [] == false  ->  [] == 0  ->   '' == 0   ->  0 == 0   ->  true
const f = [] == ![]; // true
console.log(f);
console.log([undefined] == ![]);
