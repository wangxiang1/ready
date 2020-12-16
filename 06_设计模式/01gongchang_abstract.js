/*
 * @Author: wangxiang
 * @Date: 2020-11-30 17:55:21
 * @LastEditTime: 2020-12-14 15:11:47
 * @LastEditors: wangxiang
 * @Description: 抽象工厂
 * @FilePath: \ready\06_设计模式\工厂模式\abstract.js
 */

/**
 * 抽象工厂
 */
class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
  // 提供硬件的接口
  createHardWare() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
}

/**
 * 操作系统抽象工厂
 */
class OS {
  controlHardWare() {
    throw new Error("抽象产品方法不允许直接调用，你需要将我重写！");
  }
}

/**
 * 定义具体操作系统的具体产品类
 */
// 定义具体操作系统的具体产品类
class AndroidOS extends OS {
  controlHardWare() {
      console.log('我会用安卓的方式去操作硬件')
  }
}

class AppleOS extends OS {
  controlHardWare() {
      console.log('我会用🍎的方式去操作硬件')
  }
}

/**
 * 定义手机硬件这类产品的抽象产品类
 */
class HardWare {
  // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
  operateByOrder() {
    throw new Error("抽象产品方法不允许直接调用，你需要将我重写！");
  }
}

// 定义具体硬件的具体产品类
class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log("我会用高通的方式去运转");
  }
}

class MiWare extends HardWare {
  operateByOrder() {
    console.log("我会用小米的方式去运转");
  }
}

/**
 * 具体工厂继承自抽象工厂
 */
class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    return new AndroidOS();
  }

  createHardWare() {
    return new QualcommHardWare();
  }
}

const myPhone = new FakeStarFactory();
const myOs = myPhone.createOS();
const myHardWare = myPhone.createHardWare();
myOs.controlHardWare();
myHardWare.operateByOrder();

// 如果需要添加新的手机种类，不需要修改抽象工厂MobilePhoneFactory，只需要拓展种类即可，
// 对原有系统不会造成任何潜在影响。
class newStarFactory extends MobilePhoneFactory {
  createOS() {
      // 操作系统实现代码
  }
  createHardWare() {
      // 硬件实现代码
  }
}