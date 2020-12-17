/*
 * @Author: wangxiang
 * @Date: 2020-12-16 15:10:29
 * @LastEditTime: 2020-12-17 09:27:32
 * @LastEditors: wangxiang
 * @Description: 装饰器模式 - ES7
 * @FilePath: \ready\06_设计模式\04zhuangshiqi.js
 */

/**
 * @description: 类装饰器函数
 * @param {Class} target 目标类
 * @return {Class} target
 */
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


/**
 * @description: 方法装饰器
 * @param {Class} target 类的原型对象
 * @param {String} name 所要装饰的属性名
 * @param {Object} descriptor 属性描述对象 Object.defineProperty(obj, prop, descriptor)
 * @return {*}
 */
function funDecorator(target, name, descriptor)  {
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
