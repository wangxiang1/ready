/*
 * @Author: wangxiang
 * @Date: 2020-12-17 14:52:47
 * @LastEditTime: 2020-12-17 17:12:22
 * @LastEditors: wangxiang
 * @Description: 观察者模式
 * @FilePath: \ready\06_设计模式\06guanchazhe.js
 */

/**
 * 发布者
 */
class Publiser {
  constructor() {
    this.observers = [];
    console.log("Pubilsher created");
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }

  // 通知所有订阅者
  notify() {
    this.observers.forEach(observer => {
      observer.update(this);
    });
  }
}

/**
 * 订阅者
 */
class Observer {
  constructor() {
    console.log("Observer created");
  }

  update() {
    console.log("Observer.update invoked");
  }
}

// 拓展类
class PrdPublisher extends Publiser {
  constructor() {
    super();
    // 初始化需求文档
    this.prdState = null;
    // 韩梅梅还没有拉群，开发群目前为空
    this.observers = [];
    console.log("PrdPublisher created");
  }

  getState() {
    return this.prdState;
  }

  setState(state) {
    // prd的值发生改变
    this.prdState = state;
    // 需求文档变更，立即通知所有开发者
    this.notify();
  }
}

class DeveloperObserver extends Observer {
  constructor() {
    super();
    // 需求文档一开始还不存在，prd初始为空对象
    this.prdState = null;
    console.log("DeveloperObserver created");
  }

  update(publisher) {
    // 更新需求文档
    this.prdState = publisher.getState();
    // 调用工作函数
    this.work();
  }

  // work方法，一个专门搬砖的方法
  work() {
    const prd = this.prdState;
    // 开始基于需求文档提供的信息搬砖。。。
    console.log("996 begins...");
  }
}

// 创建订阅者：前端开发李雷
const liLei = new DeveloperObserver();
// 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
const A = new DeveloperObserver();
// 创建订阅者：测试同学小B
const B = new DeveloperObserver();
// 韩梅梅出现了
const hanMeiMei = new PrdPublisher();
// 需求文档出现了
const prd = {
  eat: "火锅、烤肉",
  play: "看电影"
};

// 添加订阅者 韩梅梅开始拉群
hanMeiMei.add(liLei)
hanMeiMei.add(A)
hanMeiMei.add(B)
// 韩梅梅发送了需求文档，并@了所有人
hanMeiMei.setState(prd)
