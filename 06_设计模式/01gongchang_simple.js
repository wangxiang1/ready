/*
 * @Author: wangxiang
 * @Date: 2020-11-30 17:55:00
 * @LastEditTime: 2020-12-14 15:22:46
 * @LastEditors: wangxiang
 * @Description: 简单工厂
 * @FilePath: \ready\06_设计模式\01gongchang_simple.js
 */
// 构造器模式
function User(name, age, career) {
  this.name = name;
  this.age = age;
  this.career = career; // 工种
}

const user = new User("lilei", 18, "product manager");

// 简单工厂模式
// 工厂模式：将创建对象的过程单独封装
function User1(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career; // 工种
  this.work = work; // 工作内容
}

function Factory(name, age, carrer) {
  let work;
  switch (carrer) {
    case "coder":
      work = ["写代码", "写系分", "修Bug"];
      break
    case "product manager":
      work = ["订会议室", "写PRD", "催更"];
      break
    case "boss":
      work = ["喝茶", "看报", "见客户"];
      break
  }
  return new User1(name, age, carrer, work);
}
// Factory 帮我们进行了封装，我们只需要传参就行了
const user1 = new Factory("wang", 26, "coder");
const user2 = new Factory("wang2", 20, "product manager");
console.log(user1.work);
console.log(user2.work);
