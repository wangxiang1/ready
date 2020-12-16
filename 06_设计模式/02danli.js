/*
 * @Author: wangxiang
 * @Date: 2020-12-14 15:22:09
 * @LastEditTime: 2020-12-14 16:15:21
 * @LastEditors: wangxiang
 * @Description: 单例模式
 * @FilePath: \ready\06_设计模式\02danli.js
 */

 /**
  * 不管创建多少次，都只有返回第一次创建的实例。
  * 通过判断是否已经有生成的实例，如果没有已有实例，返回新实例，如果有，则返回已有实例。
  */
class SingleDog{
  show(){
    console.log('单例对象');
  }

  static getInstance(){
    // 判断是否已经new过这个实例
    if(!SingleDog.instance){
      // 若这个实例不存在，则创建实例
      SingleDog.instance = new SingleDog();
    }
    // 如果已经存在，直接返回
    return SingleDog.instance;
  }
}

const ins1 = SingleDog.getInstance();
const ins2 = SingleDog.getInstance();
ins1.show();
console.log(ins1 === ins2);

/**
 * 闭包实现
 */
class SingleCat{
  show(){
    console.log('单例模式闭包实现');
  }
}

SingleCat.getInstance = (function () {
  // 定义自由变量instance，模拟私有变量
  let instance = null;

  return function(){
     // 判断自由变量是否为null
    if(!instance){
       // 如果为null则new出唯一实例
      instance = new SingleCat();
    }
  
    return instance;
  }
})(); // 需要用立即执行函数包裹，因为最终返回的是一个function，需要执行function才能返回实例

console.log(SingleCat);
const cat1 = SingleCat.getInstance();
const cat11 = SingleCat.getInstance1();
console.log('getInstance:',cat1);
const cat2 = SingleCat.getInstance();
cat2.show();
console.log(cat1 === cat2);