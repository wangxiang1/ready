/*
 * @Author: wangxiang
 * @Date: 2020-12-16 15:10:29
 * @LastEditTime: 2020-12-16 17:02:31
 * @LastEditors: wangxiang
 * @Description: 装饰器模式 - ES7
 * @FilePath: \ready\06_设计模式\04zhuangshiqi.js
 */

// 类装饰器函数，第一个参数是目标类
function classDecorator(target) {
  target.hasDecorator = true;
  return target;
}

// 将装饰器装到button上
@classDecorator
class Button {

  @funDecorator
  onClick() {
    console.log("Func的原有逻辑");
  }
}
console.log("Button 是否被装饰了：", Button.hasDecorator);


function funDecorator(target, name, descriptor) {
  console.log('funDecorator target:', target);
  console.log('funDecorator name:', name);
  console.log('funDecorator descriptor:', descriptor);
  let originalMethod = descriptor.value
  descriptor.value = function () {
    console.log('func的装饰器逻辑')
    return originalMethod.apply(this, arguments)
  }
  return descriptor
}

// 检查装饰器是否生效
const button = new Button()
button.onClick();
