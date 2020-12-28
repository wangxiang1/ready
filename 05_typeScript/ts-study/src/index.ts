/*
 * @Author: wangxiang
 * @Date: 2020-12-21 14:24:28
 * @LastEditTime: 2020-12-25 11:02:28
 * @LastEditors: wangxiang
 * @Description: ceshi
 * @FilePath: \ready\05_typeScript\ts-study\src\index.ts
 */
function greeter(person: string) {
  return "Hello, " + person;
}

const user = "Jane User";

/**
 * TypeScrict原始数据类型
 * boolen
 * number
 * string
 * void
 * undefined
 * null
 * symbol
 * bigint  BigInt 大数整数类型
 *
 * 其他常见类型
 *
 * 顶级类型
 * any
 * unkonwn  当 unknown 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、getter、函数执行等等。
 *
 * 底部类型
 * never  never 类型表示的是那些永不存在的值的类型，never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了never本身之外）
 *
 * 非原始类型
 * object
 */

const isLoading: boolean = false;

// JavaScript中的二进制、十进制、十六进制等数都可以用 number 类型表示。
const decLiteral: number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;

const book: string = "wangxiang string test";

// 表示没有任何类型，当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser(): void {
  console.log("void 表示没有任何类型，没有返回值时，返回类型是void");
}

// undefined可以赋值给void
const a: void = undefined;

const sym1 = Symbol("key1");
const sym2 = Symbol("key2");

Symbol("key1") === Symbol("key1"); // false

// 空数组，而且永远是空的
const empty: never[] = [];

const list: number[] = [1, 2, 3];

// 元组  表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 元组非常严格，即使类型的顺序不一样也会报错。
let x: [string, number];
x = ["1111", 1];

/**
 * 枚举
 */

// 数字枚举
// 声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型。
// 当我们声明一个枚举类型是,虽然没有给它们赋值,但是它们的值其实是默认的数字类型,而且默认从0开始依次累加
enum Direction {
  Up = 10, // 当我们把第一个值赋值后,后面也会根据第一个值进行累加
  Down,
  Left,
  Right
}

console.log(Direction.Up === 0);
console.log(Direction.Down === 1);
console.log(Direction.Left === 2);
console.log(Direction.Right === 3);
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);

// 字符串枚举
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right"
}

console.log(Direction2["Right"], Direction2.Up); // Right Up0

// enum Animal {
//   Dog,
//   Cat
// }

// 我们把 a 声明为 Direction 类型，可以看成我们声明了一个联合类型 Direction.Up | Direction.Down | Direction.Left | Direction.Right，只有这四个类型其中的成员才符合要求。
let ab: Direction;

ab = Direction.Up;
// ab = Animal.Cat // 不能将类型“Animal.Dog”分配给类型“Direction”

// 为枚举添加静态方法
enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

// 编写一个静态方法，把夏天的月份找出来
namespace Month {
  export function isSummer(month: Month) {
    switch (month) {
      case Month.June:
      case Month.July:
      case Month.August:
        return true;
      default:
        return false;
    }
  }
}

console.log("枚举添加静态方法：", Month.isSummer(Month.January));

/**
 * 接口
 */
interface LabelledValue {
  label: string;
  name?: string; // 可选属性
  readonly age: number; // 只读属性
}

function printLabel(labelObj: LabelledValue) {
  // labelObj.age = 20; // Cannot assign to 'age' because it is a read-only property.
  console.log(labelObj.label, labelObj.age);
}

let myObj = { size: 10, label: "test interfase obj", age: 18 };
printLabel(myObj);

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};

interface myFun{
  (a: number, b: string): boolean;
}

let myFunction: myFun;
myFunction = function (params:number, param2: string) {
  return params === 1
}

myFunction(1, 'sss')

// 可索引的类型
interface StringArray  {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ['BOB', 'TOM'];
let myStr: string = myArray[0]

// 类类型
interface ClockInterface {
  currentTime: Date | undefined;
}

class Clock implements ClockInterface {
  currentTime: Date | undefined;
  constructor(h: number, m: number) { }              
}                                                