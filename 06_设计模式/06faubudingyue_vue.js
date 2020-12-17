/*
 * @Author: wangxiang
 * @Date: 2020-12-17 16:32:37
 * @LastEditTime: 2020-12-17 17:13:03
 * @LastEditors: wangxiang
 * @Description: 发布订阅-vue源码实现
 * @FilePath: \ready\06_设计模式\06faubudingyue_vue.js
 */

/**
 * 实现observer
 * 对监听的数据对象进行遍历、给它的属性加上定值的getter setter函数。
 * 当这个对象的某个属性发生改变，就会触发setter函数，进而通知到订阅者。
 */
function observe(target) {
  if (target && typeof target === "object") {
    Object.keys(target).forEach(key => {
      defineReactive(target, key, target[key]);
    });
  }
}

// 给目标属性加监听器
function defineReactive(target, key, val) {
  const dep = new Dep()
  
  // 属性值也可能是object类型，需要调用observe进行递归遍历，进行监听
  observe(val);

  // 为当前属性安装监听器
  Object.defineProperty(target, key, {
    // 可枚举
    enumerable: true,
    // 不可配置
    configurable: false,
    get: function() {
      return val;
    },
    set: function(value) {
      console.log(`${target}属性的${key}属性从${val}值变成了${value}`);
      // val = value;
      // 通知所有订阅者
      dep.notify()
    }
  });
}

/**
 * 订阅者类
 */
class Dep {
  constructor() {
    // 初始化订阅队列
    this.subs = [];
  }

  // 增加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }

  // 通知所有订阅者
  notify() {
    this.subs.forEach(sub => {
      sub.update();
    });
  }
}


class Dep1 {
  constructor(){
    this.deps = []
  }

  addDep(dep) {
    this.deps.push(dep)
  }

  notify() {
    this.deps.forEach(dep => dep.update())
  }
}

console.log(Dep1.target);