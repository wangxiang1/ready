"use strict";
/*
 * @Author: wangxiang
 * @Date: 2020-12-21 14:24:28
 * @LastEditTime: 2020-12-22 11:44:39
 * @LastEditors: wangxiang
 * @Description: ceshi
 * @FilePath: \ready\05_typeScript\ts-study\src\index.ts
 */
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
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
var isLoading = false;
// JavaScript中的二进制、十进制、十六进制等数都可以用 number 类型表示。
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var book = "wangxiang string test";
// 表示没有任何类型，当一个函数没有返回值时，你通常会见到其返回值类型是 void
function warnUser() {
    console.log("void 表示没有任何类型，没有返回值时，返回类型是void");
}
// undefined可以赋值给void
var a = undefined;
var sym1 = Symbol("key1");
var sym2 = Symbol("key2");
Symbol("key1") === Symbol("key1"); // false
// 空数组，而且永远是空的
var empty = [];
var list = [1, 2, 3];
// 元组  表示一个已知元素数量和类型的数组，各元素的类型不必相同。
// 元组非常严格，即使类型的顺序不一样也会报错。
var x;
x = ["1111", 1];
/**
 * 枚举
 */
// 数字枚举
// 声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型。
// 当我们声明一个枚举类型是,虽然没有给它们赋值,但是它们的值其实是默认的数字类型,而且默认从0开始依次累加
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up === 0);
console.log(Direction.Down === 1);
console.log(Direction.Left === 2);
console.log(Direction.Right === 3);
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);
// 字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2["Right"], Direction2.Up); // Right Up0
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
})(Animal || (Animal = {}));
// 我们把 a 声明为 Direction 类型，可以看成我们声明了一个联合类型 Direction.Up | Direction.Down | Direction.Left | Direction.Right，只有这四个类型其中的成员才符合要求。
var ab;
ab = Direction.Up;
// ab = Animal.Cat // 不能将类型“Animal.Dog”分配给类型“Direction”
// 为枚举添加静态方法
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
// 编写一个静态方法，把夏天的月份找出来
(function (Month) {
    function isSummer(month) {
        switch (month) {
            case Month.June:
            case Month.July:
            case Month.August:
                return true;
            default:
                return false;
        }
    }
    Month.isSummer = isSummer;
})(Month || (Month = {}));
console.log('枚举添加静态方法：', Month.isSummer(Month.January));
function printLabel(labelObj) {
    console.log(labelObj.label, labelObj.age);
}
var myObj = { size: 10, label: 'test interfase obj', age: 18 };
myObj.age = 20;
printLabel(myObj);
