/*
 * @Author: wangxiang
 * @Date: 2020-12-25 10:11:56
 * @LastEditTime: 2020-12-25 11:30:55
 * @LastEditors: wangxiang
 * @Description: 类
 * @FilePath: \ready\05_typeScript\ts-study\src\class_test.ts
 */

 // 抽象类
abstract class Animal{
  abstract makeSound(): void;
  move(): void{
    console.log('roaming the earch');
  }
}

class Cat extends Animal{
  makeSound(){
    console.log('miao miao');
  }
}

const cat = new Cat();
cat.makeSound();
cat.move();

// 访问限定符
// public
class Car {
  // 成员都默认为 public, 被此限定符修饰的成员是可以被外部访问。
  public run(){
    console.log('启动...');
  }

  private run_pri(){
    console.log('私有属性，只能在类内部访问...');
  }

  protected run_prot(){
    // this.run_pri()
    console.log('只可以被类的内部以及类的子类访问');
  }
}

const car = new Car();
car.run()

class GTR extends Car{
  init(){
    this.run_prot();
  }
}

const gtr = new GTR()
gtr.init()
gtr.run()

// 类可以做接口
// 当我们需要传入 props 类型的时候直接将 Props 作为接口传入，此时 Props 的作用就是接口，
// 而当需要我们设置defaultProps初始值的时候，我们只需要: public static defaultProps = new Props()
// Props 的实例就是 defaultProps 的初始值，这就是 class 作为接口的实际应用，我们用一个 class 起到了接口和设置初始值两个作用，方便统一管理，减少了代码量。
export default class Props {
  public speed: number = 500
  public height: number = 160
  isAuto: boolean = true
  onChange!: () => {}
}


