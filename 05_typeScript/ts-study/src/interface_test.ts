/*
 * @Author: wangxiang
 * @Date: 2020-12-25 11:40:13
 * @LastEditTime: 2020-12-25 14:58:36
 * @LastEditors: wangxiang
 * @Description: 接口 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 * @FilePath: \ready\05_typeScript\ts-study\src\interface_test.ts
 */
// 直接用接口描述函数类型
interface Say1 {
  (words: string): string;
}

interface User {
  name: string;
  age: number;
  readonly isMale: boolean; // 只读属性
  englishName?: string; // 可选属性
  say: (words: string) => string; // 函数类型
  say1: Say1; // 函数类型
}

const getUserName = (user: User) => user.name;

// 属性检查
interface Config {
  width?: number;
  [propName: string]: any // 字符串索引签名 这样Config可以有任意数量的属性，并且只要不是width，那么就无所谓他们的类型是什么了
}

function CaculateAreas(config: Config): { area: number } {
  let square = 100;
  if (config.width) {
    square = config.width * config.width;
  }
  return { area: square };
}

// width 如果写成 widthh 会报错，因为ts会检查参数是否正确，
// 当传入一个对象字面量存在任何‘目标类型’不包含的属性时，会报错 error: 'widthh' not expected in type 'Config'
let mySquare = CaculateAreas({width: 5, aaa:11})

interface SuperUser{
  vipuse: () => string
}

// 继承接口
interface VIPUser extends User, SuperUser {
  broadcast: () => void
}